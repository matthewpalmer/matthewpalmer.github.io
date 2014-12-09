---
layout: post
title: "How to Extract Markdown Reference Links from Text"
category: mac
---

Like a lot of people, I write in Markdown. Markdown has support for reference links, which look like the following:

```
This is a [link to something][lts] that I am sharing.
More writing...

[lts]: http://wwww.link.com
```

I love using links in this style, but I often forget what I've referenced after I've linked it. I've written a short command line to grab out the link identifiers from a Markdown post.

With the contents of your writing on the clipboard, run the following in Terminal.

```
pbpaste | egrep -o '\]\[[a-zA-Z0-9\-]+\]' | sed -E 's/]//' | pbcopy
```

Now all of the references to links will be on the clipboard, ready for you to hit Command+V to paste at the end of your blog post.

```
[editor]: ...
[fs]: ...
[mp]: ...
```

If you have any questions, [let me know on Twitter](http://twitter.com/_matthewpalmer).