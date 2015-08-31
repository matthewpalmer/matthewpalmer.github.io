---
title: "Protocol Oriented Programming in the Real World"
layout: post
category: swift
---

This weekend, I rewrote most of [Locksmith, my library for using the iOS keychain,][ls] to be protocol-oriented. This was a fascinating process, and one that isn’t yet finished.

### Why?

The primary reason I tried out a protocol-oriented approach was to manage complexity in a type-safe way.

The big problem with the iOS keychain is the sheer complexity of it. There are five types of keychain items: generic passwords, internet passwords, certificates, keys, and identities. For each of these, you have four operations: create, read, update, and delete. That’s 20 operations, all with different attributes that need to be set and things that can go wrong.

The way I thought about it, we have customization on two axes: types of items, and operations on items.

To accomplish this, the actual Cocoa implementation uses a bunch of string constants and difficult to remember key/value combinations. 
This works, but it’s not user-friendly. You don’t know what’s gone wrong and why, and you never know the expected type of something without diving for the docs.

With Locksmith, I wanted to have the same power as the Cocoa implementation, but in a way that made use of the type system and felt Swift-native.

### What do you get out of protocols?

A couple of awesome things emerge when you focus on protocols

* you can add functionality in new dimensions to existing types
* you can easily adapt a rapidly growing API
* you can decouple certain parts of your API for flexibility and testing

**Dimensions**

Say we have a Twitter account, which is a struct. And let’s say that we want to be able to save the username and password for that struct to the keychain. 

{% highlight swift %}
struct TwitterAccount {
  let username: String
  let password: String
}
{% endhighlight %}

In the past, we might’ve added a method to this struct to save it to the keychain.

{% highlight swift %}
struct TwitterAccount {
  let username: String
  let password: String

  func saveToKeychain() throws {
    try Locksmith.saveData(["username": username, "password": password], forUserAccount: "username", inService: "Twitter")
  }
}
{% endhighlight %}

This is okay, but there’s a lot we don’t know about a given `TwitterAccount` from its declaration. Plus, we’re a bit limited by what that library provides to us.

But with Locksmith’s new protocol oriented design, we get some nice functionality for free.

{% highlight swift %}
struct TwitterAccount: CreateableSecureStorable, GenericPasswordSecureStorable {
  let username: String
  let password: String

  // Required for `GenericPasswordSecureStorable`
  let service = "Twitter"
  var account: String { return username }

  // Required for `CreateableSecureStorable`
  var data: [String: AnyObject] {
    return ["password": password]
  }
}
{% endhighlight %}

And with the method we get from `Createable`, we can save our item

{% highlight swift %}
let t = TwitterAccount(username: "_matthewpalmer", password: "my_password")
try t.saveInKeychain()
{% endhighlight %}

Oh, and guess what… if we conform to `Readable` and `Deleteable` on that struct (which have no additional requirements), then we can use `readFromKeychain()` and `deleteFromKeychain` without adding any other code!

{% highlight swift %}
struct TwitterAccount: GenericPasswordSecureStorable,
                       CreateableSecureStorable,
                       ReadableSecureStorable,
                       DeleteableSecureStorable {
  // ...
}

let t = TwitterAccount(username: "_matthewpalmer", password: "my_password")
try t.saveInKeychain()
// For free!
let result = t.readFromKeychain()
try t.deleteFromKeychain()
{% endhighlight %}

That’s really awesome. It almost feels like using mixins or stylesheets in CSS.

Consider this as well: in the first instance, we conformed to two protocols. One for `Createable`, which works for anything that can provide `data`, and one for `GenericPassword`, which works for anything that belongs to a `service` and has an `account`.

*Two axes* of customization.

Imagine a 4×5 chessboard, where for each square on the bottom you have one of our actions: create, read, update, and delete. On the vertical, you’ve got a square for each type of item: generic password, internet password, certificate, key, and identity.

20 different permutations of closely-related stuff is tough to model. But with protocols and protocol extensions, it becomes *so much easier*. With protocol extensions, protocols add functionality in new dimensions.

That’s cool, but it’s probably not clear just *how cool* that really is. Let me tell you one more thing.

