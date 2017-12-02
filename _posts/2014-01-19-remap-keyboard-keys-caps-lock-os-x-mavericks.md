---
layout: post
title: Remapping Keyboard Keys on Mac OS X Mavericks
category: mac
rank: top
excerpt: How to remap any of your keyboard keys to any combination of keys on Mac OS X Mavericks. I got hooked after remapping Caps Lock to Command+R.
---

*This is an __updated__ version of [my original guide](http://matthewpalmer.net/blog/2013/01/23/remap-keys-os-x-mountain-lion/) on how to remap keyboard keys on OS X.*

Here's how to remap any of your keyboard keys to any combination of keys on Mac OS X. Initially, I wanted to remap the `Caps Lock` key to `Command+R` for two reasons:

- I'm always hitting `Command+R` for building and running iOS apps and to refresh web pages
- `Caps Lock` is otherwise entirely useless

Here are the steps and workarounds I used to get what I wanted. I've essentially remapped the `Insert`, `Home`, `Page Up`, `Delete`, `End` and `Page Down`, and `Caps Lock` keys into a useful macro block.

1. Download the latest version of [KeyRemap4MacBook](http://pqrs.org/macosx/keyremap4macbook/); it's pretty much the only decent key remapper for Mac. Despite its horrible name, it is insanely flexible and powerful.
2. Install KeyRemap4Macbook as per the instructions on their website.
3. Download [PCKeyboardHack](http://pqrs.org/macosx/keyremap4macbook/pckeyboardhack.html.en) if you want to remap the `Caps Lock` key.
4. Open PCKeyboardHack (from the Launchpad), and under the _Caps Lock_ section select _Change Caps Lock_. 
5. Change the `keycode` in the right hand column to '110'.
6. Open KeyRemap4MacBook from `~/Applications`.
7. Scroll down to 'For PC Users', expand it, expand 'Change PC Application Key'.
8. Select whatever key you want the Caps Lock key to remap to (I set it to 'Application Key to Command_L').

Not exactly perfect, right? There's a very limited selection of keys you can remap to. Don't worry, with a little .xml hacking we can get it to do what we want (in a way). For those of you who are happy to just use it like this, don't worry about the next bit. For this section, we are going to introduce user-defined key remapping.

9. In KeyRemap4MacBook click 'Misc & Uninstall' in the top tab bar.
10. Click 'Open private.xml' to open it in Finder.
11. Open the `private.xml` file in TextEdit.
12. Open this [private.xml](http://pqrs.org/macosx/keyremap4macbook/files/private.xml) file in your browser. Copy and paste the code from this remote file to replace the contents of the local `private.xml` file. 
13. The basic syntax for adding a new remapping is this:
<script src="https://gist.github.com/4601667.js"></script>	

14. Replace `STARTKEY` with some key from [this list](https://github.com/tekezo/KeyRemap4MacBook/blob/version_7.8.0/src/bridge/generator/keycode/data/KeyCode.data). Make sure you use the __uppercase__ name in the left column to replace `KEYTOSTART`. (`KeyCode::` must be left as it is.)
15. As an example, here is what I used to remap `Caps Lock` (i.e. `PC_APPLICATION`) to `Command+R`:
<script src="https://gist.github.com/4601678.js"></script>

16. Save the `private.xml` file.
17. Go back to KeyRemap4MacBook and hit 'ReloadXML' and your newly defined remaps should appear at the top of the list.
18. Select the one you want. 
19. Try it out.
20. Look through [this page](http://pqrs.org/macosx/keyremap4macbook/xml-basic.html.en) for more comprehensive documentation of what you can achieve.
21. Keep defining new remaps until you've got exactly what you want.

So, eventually, we worked out a way to remap any key we want to another key or combination of keys. It works really well, and it's probably good for RSI or something. At the very least, we've satisfied our laziness.

For anyone interested, here is my full `private.xml` file:
<script src="https://gist.github.com/4601687.js"></script>

For more information on the full power of the `private.xml` file, check out [the reference manual](https://pqrs.org/osx/karabiner/xml.html.en) (thanks to [@jnlevitan](https://twitter.com/jnlevitan) for the tip).

I'd love to hear your favourite key remappings, feel free to [share them with me on Twitter](http://twitter.com/_matthewpalmer).

