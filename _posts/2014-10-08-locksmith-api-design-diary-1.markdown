---
layout: post
title: Locksmith API Design Diary
category: development
---

I've started working on a new open source project to make it easier to use the iOS Keychain in Swift. I've gotten the basic functionality working, but I want to design the API well. I thought it might be interesting to do an ['API Design Diary'][sync], particularly because I'm not very good at designing APIs.

First, the aims.

1. Easy as hell to use. Saving and querying should be as simple as a couple of function calls, with obvious names and parameters.
2. Works with all native types. If I give it an NSDictionary and a string, I want it to be able to store that dictionary, and then for me to be able to get the dictionary back using that string as the key. But I also want this to work for NSData, NSString, NSNumber, and so on.
3. Customizable. If the user wants to specify an access group, they can. If they want to return all the matches from a query, rather than just one, they can. But I'd also like this to be done in a way that they don't have to go diving for kSecMatchLimitAll every time.

Second, my goals.

1. To better learn Swift generics.
2. To learn functional API design (is this is good fit for this project? probably not. We'll see how it turns out.)
3. To write well tested code.
4. To practice API design.

To study how this API changes as I think about it more, I'll look at a small, representative section of the API. If these notes seem scrappy, they are. They're just my rough thoughts, which I tried to translate as plainly as possible.

## v0.1

```
let locksmith = Locksmith(service: String)
locksmith.loadDictionary(key: String) -> Dictionary?
locksmith.save(["username": "password"], withKey: "currentUser") -> Dictionary?
locksmith.update(["username": "newPassword"], withKey: "currentUser") -> Dictionary?
locksmith.delete("currentUser") -> Bool
```

On reflection, this doesn't offer a lot of customisation, nor is it generic.

## v0.2

The next version I though about breaking up the API into two separate components, which I'll call the 'automatic' way and the 'manual' way. The automatic way would provide sensible defaults, and the manual way would provide full customisation via function composition.

**Automatic**

```
func saveDictionary(dictionary: Dictionary<String, String>, forKey key: String) -> NSError?

func loadDictionary(key: String) -> (NSDictionary?, NSError?)
```

**Manual**

```
// Decide on the parameters you want
let composition = genericPassword() >|> accessGroup("group") >|>  service("service") >|> forKey("key") >|> account("key")

// Create your request
let request = composition(NSMutableDictionary())

// Perform the request
let (dictionary, error) = performReadRequest(request)
```

I quite like this approach, but I'm not sure the functional style is particularly appropriate. This approach also means there will be separate methods for `performReadRequest`, `performWriteRequest`, etc..

## v0.3

**Initialization**

```
init(service: String)
init(service: String, group: String)
init(service: String, group: String, request: KeychainRequest)
```

Now I could either mandate that the user specify a KeychainRequest for all of their initialization, and provide some standard constructors for the typical requests (but the user would still have to call another function). Or I could make the request parameter optional, and choose a sensible default. Or I could make the user pass in the request as a parameter to the `performRequest` method—I guess this last option is the most pragmatic.

How does the user then kick off the request?

**Creating the request**

```
var request = Locksmith.forKey("matt") >|> Locksmith.genericPassword() >|> Locksmith.returnData() >|> Locksmith.matchOne() >|> Locksmith.service("service")

// or

var locksmith = Locksmith(service: "service")
locksmith.key = String
locksmith.type = .GenericPassword | // ??
locksmith.returnData = .Data | // ??
locksmith.match = .One | .All
```

**Performing the request**

```
func performRequest(ofType type: RequestType) -> (NSDictionary?, NSError?)
func performRequest(request: KeychainRequest, ofType type: RequestType) -> (NSDictionary?, NSError?)

func performRequest(ofType type: RequestType)
```

- not generic in return type
- what's being saved (if anything) is hidden behind the KeychainRequest type
- maybe I should separate the data being saved from the options passed to it
- more suited to be an internal method
- rename KeychainRequest to KeychainOptions?

## v0.4

After looking at this, I'm starting to think that maybe a functional API is not suited for this problem—I feel like I'm forcing a functional mindset just because I want to learn functional programming better.

Now I'm thinking of switching to a singleton-style class method only design. This makes sense because there is only one keychain, and only one thing can access it at a time. It makes the API a little cleaner in places.

However, this limits the convenience of customizing the request. Perhaps I should break the API up into two parts, a `KeychainRequest` for customizing the request, and `Locksmith`, for performing the requests. `Locksmith` would also provide high level convenience methods for doing 90% of the tasks that need to be done.

```
Locksmith.readData(forKey: String, inService: String)

// Or

var request = KeychainRequest(service: String)
request.key = "key"
request.matchLimit = .One

Locksmith.performRequest(request: KeychainRequest, ofType: .Read)
```

But then how should the KeychainRequest be created and modified? Should it be functional? How much should be done in the initializer, and how much be set manually? My instinct is that mandatory stuff is part of the initializer, but different types of requests will have different required data. Do I then need several subclasses of `KeychainRequest`, like `ReadRequest`, `WriteRequest`, `UpdateRequest`, `DeleteRequest`? Does that mean I don't need to include the `ofType` parameter in the performRequest call?

```
var request = ReadRequest(service: String, forKey: String)
request.matchLimit = .One

Locksmith.performRequest(request: KeychainRequest, )
```

## >v0.5
For the next iteration, I'm thinking of further breaking up the implementation of the keychain request (save, read, update, delete) from the options. Like Locksmith will have a couple of class methods, e.g. `Locksmith.read(LocksmithRequest)`.

Follow me on [Twitter](http://twitter.com/_matthewpalmer) to stay up to date.

[sync]: http://inessential.com