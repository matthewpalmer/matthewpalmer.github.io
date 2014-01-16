---
layout: post
title: "Making Sublime Text 2 Feel More at Home on the Mac"
Category: software
---

I recently went through a text editor identity crisis, where I decided to install almost every Mac text editor I could find. I wanted to replace the my usual editor—Sublime Text 2—with something more native. 

Among others, I went through the big three: BBEdit (too cluttered), Chocolat (too slow), TextMate (unstable and a little slow). I also wanted an editor for writing, so I tried out Byword, iA Writer, Ommwriter, Mou and plain old TextEdit.

Parts of each editor showed flashes of brilliance. With BBEdit, I could open a 10MB text file without a stutter, whereas all of the others precariously hobbled around. But BBEdit has way too much UI, while most of the others are relatively well designed.

My lasting predicament with Sublime was its irregular default UI; that is, it doesn't look at home at all on the Mac.

But Sublime's flexibility saved it from being replaced. After a few tweaks, here is my default code-editing set up.

![Customised Javascript setup for Sublime Text 2](https://i.cloudup.com/k3RJ2jZ1Fs-2000x2000.png)

It blends in well with the general Mac aesthetic. My biggest problem is with the tab bar, which I would prefer to look like the Safari or Xcode's tabs. The colour scheme is another area I'm not happy with, because orange is far too salient for code comments, and other language-specific keywords need to be more identifiable.

We have: 

- [Soda Theme, which does a lot of our heavy lifting](https://github.com/buymeasoda/soda-theme/)
- [Espresso Soda Colour Scheme](https://github.com/buymeasoda/soda-theme/)
- [Source Code Pro Font, 14 pt](http://www.google.com/fonts/specimen/Source+Code+Pro)

I like how this set up looks with Sass files.

![Customised Sass setup for Sublime Text 2](https://i.cloudup.com/rhyMkuiLHR-1200x1200.png) 

It has non-default folder icons, which can be easily enabled by adding `"soda_folder_icons": true` to your `Settings — User` file.

And best of all, I was able to consolidate my markdown editing into something more powerful than Byword, but which is still quite attractive.

![Customised Markdown setup for Sublime Text 2](https://i.cloudup.com/FyCmA2DVF3-2000x2000.png)

My Markdown set up uses the [Markdown Extended](1) plugin, with tabs, status bar and sidebar hidden.

Thanks to Sublime's visual customisablity, my next editor identity crisis should be a long way off.

