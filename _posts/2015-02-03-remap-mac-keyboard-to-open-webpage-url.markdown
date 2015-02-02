---
title: "Open a Webpage with a Keyboard Shortcut on Mac OS X"
layout: post
category: mac
---

Augustus asked me a question on Twitter.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/_matthewpalmer">@_matthewpalmer</a> saw ur article abt keyboard remapping. Is it possible to create a script(?) that remaps one&#39;s key to direct them to a URL?</p>&mdash; Augustus Sung (@agussung) <a href="https://twitter.com/agussung/status/562233523419897859">February 2, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Here's how to open a webpage by remapping a keyboard shortcut on Mac OS X.

1. Download and install [FastScripts][fs].
2. Save the following in Script Editor to `/Users/<username>/Library/Scripts`, changing the URL as required.

```
set website to "http://google.com"
do shell script "open " & website
```

3. Click on the FastScripts icon in your menu bar, go into the ‘FastScripts’ item, and then click ‘Preferences’.
4. Click the ‘Script Shortcuts’ tab, and double click the script you just saved. FastScripts will record the next keyboard shortcut you enter.
5. Now you should be able to load a page in your web browser by using that keyboard shortcut.

[fs]: http://www.red-sweater.com/fastscripts/
