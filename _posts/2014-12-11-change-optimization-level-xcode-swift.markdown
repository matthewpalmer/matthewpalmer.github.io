---
layout: post
title: "How to Change the Optimization Level in Xcode 6 for Swift"
category: ios
---

For [Locksmith, my keychain library][ls], we were facing a bug that only cropped up on release builds. This was caused by the optimization that Xcode does for release builds. Here's a quick guide on how to change the optimization level.

1. Click on your target in the left sidebar.
2. Click on Build Settings
3. Search for 'Optimization level'
4. Change the values as required (we had to set the Optimization Level to -Onone to fix the bug)

![changing the optimization level in xcode 6][pic]

[ls]: http://github.com/matthewpalmer/Locksmith
[pic]: http://i.imgur.com/PnsxZfD.png
