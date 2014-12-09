---
layout: post
title: "Using AppleScript to Automate Building a Press List"
category: mac
---

I've been building up a press list [to market my apps](https://colourcoding.org/apps). But building a press list involves a lot of tedious Googling, copy and pasting, and Twitter searching—this is frustrating, mindless work. 

The good news is that we can automate a lot of the process with a dead-simple AppleScript.

If we have a web page open, we can use this script to add the author's name, the page title, and the URL to our clipboard. Then we can perform a search on Twitter for that person, so we can grab their Twitter details while we're at it. All of this in a couple of clicks.

Open Script Editor on your Mac (open Applications, then open Utilities, then Script Editor). You'll see something like this when it's open.

![applescript editor][editor]

Then paste the following snippet in the top section

```
tell application "Safari"
  set theURL to URL of current tab of window 1
  set theTitle to name of current tab of window 1
  display dialog "Name" default answer ""
  set personName to text returned of result
  set searchPhrase to personName & " " & "site:twitter.com"
  set searchQuery to my searchAndReplace(searchPhrase, " ", "+")
  do shell script "open http://www.google.com/search?q=" & searchQuery
  set the clipboard to personName & ", " & theTitle & ", " & theURL & ", "
end tell

on searchAndReplace(myString, oldText, newText)
  set AppleScript's text item delimiters to oldText
  set myList to text items of myString
  set AppleScript's text item delimiters to newText
  set myString to myList as string
  set AppleScript's text item delimiters to ""
  return myString
end searchAndReplace
```

Adding more fields, like an email address or a notes column, is super simple. All you need to do is add a couple of lines below `set personName to text returned of result`.

```
display dialog "Email" default answer ""
set email to text returned of result
```

And then on the last line of the `tell application "Safari"` block, append `& email & ", "` at the end.

```
set the clipboard to personName & ", " & theTitle & ", " & theURL & ", " & email & ", "
```

Save the script. Where you should save it depends on what you like. I generally save my scripts to `/Users/matthewpalmer/Library/Scripts/` so that I can use something like [FastScripts][fs] for easy access to my scripts from the menu bar.

Now we can use our script.

Open a web page you want to add, say [matthewpalmer.net][mp]. Click the Play icon in the menu bar of our script window.

The next thing you'll see is a small dialog box appear. Enter the person's name into the box.

![step one of using apple script to build a press list][s1]

After that, a new tab containing a search for that person on Twitter will appear.

![automatic twitter searches using apple script][s2]

Then switch to your text editor, or wherever you're keeping your press list, and hit Command+V to paste the text.

```
Matthew Palmer, Matthew Palmer — Web and iOS developer and designer., http://matthewpalmer.net/,
```

Then just type in the right Twitter username in the last column, and we're done.

```
Matthew Palmer, Matthew Palmer — Web and iOS developer and designer., http://matthewpalmer.net/, _matthewpalmer
```

And if switching to your text editor with the keyboard is too much, you can add the following code on the line above the first `end tell` statement.

```
tell application "Sublime Text 2" to activate
```

Remember to replace 'Sublime Text 2' with your text editor.

If you have any questions, [contact me on Twitter](http://twitter.com/_matthewpalmer).

[editor]: http://i.imgur.com/jHD6CxP.png
[fs]: http://www.red-sweater.com/fastscripts/
[mp]: http://matthewpalmer.net
[s1]: http://i.imgur.com/e9TwcIY.png
[s2]: http://i.imgur.com/ejjUaaZ.png
