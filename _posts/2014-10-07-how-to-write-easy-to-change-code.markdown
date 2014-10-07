---
layout: post
title: Writing Easy to Change Code
category: development
---

A couple of notes on Session 112 of WWDC 2011—Writing Easy to Change Code.

Writing easy to change code is your second most important goal when making software; the first is shipping the product.

Software is always going to be changed. Make it easy to do so.

- bug fixes
- features
- code written by others, yourself

Thinking ahead of time makes changing it later much easier.

## Style
**Clarity** is the goal. Clear code is easier to change. Local consistency is important, but this is only the basic level of style.

How to code clearly?
- use good names
  + descriptive
  + `BeepOnFailure` and `DoNotBeepOnFailure` is better than `YES` and `NO`
  + look for repeated names and patterns in frameworks
- use common idioms
  + avoid lines of code that do too much
  + don't try to 'count square brackets'
  + **read and understand both lines and blocks quickly**
  + patterns
    * singleton
    * observer
    * prototype
    * chain of responsibility
    * command
  + idioms communicate at a high level—the name communicates a collection of concepts

**Clarity.**

## Stories
- bugs caused by two things: "did not anticipate" or "did not understand"
- *think* before you dive into debugging
- **debugging is understanding**
- write down or tell someone the bug before you implement the fix (or add it as a test case if suitable)

**Tell a story with bug fixes; communicate increased understanding.**

## Laziness
- lazy initialization is good, but needs to be thought through
- watch out for init loops where one object relies on another one and vice versa—slows down loading, order of initialization varies
- use dispatch_once for singleton object initialization

Could solve with
- lightweight initialization at startup
- decompose singleton objects
- alternative accessors: sharedInstance, activeInstance, sharedInstance:createIfNeeded

**Be thoughtful about lazy initialization.**

## Hygiene
- takes effort
- don't throw away code, but do delete cruft
- don't rewrite, refactor: keep functionality but change form
- cruft is
  + dead code—never called, no longer runs
  + irrelevant or outdated comments
- size of change is important
  + small: clean up as you go (e.g. names)
  + medium: talk to others
  + large: requires planning, formalize
- avoid regressions—refactoring is keeping the same functionality
  + tests

**Delete cruft, not code. Refactor, not rewrite.**

## Notifications
**Bad**
- notifications are like goto
- make it hard to easily tell what the notification will do, what code will run as a consequence
- non-deterministic: multiple callbacks might run in different orders
- notifications complicate change—more difficult to understand what software will do

**Good**
- loose coupling
- think of notifications in terms of will & did—tell listeners when you are about to change a variable, and tell them after you've changed the variable
- you should know about the endpoints

**Consider protocols or delegates instead of notifications: use notifications rarely.**

## Optimization
Optimize the things that are slow, the things you understand best, the things that have the clearest role. Try to optimize the *slowest* and *oldest* 3% of your code.

- memory allocation
- view creation
- drawing
- algorithms and data structures
- I/O
- blocking on information
- unnecessary work
- new work just added

**Only optimize after you've measured and understood, and never make the program slower.**

## Dependencies
- worry about implications of change
- inheritance trees
  + shallow is better
  + avoid layers of overridden methods
  + use delegation to avoid excessive subclassing—customize by calling another object. Keep conceptual overhead small
- call graphs
  + smaller is better
  + limit includes (leads to faster compile times)
  + unidirectional calling—think about the relationship between two classes in terms of master and slave; this allows you to change master without changing slave

**Keep dependencies small and shallow.**

## Mixing
- don't mix different things
  + e.g. computation and I/O. Don't do work on received data at the point you receive it, do it elsewhere
  + don't mix algorithms and data sources

**Don't mix different things.**

## Expectations
- make your interface **hard to use wrong**
  + method arguments
  + assertions, early returns

**Make it hard to use wrong.**

## Summary
1. Clarity
2. Bug fixes tell a story
3. Be thoughtful in lazy initialization
4. Refactor, don't rewrite
5. Use notifications appropriately
6. Keep new code easy to change
7. Optimize slowest and oldest code
8. Reduce dependencies
9. Don't mix different things
10. Make it hard to use wrong