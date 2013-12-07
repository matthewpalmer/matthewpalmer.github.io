---
layout: post
title: "How to Post to Tumblr from iA Writer"
tags: mac
---

You can post to Tumblr right from iA Writer using a simple AppleScript; all you need is your private email publishing address from Tumblr – [click here for instructions on how to set this up](http://www.tumblr.com/docs/en/email_publishing).

Once you have this address, open up the AppleScript Editor on your Mac, create a new document, and paste in the following AppleScript:

<script src="https://gist.github.com/matthewpalmer/7836328.js"></script>

The only thing you need to change is the line:

```
set tumblr_email to "YOUREMAILPUBLISHINGCODE@tumblr.com"
```

You should change `YOUREMAILPUBLISHINGCODE@tumblr.com` to the email address provided to you by Tumblr.

Save the AppleScript to wherever you like.

Now, create a new iA Writer document, type in and save a sample blog post and then run the AppleScript we just made (either from the editor or from something like [FastScripts](http://www.red-sweater.com/fastscripts/)). A Mail window will pop up with your post. Hit send, and a minute later you should see a new post appear on your Tumblr blog.

Another option is to set up a Print Automation from iA Writer, but I found this to be a little too cantankerous.

If you have trouble or my instructions weren't clear, feel free to [contact me on Twitter](http://twitter.com/_matthewpalmer).

