---
layout: post
title: Building Better Analytics
category: web

excerpt: I've discovered my love for analytics.
---

So you might have seen my [last post]() about setting up Segment.io, Mixpanel and Analytics.js. I wrote that about half an hour after I got my setup working, but now I've had some proper time to explore and get some useful info.

If I were you, I'd implement as many cool data points you want to collect now. One day your site will get some traffic, and you'll regret it. Do it now.

Lucky for me, my first post about Segment.io was tweeted out by the Segment.io team (after they helped me clean up the code - awesome customer support!), which meant I got a few more hits than usual. It was around twenty or thirty, which is really awesome for me. Unfortunately, I had no way of tracking what they were doing once they got to my site. I quickly set up some Funnels.

__I now know that 57.86% of people who visit my homepage will view a blog post.__

 A new spate of Twitter followers were unaccounted for. I added tracking of the links to social networking; I wanted to see which placements were more productive, and to prevent overloading unhelpful areas. Because of my analytics, I can see which parts are being hit and which aren't, and I can remove anything that isn't beneficial. It results in a better site and a better user experience.

Additionally, I had no tracking of which blog posts were being viewed, only that the _template_ for the blog post was being loaded. So I extended my post-page-view script to include the title of the post. I now have even more useful custom data in mixpanel.

<script src="https://gist.github.com/matthewpalmer/5219877.js"></script>

Currently, I'm looking into tracking how far down a user scrolls before they close the page. My site is quite long; it will be interesting to see at which point viewers lose interest. I will be able to prioritise and structure the most important information accordingly. I've been wanting to add a section before the 'Latest Posts' section filled with a list of the things I've made. Depending on how the tracking of scroll distance goes, it might just replace the current 'Latest Work' section. I'll be sure to update my blog if I work something out.

Irrespective of any iteration, implementing custom analytics yielded impressive amounts of data that are both helpful and relevant for me personally. Custom analytics are far more beneficial than any site redesign or blog post I have done.

Huge thanks to [Mixpanel](http://mixpanel.com) and [Segment.io](http://segment.io), they make custom analytics easy and free.

Follow me on [Twitter](http://twitter.com/_matthewpalmer).