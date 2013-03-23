---
layout: post
title: Test Driven Development in Node.js
category: web

excerpt: I've been playing around with Test Driven Development in Node and I though it might be helpful for beginners.
---

Test Driven Development is pretty great, there's nothing better than seeing your red, failing code switch to green after a lateral idea. However, it can be (I found it so) quite difficult to get into Node.js TDD from a very basic level.

First, read the [Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development) article on Test Driven Development.

Next, make sure you've got Node set up, know how to use npm and aren't a complete beginner to Node.js. Now you're ready to start with TDD. This is going to be an extremely basic introduction.

Let's think about the most basic app we can. Probably `Hello World` right? We're far too advanced for that. Let's make a __calculator__ that can do the most advanced of computations: addition.

__Do we want to start with our test or our implementation?__

I'm guessing you know how to write an addition calculator, so we may as well start with the tests. In the future, it's going to be far easier to start with the tests, because then you'll know when you've got something right.

If you haven't done so already, create a new directory. Then create another one within that called `test`. Inside `test`, create a `test.js` file. That's what we'll be working in mostly. Now go back up to your starting directory (`cd ..` from inside `test`), and create a `add.js` file. This is where our main functionality goes. 

We're going to have to set up a few modules first though. Run `npm install mocha` and `npm install expect.js`. Mocha is the testing framework, and Expect.js allows some pretty neat additions to the standard Assert patterns.

__Now, go back to your `test/test.js` file. We're going to write our first test.__

In the first few lines, we need to include the modules that we need, so add `var assert = require('assert');`, `var expect = require(expect.js);` and `var add = require('../add');`. The latter is our custom `add.js` file, which should be blank at the moment.

With these included, we can now write our first test (for real this time). Here's the code for the test:

<script src="https://gist.github.com/matthewpalmer/5227331.js"></script>

As you can see, it's really simple. Anything in the `''` tags - such as `should expose a function` are just things we make up to make it easy to see what has failed. Explore the [Expect.js](https://github.com/LearnBoost/expect.js/) docs to find out more about `to.be.a` and `to.equal`, but it should be pretty clear what they do. If you run the tests now by going running `$ mocha` in the root directory, you should see `two tests failed` appear. This is excellent - our tests have worked!

You probably want it to say they've passed. Well, now that we've set Mocha up to tell us when everything is okay, we only have to play around with our implementation until it says we've passed.

As you might have guessed, we're going to write an adding function in `add.js`. Go ahead and try that now on your own, it should only take three or four lines. 

Here's my code for `add.js`:

<script src="https://gist.github.com/matthewpalmer/5227329.js"></script>

Now run the tests by typing in `mocha` in the original directory.

__Success! You've made your first test driven app.__

Your next move should be to write a subtraction test, then write the implementation and get it to pass. If you get stuck, I've made a [Github repo](https://github.com/matthewpalmer/node-js-tdd-demo) of an app which does addition, multiplication, subtraction and divison; it also sorts an array of numbers.

If you have any questions feel free to [contact me on Twitter](http://twitter.com/_matthewpalmer).





