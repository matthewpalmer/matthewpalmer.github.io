---
layout: post
title: Parallax Scrolling in Two Lines of Javascript
category: web

excerpt: Parallax scrolling is an odd feature of modern web design; it rarely translates well onto mobile screens nor is it particularly efficient on resources. I remember visiting a site with parallax scrolling that took at least fifteen seconds to load...
---

<p>Parallax scrolling is an odd feature of modern web design; it rarely translates well onto mobile screens nor is it particularly efficient on resources. I remember visiting a site with parallax scrolling that took at least fifteen seconds to load. Sure, the site was impressive, but it was impractical. Other than the initial "Oh this is pretty cool," I can't think of any instance where parallax designs have improved my web experience. Parallax scrolling should be a tool in minimalist web design to create a greater sense of vibrancy - it should not be exploited by overzealous designers who want to wow their audience. Web design needs to move away from creating 'cool' things to creating sites that combine beauty and functionality, much like product design. Just because you don't necessarily have to consider physical constraints doesn't mean there aren't any.</p>
<h2>Anyway, here's the code:</h2>
<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/matthewpalmer/2uEYx/10/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
<br/>
<h2>The critical lines</h2>
<p><pre>biggerdiv.style.backgroundPosition = '0' +'px ' +(windowScroll/2)+"px";</pre>
</p> and <p> <pre>smallerdiv.style.top = 0-(windowScroll/2) + 'px'; </pre></p>
<br/>
<p>biggerdiv is the variable which contains the element that has a background image attached to it. smallerdiv is the variable of another element that you want to be included in the parallax effect.
(windowScroll/2)+"px" sets the speed of scrolling, windowScroll is just a variable for window.pageYOffset.</p>

