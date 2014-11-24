---
layout: post
title: Locksmith (iOS Keychain Library in Swift)
category: ios
---

I previously [wrote](http://matthewpalmer.net/blog/2014/10/08/locksmith-api-design-diary-1/) about the design decisions for a keychain library I was making. Towards the end of the post I was considering separating out the class that performs the requests from the class that constitutes the requests themselves—I called them `Locksmith` and `LocksmithRequest` respectively. This is the approach I stuck with, and I think it's working out well.

I've made [Locksmith, a sane way to work with the keychain in Swift,](https://github.com/matthewpalmer/Locksmith) available on Github. Check it out, and let me know what you think.