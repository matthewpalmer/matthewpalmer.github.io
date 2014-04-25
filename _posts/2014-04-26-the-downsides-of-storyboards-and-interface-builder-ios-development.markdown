---
layout: post
title: "The Downsides of Storyboards and Interface Builder"
category: ios
---

In his [latest blog post][1], Brent Simmons talks about his difficulties with storyboards. In particular, he said

> I can’t help but note that if I’d started out in code, I’d be done already...

Exactly. I have several major problems with using storyboards, interface builder or other non-programmatic methods of creating user interfaces.

1. **All of the features you need are in code.** Have you ever heard of a situation where code wouldn't solve the problem? Maybe it's not a simple drag-and-drop solution, but there's always a way to make it work.
2. **You're splitting code that works on the same stuff across multiple locations.** You're going to have to use code eventually. At first, it might just be for a simple tweak, like adding a border shadow, but soon you'll want to do complex and interesting things to your views. When you do, you'll be changing your interface simultaneously in two different spots. Which do you check for bugs first? Which one is considered the 'master' record?
3. **Interface Builder is likely to change.** There's no guarantee that the button or text field you use in this version won't be moved, altered, or removed entirely in the next version of Xcode. The features you need to develop your app are subject to the vagaries of user interface design. Say an Apple designer decides that the button you need is just one-too-many in the Xcode sidebar. What then? The iOS SDK is not nearly as subservient to the practical limitations of screen size and aesthetics as the user interface.
4. **Apple decides what you can and can't do.** This is a blessing and a curse. It ensures proportionality, consistency, and general cohesion between the app and the operating system. Conversely, the graphical interface of Xcode limits the flexibility of what you can do. The barrier for experimentation is much lower when you use code.

Interface Builder is conceptually great—I love having a visual representation of the UI work I'm doing—and some of the features are brilliant, but I don't think it's the best solution for an app in the long run.

[1]: http://inessential.com/2014/04/25/uiconundrum