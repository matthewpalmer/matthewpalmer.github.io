---
layout: post
title: The Downsides of Front End Frameworks
category: web

excerpt: For my latest web app, I wanted to look into a few web frameworks.
---

It seems that a front end framework is almost mandatory for any modern web app, but these frameworks are often unnecessary. In my latest [project](http://dotfileshare.heroku.com), I was looking into using Angular.js. Visit the Angular site, and you'd think it would solve all of your problems. (Note: my project is very simple, larger and more complex apps obviously have other priorities.)

I started playing around with Angular; I already had my RESTful API finished in Node.js, and I just wanted to make a simple front end for it. Turns out, a simple front end for an API has two (relatively) large files that need to be included for it to work with Angular. Moreover, Angular introduced unnecessary complexity and syntax that I didn't want or need. While I've done Django and iOS MVC stuff before, Angular feels like another language to learn - it's not just 'normal' javascript.

The far better solution was simply jQuery and Mustache.js. I could have done without Mustache, and jQuery was already being included anyway. jQuery's `$.ajax` function is incredibly powerful, especially for interactions with a pre-existing API. jQuery fit around my uses; Angular felt like it was trying to force its structure on me. With the `$.ajax` function, I was able to implement __all__ the access points for my API in under forty lines of code. Had I combined this with a proper templating language like Jade, it would have been less.

The plan going forward is to make a loose wrapper for the `$.ajax` function and combine it with a templating language. That will become my own front end framework, and hopefully I'll be able to make it have a simple single-page implementation. It would have been nice to have a single page app, but sometimes it's just more trouble than it's worth.


