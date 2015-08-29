---
title: "Optional Computed Properties in Swift Protocols"
layout: post
category: swift
---

You might want to declare an optional property when developing your Swift protocol, but not want to go full `@objc` since then you couldn’t use structs. Previously, this hasn’t been possible. Here’s one way I’ve been using to work around this.

You have your protocol, with one required property that all conforming types must have, and one that they can optionally include

{% highlight swift %}
protocol SomeProtocol {
    var required: String { get }
    var optional: String? { get }
}
{% endhighlight %}

Then, you use a protocol extension to implement that optional computed property for all conforming types

{% highlight swift %}
extension SomeProtocol {
    var optional: String? { return nil }
}
{% endhighlight %}

Whenever a conforming type wants to use that `optional` property, if it’s set, it’ll be used, but if not, that’s fine as well!

So now we can have structs that can choose whether they want to implement that computed property.

{% highlight swift %}
struct ConformsWithoutOptional {
    let required: String
}

struct ConformsWithOptional {
    let required: String
    let optional: String?
}
{% endhighlight %}

One thing to note is that you can’t do `optional: String` in `ConformsWithOptional` and expect it to override the original `optional: String?` in other protocol extensions. You have to match the type exactly: `optional: String?`. That caught me out for a while.

In general, it’s probably better to break up your protocols so that users can pick and choose the things they want to implement, but this is a quick and useful trick that I haven’t seen written up anywhere else.
