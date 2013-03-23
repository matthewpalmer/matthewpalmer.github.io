---
layout: post
title: Test Driven Development in Node.js
category: web

excerpt: I've been playing around with Test Driven Development in Node and I though it might be helpful for beginners.
---

Test Driven Development is pretty great, there's nothing better than seeing your red, failing code switch to green after a lateral idea. However, it can be (I found it) quite difficult to get into Node.js TDD from a very basic level.

First, read the [Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development) article on Test Driven Development.

Next, make sure you've got Node set up, know how to use npm and aren't a complete beginner to Node.js. Now you're ready to start with TDD. This is going to be an extremely basic introduction.

Let's think about the most basic app we can. Probably _Hello World_ right? We're far too advanced for that. Let's make a __calculator__ that can do the most advanced of computations: addition.

__Do we want to start with our test or our implementation?__

I'm guessing you know how to write an addition calculator, so we may as well start with the tests. In the future, it's going to be far easier to start with the tests, because then you'll know when you've got something right.

If you haven't done so already, create a new directory. Then create another one within that called _test_. Inside _test_, create a _test.js_ file. That's what we'll be working in mostly. Now go back up to your starting directory (_cd .._ from inside _test_), and create an _add.js_ file. This is where our main functionality goes. 

We're going to have to set up a few modules first though. Run _npm install mocha_ and _npm install expect.js_. Mocha is the testing framework, and Expect.js allows some pretty neat additions to the standard Assert patterns.

__Now, go back to your _test/test.js_ file. We're going to write our first test.__

In the first few lines, we need to include the modules that we need, so add _var assert = require('assert');_, _var expect = require(expect.js);_ and _var add = require('../add');_. The latter is our custom _add.js_ file, which should be blank at the moment.

With these included, we can now write our first test (for real this time). Here's the code for the test:

<script src="https://gist.github.com/matthewpalmer/5227331.js"></script>

As you can see, it's really simple. Anything in the _''_ tags - such as _should expose a function_ are just things we make up to make it easy to see what has failed. Explore the [Expect.js](https://github.com/LearnBoost/expect.js/) docs to find out more about _to.be.a_ and _to.equal_, but it should be pretty clear what they do. If you run the tests now by going running _$ mocha_ in the root directory, you should see _two tests failed_ appear. This is excellent - our tests have worked!

You probably want it to say they've passed. Well, now that we've set Mocha up to tell us when everything is okay, we only have to play around with our implementation until it says we've passed.

As you might have guessed, we're going to write an adding function in _add.js_. Go ahead and try that now on your own, it should only take three or four lines. 

Here's my code for _add.js_:

<script src="https://gist.github.com/matthewpalmer/5227329.js"></script>

Now run the tests by typing in _mocha_ in the original directory.

__Success! You've made your first test driven app.__

Your next move should be to write a subtraction test, then write the implementation and get it to pass. If you get stuck, I've made a [Github repo](https://github.com/matthewpalmer/node-js-tdd-demo) of an app which does addition, multiplication, subtraction and divison; it also sorts an array of numbers.

If you have any questions feel free to [contact me on Twitter](http://twitter.com/_matthewpalmer).





