---
title: "Vanilla: Hide menu bar icons on your Mac for free"
layout: post
category: mac
excerpt: I released Vanilla, an app that hides Mac menu bar icons, and wrote this behind-the-scenes article about its development and launch.
---

I recently released [Vanilla](http://matthewpalmer.net/vanilla/), a free app that lets you hide menu bar icons on your Mac.

I had a bunch of people asking to hide the Rocket menu bar icon, but I didn't want to add an extra option to Rocket's already-crowded preferences window.

There are other apps out there that already do this (I love Bartender!) but it felt weird recommending people download an app that costs $15 when Rocket was free. So I set about figuring out whether an app to hide menu bar icons is something people even wanted. This link took you to a simple page on my site that explained the idea and told people to tweet me if they wanted it.

<!-- Image of Rocket preferences -->
![Rocket preferences](/img/vanilla-post/rocket-preferences.png)

<small style="display:block;text-align:center;color:gray;font-weight:100;font-size:10px;font-family:Helvetica;margin-top:2%;">Testing the potential for Vanilla</small>

A few people followed up on this, so I decided to build the app.

I'm flipping back through my notebook and thought it might be kind of interesting to post up some photos (and also because I'm going to throw this notebook away soon but don't want to lose the photos).

<br />
<br />

There's an annoying limitation in [Rocket](http://matthewpalmer.net/rocket) where, for certain apps that don't properly implement the macOS accessibility API, it's impossible to figure out the caret location to position the shortcut window. However, the system emoji picker doesn't have this limitation. Why? I picked up my disassembler and started poking around the system frameworks.

My best guess is that the system emoji positioner runs as a framework *inside* the current application. I dug around a bit, and found the [macOS Open Scripting Architecture](https://developer.apple.com/library/content/documentation/AppleScript/Conceptual/AppleScriptX/Concepts/osa.html) which lets you do that, but I couldn't get it to work right. Anyway, while I was disassembling I also had a look at the system's window server, which is responsible for showing stuff in the menu bar.

<!-- Screenshot of p 93 -->

![Notebook p 93](/img/vanilla-post/disassemble.JPG)

<small style="display:block;text-align:center;color:gray;font-weight:100;font-size:10px;font-family:Helvetica;margin-top:2%;">Disassembling, and then aha!.</small>

Take a look right at the bottom of that photo though—"can we just widen & shrink the status bar's view"? That's probably the "aha!" moment. I realised we could do a neat little hack with a *perfectly* coloured window to hide some menu bar icons.

<br />

Anyway, I figured that was enough to build an app on, and away I went.

<!-- Screenshot of p97 -->

![Notebook p 106](/img/vanilla-post/get-started.JPG)

<small style="display:block;text-align:center;color:gray;font-weight:100;font-size:10px;font-family:Helvetica;margin-top:2%;">Lots of mental energy</small>

<br />

Things start to get ruthless on this next page: I cut a bunch of features and figure out exactly what it'll take to get this app built quickly.

![Features](/img/vanilla-post/ruthless.JPG)

<small style="display:block;text-align:center;color:gray;font-weight:100;font-size:10px;font-family:Helvetica;margin-top:2%;">Prioritising some features.<br/>"$" is paid upgrades, "W" is web or marketing, "C" is core experience.</small>

<!-- Screenshot of p98 -->

Interesting note on "customisable icons" (a crossed out item in the top left column). I was dead-set on this being a core part of the Pro upgrade, and that no one would upgrade without it. But I decided to cut it from the 1.0 to get it out quickly. Guess what? Not a single person has asked for that feature since launch. Maybe that's obvious in retrospect, but I was 100% certain this would be an important feature. Pretty glad I avoided that one.

<!-- Screenshot of p106 -->

<br />

Also by this point I'd rewritten the core of Vanilla about ten times to get the effect and animations right. Check the right hand page—I must have decided to set a goal.

![Notebook p 106](/img/vanilla-post/zen-af.JPG)

<small style="display:block;text-align:center;color:gray;font-weight:100;font-size:10px;font-family:Helvetica;margin-top:2%;">"Zen as fuck."</small>

<!-- Screenshot of app icon -->

<br />

An early attempt at an app icon. Look at this piece of shit.

![Early app icon](/img/vanilla-post/shitty-icon.png)

<small style="display:block;text-align:center;color:gray;font-weight:100;font-size:10px;font-family:Helvetica;margin-top:2%;">Gross</small>

<!-- Photo of workspace -->

<br />

This is where I did 95% of the work on Vanilla in the early mornings before work. Those of you with a good memory for buggy software will know that Vanilla's 1.0 was *terrible* at multi-monitor support. This is why.

![Notebook p 106](/img/vanilla-post/workspace.JPG)

<small style="display:block;text-align:center;color:gray;font-weight:100;font-size:10px;font-family:Helvetica;margin-top:2%;">Probably not the most ideal workspace</small>


<!-- Screenshot of Vanilla window -->
<br />

Here's where I figured it was good enough to release so that I could hit my launch deadline of the 2nd of May.

![Ready to ship](/img/vanilla-post/ready-to-ship.png)

<small style="display:block;text-align:center;color:gray;font-weight:100;font-size:10px;font-family:Helvetica;margin-top:2%;">Ready to ship</small>

<br />

Six updates later and a couple more core rewrites. I had tried to talk to a few designers throughout the process but no one was able to replicate the right filter and blur effects to get the background colour to match the menu bar exactly. So I finally decided to do some Computer Sciencing and write an inpainting algorithm to remove the menu bar's text so we could always get the colouring spot on. It works pretty well.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Scribblings of a madman… an early cut of the new image inpainting algorithm to perfectly match Vanilla to your menu bar 👌 Update out now! <a href="https://t.co/VEJElSmDFP">pic.twitter.com/VEJElSmDFP</a></p>&mdash; Matthew Palmer (@_matthewpalmer) <a href="https://twitter.com/_matthewpalmer/status/873272441925009408">June 9, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

More work still to do on Vanilla but I wanted to get these photos up before I get rid of this notebook.
