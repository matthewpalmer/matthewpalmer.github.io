---
layout: post
title: "Automatically Create a New Tumblr Link Post in iA Writer"
tags: mac
---

To create a new link post for Tumblr that you can edit in iA Writer, you need to create an AppleScript document.

Highlight the text you want to quote in Safari, run the script and a new Tumblr link post will open in iA Writer after prompting you for a custom title or you can use the default of the page's title. I've also [written instructions for how this file can be posted automatically from iA Writer to Tumblr](http://palmer.im/2013/12/post-to-tumblr-from-ia-writer/).

Create a new AppleScript document with the following contents:

<script src="https://gist.github.com/matthewpalmer/7836424.js"></script>

Highlight some text in Safari, run the AppleScript and a new iA Writer document should appear with the selected text.

To fully automate this process, you can combine the script from [here](http://palmer.im/2013/12/post-to-tumblr-from-ia-writer/) with the one embedded above. Now, you can select text on a site, run the script and a new link post will be sent automatically. You can use the following AppleScript to achieve this:

<script src="https://gist.github.com/matthewpalmer/7836472.js"></script>

If you have trouble or my instructions weren't clear, feel free to [contact me on Twitter](http://twitter.com/_matthewpalmer).

