---
title: "A Pro’s Guide to the Best Secret Mac Features"
layout: post
category: mac
---

Even though you use a Mac every day at work, there are a tonne of secret tweaks and pro features that you don’t know about.
When you watch someone else use their Mac they just seem so… much… better. 

This guide will take you from a basic pro (“Yeah I use a Mac”) to an old, wizened Mac oracle who people gather round to ask ”Wait… How on earth did you do that so quickly!?”

It’s designed to be skimmed now and Googled later. Every tip in this guide hits two criteria:

1. Is this something I personally use? (But can never remember how.)
2. Am I surprised that more people don’t know about this?

It’s not exhaustive, but I’m certain you’ll learn like four things in the two minutes it takes you to skim this article.

<br />

## Table of Contents

**Terminal Tweaks**

  - [Creating a Super Minimal Desktop](#creating-a-super-minimal-desktop)
  - [Show and Hide Desktop Icons](#show-and-hide-desktop-icons)
  - [Show and Hide Hidden Files in Finder](#show-and-hide-hidden-files-in-finder)
  - [Add Blank Space Icon Separators to the Dock](#add-blank-space-icon-separators-to-the-dock)
  - [Match the Desktop background colour to the menu bar](#match-the-desktop-background-colour-to-the-dark-menu-bar)
  - [Faster Animations for the Dock](#faster-animations-for-the-dock)
    + [Make the Dock show instantly](#make-the-dock-show-instantly)
    + [Make the Dock animation itself faster](#make-the-dock-animation-itself-faster)
    + [Reset the delay before the Dock animation starts to its default](#reset-the-delay-before-the-dock-animation-starts-to-its-default)
    + [Reset the Dock animation to its default speed](#reset-the-dock-animation-to-its-default-speed)
  - [Faster Animations for Mission Control](#faster-animations-for-mission-control)
    + [Change Mission Control animations to a cross-fade](#change-mission-control-animations-to-a-cross-fade)
    + [Reset Mission Control animations to their default](#reset-mission-control-animations-to-their-default)
  - [Disable Spell Check in Every Application](#disable-spell-check-in-every-application)
  - [Prevent Your Mac from Going to Sleep](#prevent-your-mac-from-going-to-sleep)
  - [Disable Shadow for Window Screenshots](#disable-shadow-for-window-screenshots)

**Screenshots Like a Pro**

  - [Take a screenshot of just the window](#take-a-screenshot-of-just-the-window)
  - [Grow the screenshot capture zone](#grow-the-screenshot-capture-zone)
  - [Move the screenshot capture zone](#move-the-screenshot-capture-zone)
  - [Copy the screenshot to the clipboard](#copy-the-screenshot-to-the-clipboard)

**Powerful GUI Features**

  - [Use Tab to navigate everything](#use-tab-to-navigate-everything)
  - [Customize your menu bar](#customize-your-menu-bar)
  - [Open a file or app in Finder from the Dock](#open-a-file-or-app-in-finder-from-the-dock)
  - [Change an app’s icon](#change-an-apps-icon)
  - [Open a file in a certain app](#open-a-file-in-a-certain-app)
  - [Change the default app for a file type](#change-the-default-app-for-a-file-type)
  - [Bulk rename files in Finder](#bulk-rename-files-in-finder)
  - [Type emoji with a keyboard shortcut](#type-emoji-with-a-keyboard-shortcut)


<br />

## Terminal Tweaks

You can apply each of the following tweaks with the Terminal.

![How to execute Terminal command][apply-tweak-terminal]

1. Open Terminal by typing **Command-Space** to trigger Spotlight then search for ‘Terminal’.
2. For each step in the tweak, copy the command `formatted like this` and paste it into Terminal
3. Hit **Return** to execute that command
4. Repeat for subsequent commands

<br />

### Creating a Super Minimal Desktop

Here’s my super minimal Desktop setup, with hidden Desktop icons, a tidy Dock, hidden menu bar icons, and a menu bar that blends in with the background.

<!-- TODO: Tweet embed for minimal desktop video -->

<br />

### Show and Hide Desktop Icons

To hide desktop icons, copy and paste each of these into Terminal

1. `defaults write com.apple.finder CreateDesktop false`
2. `killall Finder`

To show desktop icons again,

1. `defaults write com.apple.finder CreateDesktop true`
2. `killall Finder`

<br />

### Show and Hide Hidden Files in Finder

To show hidden files in Finder, you can use the keyboard shortcut **Command-Shift-.** in macOS Sierra.

To show hidden files in Finder via the Terminal, copy and paste each of these into Terminal

1. `defaults write com.apple.finder AppleShowAllFiles YES`
2. `killall Finder`

To hide hidden files in Finder via the Terminal,

1. `defaults write com.apple.finder AppleShowAllFiles NO`
2. `killall Finder`

<br />

### Add Blank Space Icon Separators to the Dock

![Dock space separator section][dock-separators]

To add a separator icon for space between icons in your Dock,

1. `defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}';`
2. `killall Dock`
3. Repeat for each additional separator you want to add. You can rearrange the sections by dragging the blank space in your Dock.

<br />

### Match the Desktop background colour to the dark menu bar

Here’s a niche one for you: if you want to make it look like the menu bar is hidden completely, the right RGB value is 22, 22, 22. You can apply this through System Preferences > Desktop Picture > Solid Colors > Custom Color.

<br />

### Faster Animations for the Dock

There are a couple of tweaks you can use to change the animation speeds for an autohiding Dock.

#### Make the Dock show instantly

1. `defaults write com.apple.Dock autohide-delay -float 0`
2. `killall Dock`

#### Make the Dock animation itself faster

1. `defaults write com.apple.dock autohide-time-modifier -float 0.15`
2. `killall Dock`

#### Reset the delay before the Dock animation starts to its default

1. `defaults delete com.apple.dock autohide-delay`
2. `killall Dock`

#### Reset the Dock animation to its default speed

1. `defaults delete com.apple.dock autohide-time-modifier`
2. `killall Dock`

<br />

### Faster Animations for Mission Control

#### Change Mission Control animations to a cross-fade

1. `defaults write com.apple.universalaccess reduceMotion -bool true`
2. `killall Dock`

#### Reset Mission Control animations to their default

1. `defaults write com.apple.universalaccess reduceMotion -bool false`
2. `killall Dock`

<br />

### Disable Spell Check in Every Application

To disable spell check system-wide, 

1. `defaults write com.apple.notes NSAutomaticSpellingCorrectionEnabled -bool false`

To set spell check back to its default,

1. `defaults delete com.apple.notes NSAutomaticSpellingCorrectionEnabled`

<br />

### Prevent Your Mac from Going to Sleep

To stop your Mac from sleeping while you do a presentation or watch something, run the following in Terminal

1. `caffeinate`

[Caffeine](http://lightheadsw.com/caffeine/) is a great app to do this as well.

<br />

### Disable Shadow for Window Screenshots

When you take a screenshot with **Command-Shift-4** then **Space** it includes the window’s shadow (see the section on Pixel-Perfect Screenshots). You can disable this shadow by running each of these in Terminal

1. `defaults write com.apple.screencapture disable-shadow -bool TRUE`
2. `killall SystemUIServer`

<br />

## Screenshots Like a Pro

The Mac can do dozens of small variations on screenshots so your documents look professional and high-quality. Figuring out exactly how to do that is hard because your options are hidden behind keyboard shortcuts.

<!-- TODO: Tweet embed for screenshots video -->

### Take a screenshot of just the window

![Just the window screenshot Mac][just-window]

This one’s pretty well known but still my favourite. Hit **Command-Shift-4** then **Space** then select the window you want to get a screenshot of. This can be combined with the tip above about disabling the shadow for window screenshots.

### Grow the screenshot capture zone

After you hit **Command-Shift-4** you can select the region you want to capture by dragging the cursor around. You can hold **Option** to grow the window symmetrically in all directions. You can hold **Shift** to grow the window in only one direction. You can hold **Option-Shift** to grow the window symmetrically in only one direction.

### Move the screenshot capture zone

After you select a screenshot capture zone, hold down **Space** and drag your mouse cursor to move the capture region around.

### Copy the screenshot to the clipboard

Hold **Control** when you capture the screenshot and it will be copied to your clipboard instead of saved to your Desktop.

<br />

## Powerful GUI Features

### Use **Tab** to navigate everything

By default, you can use **Tab** to navigate through input fields. You can speed up your navigation by enabling the ability to tab through everything. Open System Preferences, then search for ‘full keyboard access’ and enable **Tab** for all controls at the bottom.


<br />

### Customize your menu bar

You can hold **Command** and drag menu bar icons around to rearrange icons and tweak your Mac’s appearance. Drag an icon far enough off the menu bar and it’ll disappear completely. You can also use something like [Vanilla](http://matthewpalmer.net/vanilla) or [Bartender](https://www.macbartender.com) to hide icons.

<br />

### Open a file or app in Finder from the Dock

From the Dock, you can reveal a file or application in Finder by holding **Command** and clicking the icon.

<br />

### Change an app’s icon

Use the above tip to reveal an app in Finder, then **Command-I** to open its Get Info panel, then drag your replacement icon over the icon in the top left of the Get Info window to replace it.

<br />

### Open a file in a certain app

This one’s not so much of a productivity boost, just a ”Oh cool I’m glad it works like that.” Start dragging a file in Finder (or image in a web browser, etc.), then drop it on one of the app icons in your Dock. It will open the file in that app.

<br />

### Change the default app for a file type

Use the above tip to reveal a file in Finder, then **Command-I** to open its Get Info panel, then under ”Open With” choose the application you want to set as the default for that file extension (`.html`, `.mov`, etc.), and then hit ”Change All…”


<br />

### Bulk rename files in Finder

Select a bunch of files in Finder, then choose ”Rename X Items.” This feature is so powerful it’s worth a post on its own, but once you play around with it you’ll get the gist.

<br />

### Type emoji with a keyboard shortcut

You can type emoji by hitting **Command-Control-Space** to open the emoji picker for your Mac. There are also apps like [Rocket](http://matthewpalmer.net/rocket) that make entering emoji faster.

<br />

## My Top 4 Keyboard Shortcuts

Keyboard shortcut guides are everywhere (and [the Godfather has an exhaustive list](https://support.apple.com/en-au/HT201236), so I’ll just give you my top four.

1. In Finder, **Command-Up** will navigate up one level. **Command-Down** will open the selected folder or file.
2. In Finder, **Command-Option-C** will copy the file’s path to your clipboard
3. In lots of apps, **Command-Option-Shift-V** will paste the clipboard contents without formatting.
4. The following let you navigate and select text faster. **Command-Arrow** moves you to the start or end of a line or document. **Option-Arrow** moves to the next or previous word. Hold **Shift** while doing these to highlight the text as you navigate.

<br />

## More Tips?

If you’ve got a secret tip, tweak, or trick you love, [let me know](https://twitter.com/_matthewpalmer)! 

I’m also thinking about turning some of these into a super simple Mac menu bar app (pretty much just a super fast way to toggle Desktop icons on and off, show and hide hidden files, etc.), so get in touch if that’s something you’d use.


[apply-tweak-terminal]: /img/secret-features/apply-tweak-terminal.gif
[dock-separators]: /img/secret-features/dock-separators.png
[just-window]: /img/secret-features/just-window.png
[minimal-mac-desktop]: /img/secret-features/minimal-mac-desktop.gif
