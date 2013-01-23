---
layout: post
title: How To Remove the Bottom Bar From Github Gist
category: web

excerpt: Github Gist is an awesome snippet sharing site for code, however the bar they add to the bottom of embedded snippets is kind of annoying and ruins the look of the site. Here's how to change the style of or delete the meta footer bar that appears at the bottom of embedded Gists.
---

[Github Gist](http://gist.github.com) is an awesome snippet sharing site for code, however the bar they add to the bottom of embedded snippets is kind of annoying and ruins the look of the site. Here's how to change the style of or delete the meta footer bar that appears at the bottom of embedded Gists.

#####To Remove (i.e. make it non visible):######
Add this to your `.css` file:
<script src="https://gist.github.com/4603471.js"></script>

#####To Add Custom Styles:#####
I haven't done this, so no guarantees. However, you're probably going to have to add custom styles to one of the classes or IDs from the screenshot below. 

![screenshot of ids and classes](http://d.pr/i/ho4l+)

The best way to check for yourself is to inspect the page's source/elements (In Chrome, right click on Gist box > Inspect Element). If you haven't already familiarised yourself with the Inspector, now is a great time to start. It's ridiculously useful.

