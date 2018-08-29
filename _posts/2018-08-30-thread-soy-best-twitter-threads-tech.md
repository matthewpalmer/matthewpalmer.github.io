---
title: "thread.soy - the best tech Twitter threads"
layout: post
category: web
---

Today I did a quiet release of [thread.soy](https://thread.soy). It’s a website 
devoted to curating the best threads on Twitter. Users can contribute 
threads they like, vote on threads, and browse all-time popularity
lists. It took about a week to build.

In the first 12 hours, [@threadsoy](https://twitter.com/threadsoy)
is up to 47 followers, and the website’s had 906 users with 1,906
page views. I’m curious to see how that grows over the next few
weeks.

## What turned out well?

I was originally going to give thread.soy a brutalist design style—
with a bit more of a sense of humour. But as I got into the project,
I discovered that I didn’t feel good about displaying other people’s
content alongside too much (potentially inappropriate) design 
personality.

This restriction meant I had to discover a new, more considerate
design and colour palette. I think I’m happier with this than the 
original brutalist attitude.

My favourite thing is the buttons.

![popular](/img/threadsoy/popular.gif) ![upvote](/img/threadsoy/upvote.gif)

I also like how some of the pages turned out.

![topic](/img/threadsoy/topic.png)

I still need to improve on the typography of the actual thread text—it’s
super important but currently feels very ”first draft.”


## How do you build a web app in a week?

1.  Cut scope. Ruthlessly.
2.  Know your tools. 
    
    This is a simple Node.js Express web application with a Postgres database. It uses Handlebars templates, Sass for CSS, and plain no-framework front-end JS. I’ve used them dozens of times,
    so I could turn this project around pretty quickly.
3.  Be wise in your code-reuse battles. 
    
    Shock and horror: I copy and pasted a shit tonne of code for this project. The question to ask is ”Will these
    two things always change together?” If yes, and it’s costly
    for them to be separate, refactor that code to be shared.
    If it’s not costly for them to be separate—or the additional
    abstraction adds no value—you’re setting yourself up for pain
    by overly refactoring. Your codebase is going to go through
    fundamental change in the early phase of a project—there’s
    no point adding indirection or layer of abstraction before
    the problem domain is fully conceptualized.


## What did I learn?

1. Don’t include ProductHunt or Twitter marketing plan.

   Seriously, just take those words out of your vocabulary. 
   
   I re-learn
   this lesson every time I make something. Those sites don’t provide *that* much lasting
   traffic, and they kill your motivation if they don’t go well.
   I’ve had past projects get that virality, and plenty of projects
   that haven’t. Your growth strategy can’t rely on initial
   popularity.
2. I probably should have used an ORM.

   Minor technical note: out of 
   curiousity, I just ended up doing raw SQL queries instead of using 
   an ORM like Sequelize. Turns out, Sequelize is pretty nice.

