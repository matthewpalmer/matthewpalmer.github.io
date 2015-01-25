---
title: "Publishing Swift Cocoapods"
layout: post
category: ios
---

In the past few hours I’ve been battling to get [Locksmith, my Swift keychain library][ls], set up as a Cocoapod. No matter what I tried I was hitting “unknown option character `X' in: -Xlinker” and `pod lib lint errors`.

Here’s how I got it working:

1. `sudo gem uninstall cocoapods`, and if you have multiple versions, uninstall all of them.
2. `sudo gem install cocoapods --pre

Simple, right? Turns out the first step is really important; I had five different versions of Cocoapods installed, and it wasn’t using the latest one.