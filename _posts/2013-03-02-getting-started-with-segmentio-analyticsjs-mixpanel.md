---
layout: post
title: Getting Started With Segment.io, Analytics.js and Mixpanel
category: web

excerpt: I was watching Jack Dorsey (creator of Twitter) do an interview the other day, and he said that the number one tip he'd give to aspiring developers was to develop and implement meaningful and custom analytics. I decided to look into that...
---

I was watching Jack Dorsey (creator of Twitter) do an interview the other day, and he said that the number one tip he'd give to aspiring developers was to develop and implement meaningful and custom analytics. I decided to look into that.

For this, we'll let [Segment.io](http://segment.io) (with Analytics.js) and [Mixpanel](http://mixpanel.com) do most of the heavy lifting, leaving us to just implement the things that are custom. Everything pretty much works perfectly - the guys at Segment.io have done a great job - but it can be a little confusing to put the pieces together initially.

We'll start with this:
<script src="https://gist.github.com/matthewpalmer/5068097.js"></script>

[Segment.io](https://segment.io/) has Analytics.js kind of built in, though you can use Analytics.js without segment.io. Anyway, sign up for segment.io and create a new project. Do the stuff they tell you in the setup guide, but don't worry too much if you don't fully understand the adding events page. We'll sort that out later.

Create a [free Mixpanel](http://mixpanel.com) account, then link your Segment.io account to it by going to Integrations on the Segment.io dashboard, clicking Mixpanel and pasting in your token (from Mixpanel).

When you're done, you should have something like this:
<script src="https://gist.github.com/matthewpalmer/5068083.js"></script>

## Tracking Page Views
While Segment.io and Mixpanel each have their pageviews, we'd like to have one that works across both. Add the following in the head tag, but below the other scripts we've added.
<script src="https://gist.github.com/matthewpalmer/5068189.js"></script>
Now if you refresh, you should have a new event in both Segment.io and Mixpanel. Perfect. Every time you call `analytics.track` a new event is create automatically in Mixpanel. This automation is the real value of Segment.io/Analytics.js; you can do this with all the other analytics services too!

Now if you refresh and then click 'Check' in the set up stage of Mixpanel it should say the event was received. Good job - you're now tracking page views in Mixpanel.

## Tracking Custom Events
To track custom events, you need to use the Analytics.js (which comes with Segment.io) API. It's super easy. Basically, you just call a function whenever you want an event to be tracked. 
<script src="https://gist.github.com/matthewpalmer/5068295.js"></script>
So every time the link is clicked, `analytics.track` runs and will send the data to the events in Segment.io and Mixpanel. Awesome. You can include more data with the track call, but that's for another day. 

Mixpanel also provides some insanely useful features like Funnels and Streams, but I'd recommend watching the videos on their site to get comfortable.

It's likely that I've made some code errors here, so if you're having trouble feel free to contact me on [Twitter](http://twitter.com/_matthewpalmer). As always, for a better and more powerful understanding check out the Segment.io and Mixpanel docs.

If you're wondering, here's the full code.
<script src="https://gist.github.com/matthewpalmer/5068348.js"></script>

