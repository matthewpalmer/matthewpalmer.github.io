---
layout: post
title: Responsive Web Design Beyond Screen Size
category: web

excerpt: Often in responsive web design we focus solely on the size of the viewport and little else, mostly because physical dimensions are the easiest to design for. Responsive web design should include all facets of the user's circumstance; by limiting ourselves to reactive resizing our designs satisfy only one element of a user's requirements. The devices we design for are mobile: they are being used in a variety of situations and environments, and we need to start designing appropriately. Rarely are sites optimised for common use cases, and instead are optimised based only on screen resolution.
Realistically, there are hundreds of options and potential situations that we can design for. A few quick examples:

---

<p>Often in responsive web design we focus solely on the size of the viewport and little else, mostly because physical dimensions are the easiest to design for. Responsive web design should include all facets of the user's circumstance; by limiting ourselves to reactive resizing our designs satisfy only one element of a user's requirements. The devices we design for are mobile: they are being used in a variety of situations and environments, and we need to start designing appropriately. Rarely are sites optimised for common use cases, and instead are optimised based only on screen resolution.
Realistically, there are hundreds of options and potential situations that we can design for. A few quick examples:
</p>
<h2>Colour based on external brightness</h2>
<p>Even without access to light-o-meters on mobile devices, we can still hazard a guess at external brightness.</p>
<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/matthewpalmer/FZHJq/15/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
<br/>
<h2>Movement, shaking and rotation</h2>
<p>With better access to accelerometers, we should be able to resize and redesign based on movement. As a simple example, take a person walking down the street. You would need: resized text to be larger and easier to read; minimised visual clutter such as icons; removal of buttons and replacing them with easy to hit links; more stark contrast with simple text. Also refer to the first option.</p>
<h2>Steady movement, parallel to ground or consistent angles</h2>
<p>In this scenario, the user is sitting or standing with little movement and lots of time. We could reintroduce menu elements and animations, as well as smaller images and intricate positioning. Ads could even be added in this situation - perhaps the user has time to look through advertisements.</p>
<h2>Device oriented sideways</h2>
<p>We probably wouldn't even need accelerometers for this - I think there's media query for horizontally oriented devices. Aside from the basics of resizing and repositioning for the greater amount of horizontal pixels, we could align all elements to the left of the device if there's movement or shaking to allow for one handed sideways use, and scrolling on one side of the device. Naturally, wide-style ads could be included.</p>
<h2>Low network strength</h2>
<p>This is starting to really tread the lines between app and web, but with limited access to network strength, even a simple percentage, we would be able to load or not load multimedia selectively, replacing jquery and javascript with no animation and lower quality images. Removal of external web fonts could also vary depending on network strength, as well as intricacy of menus and logos.</p>
<br/>
<p>However, as we further attempt to optimise for mobile devices, we require access to hardware services and technology which can lead to insecurities, as well as blurring the line between the role of the web developer and the app developer. Follow me on twitter for further updates on alternative responsive web design.</p>