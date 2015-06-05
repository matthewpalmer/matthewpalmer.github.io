---
title: "How to Remove Icons and Text from iOS Folder Previews"
layout: post
category: ios
---

I like to keep my iPhone simple, but the nine-by-nine grid of icons that is displayed in folders isn't great. I wanted two things: to remove the icons from the folder preview, and to remove the text label below each folder.

Here’s where I ended up:

![my iphone homescreen with removed icons and text][homescreen]

First, we’ll remove the icon preview.

1. I've created [a placeholder page][placeholder] that has the right shade of grey as the favicon. Open that page in Safari on your iPhone or iPad. Note that this might not work for all backgrounds, but if you have a regular-enough iPhone wallpaper, you should be able to make your own template site with the right favicon set. ([This is my iPhone wallpaper][blankwallpaper], which works well with the placeholder favicon provided.)
2. Hit the share button, and pan across on the bottom row.
3. Tap ‘Add to Home Screen’, and the icon will be added to your homescreen
4. Drag the new icon into a folder, and drag everything but the new icon to a different page. Here’s what the front page of each folder should look like.

![iphone folder with no icons][folder]

Repeat for each folder.

Changing the text below the folder is much easier. You do it the normal way, except copy-and-paste a symbol from a [Unicode table][unicodetable] or use emoji.

[homescreen]: http://i.imgur.com/TDoLHXo.png
[placeholder]: http://matthewpalmer.net/placeholder/
[blankwallpaper]: http://i.imgur.com/3aDVZTR.png
[folder]: http://i.imgur.com/L7CFSP7.png
[unicodetable]: http://unicode-table.com