We’ve seen that generic passwords have a `service` and an `account`. Those are required. What I didn’t show you was that generic passwords can also have `creationDate`, `modificationDate`, `description`, `comment`, `creator`, `label`, `type`, `isInvisible`, and `isNegative`. (And some of them don’t have the type you’d expect!)

Let’s extend our `TwitterAccount` to use some of these.

{% highlight swift %}
struct TwitterAccount: CreateableSecureStorable, GenericPasswordSecureStorable {
  let username: String
  let password: String

  // Required for `GenericPasswordSecureStorable`
  let service = "Twitter"
  var account: String { return username }

  // Required for `CreateableSecureStorable`
  var data: [String: AnyObject] {
    return ["password": password]
  }

  // Optional for `GenericPasswordSecureStorable`
  let creationDate: NSDate? = NSDate()
  let description: String? = "A Twitter account"
  let type: UInt? = 13
  let comment: String? = "Woah, this is complicated."
}
{% endhighlight %}

Too easy! We just added the properties onto our type.

But wait… if we wanted to use the old static func approach, how would we do that?

You might create methods that have optional or default arguments, but that explodes with complexity really quickly.

Or you could pass around a dictionary and check against some agreed-upon keys, but then you don’t get the type system working for you. You’d never know what was required and what was optional, and it’s impossible to know for sure at compile time.

Protocol oriented programming is the best approach I can think of to deal with this complexity and configurability.

When I was first implementing this, I realised we weren’t actually returning anything useful from our `readFromKeychain()`. We were giving people a `[String: AnyObject]`, which is barely a step up from where we started!

We needed a nice type for returning data, but we also had to communicate to users that the metadata returned from a `GenericPassword` operation wouldn’t be the same as that returned from an `InternetPassword` operation—and they had to be able to know that at compile time.

Sounds like a huge pain.

Having protocols all the way down made it super easy to mix together the right type to return to users—we developed a `ResultType`, and created a couple of other protocols (`GenericPasswordResultType` and `InternetPasswordResultType`) that shared certain properties, but also provided their own unique properties.

Plus, having this `ResultType` meant that we could provide *actual types* for the metadata we get back from the keychain—if the user saves an `NSDate` as metadata, they’re going to get an `NSDate` back. Wonderful—and almost impossible without protocols.

**Testing**

The WWDC session on protocol oriented programming mentioned testing, but it was a point that I didn’t notice at the time.

Initially, I found that similar operations needed slightly different ways of actually performing the request (`SecItemAdd` vs `SecItemCopyMatching`, etc.). To help with code reuse, I introduced a closure on the root protocol: `var performRequestClosure: (requestReference: CFDictionaryRef, inout result: AnyObject?) -> (OSStatus) { get }`. Hairy.

This started as an internal implementation detail, and became a super useful aspect of the library.

First, it provides another point of customization, where users can change how or where certain items will be stored. If someone wants to store their type somewhere other than the iOS keychain, it’s really easy for them to do that. I use this internally in Locksmith, so that we can customize the options for a request in shared code, and then perform the request in code unique to the implementer. Very useful.

Second, and following from the first point, we can override `performRequestClosure` to get access to the serialized request, and make sure we’ve added our attributes properly.

We implement validation of the request to be performed in the closure—we take the `requestReference`, convert it to an NSDictionary, and check that all of the required attributes have been set.

{% highlight swift %}
// Within `performRequestClosure`
let request = requestReference as NSDictionary
let creator = request[String(kSecAttrCreator)] as! CFNumberRef
XCTAssertEqual(creator as UInt, expectedCreator)

// ...
{% endhighlight %}

That means we can easily and thoroughly test that all of the desired properties have been set, but without using mocks and relying on internal implementation!

### Wrap up

There’s a lot to be liked about protocol oriented programming, but the big thing for me is the feeling that I still have a tonne to learn. This was my first crack at it, so if you have feedback or suggestions, feel free to [contact me on Twitter][tw].

This was a very design-focused post. If you want to see how it’s actually implemented, [check out the Locksmith Github repository][ls].

[ls]: http://github.com/matthewpalmer/Locksmith
[tw]: http://twitter.com/_matthewpalmer
