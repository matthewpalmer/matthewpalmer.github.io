---
title: "Automated Software App Support with Zapier"
layout: post
category: web
---

I’ve got a bucket labelled ”Figure out a use-case for this” that’s overflowing with great SaaS services. Zapier, Airtable, IFTTT, Typeform. They are powerful tools without immediately obvious use-cases. Combine these services and you can solve any business or internet problem.

You just need to be able to spot the problem.

## Context

My customer support load has been increasing over the last 18 months. I’ve kept up with it by—and this will shock you—spending more time on customer support.

About four months ago I spotted this problem. ”Hmm… I spend a lot of time doing customer support. I love it. It’s repetitive though.” It was a huge time sink for me. Worse, my customer would have to wait a day for me to reply with a solution that took five minutes. Terrible UX.

I’m also like *super* not printing money at my business, so there’s no way I could afford to pay someone to handle my support. I couldn’t afford to throw money at this problem, so I had to get smart: automate it.

Step one: figure out what my actual support requests are. I looked at my last hundred emails for each of my products and grouped them by category. 

The results?

1. **50%** – ”My license ran out. Can I please get another one?”
2. **15%** – ”I have [insert arbitrary common bug]. How do I fix it?”
3. **15%** – “I lost access to a file or folder. Can you please help?”
4. **20%** – Other, more interesting support cases. Stuff like interesting bugs, feature suggestions, and different use cases. I love hearing these and responding when I can.

(I also re-read all these emails. I like using phrases my customers use when I present my business’s public face. Your support documents will be easier to find because they’ll use the phrases people Google. Your copy and pitches will be compelling because they’ll use ideas proven to stick in minds.)

## Automated Email Support with Zapier

Spoiler: I automated the top three with Zapier.

### The easy ones

Number two and number three accounted for about 30% of the load. They’re handled the same way: look for an email with suitable keywords and send an automated response.

![Zapier rule to filter on Gmail email body](/img/automated-support/filter-rule-zapier.png)

1. Use the Gmail ”New Email” trigger in Zapier
2. Add an ”Only continue if…” filter with an email body search for relevant keywords
3. (Really *2a*.) A better approach is to set up a “New Email” trigger that looks for emails in a specific Gmail folder. Then use *Gmail’s* automated filtering rules to move that email into the right folder. Why? If you receive emails that whiff on the keyboard match, manually move them into the folder and still send an automated response.
4. Send an email to help solve the problem, with a link to any relevant pages. BCC my personal email so I can keep track of what’s going on.

<br />

```
<p>
  Hi there!
</p>

<p>
  Thanks for using Rocket!
</p>

<p>
  My robots think you sent in a bit of feedback that might be about getting a refund. 
  No worries! This is a quick email to let you know about Rocket’s 
  <a href="http://matthewpalmer.net/rocket/help.html">help page</a>, which has a link 
  to request a refund quick smart. My robots aren’t sentient (yet), so if this 
  doesn’t fix your problem, just reply to this email and I’ll take a look 😄.
</p>

<p>
  Matt
</p>
```

<br />

### The hard one

This one was harder to automate.

Licenses for my apps start with a limit of two activations so that people don’t share them around. (Dumb mistake—I’ve recently made it higher for new licenses.) When a user hits that limit, they get an error. 

A customer would then email me. I’d have to go into DevMate, find their customer record, add a new license, and copy-paste it over to them in a hand-written written email response. I didn’t mind doing this—but (paying!) customers were waiting up to a day or two for me to do a two minute job. Awful.

With Zapier, Google Forms, and DevMate’s REST API, I’ve automated this so that customers get faster responses and I don’t have to do anything.

![Automated support with Zapier and Google Forms](/img/automated-support/robot-overlords.png)

<br />

Here’s the workflow now…

1. Customer emails me with an email that has phrases related to a license activation issue
2. Zapier sends a friendly automated reponse linking to the right page. (See the previous section)
3. The help page takes them to a Google Form
4. When they complete the form, use Google Forms’ option to add an entry to a Google Sheet
5. Back in Zapier, run a ”New Spreadsheet Row” trigger for this sheet.
6. Use the ”Custom Request” webhook to hit the DevMate REST API. This creates a new license activation code and passes it back to Zapier. (This one requires a bit of programming knowledge to set up, get in touch if you need help 👍.)
7. Send an email back to the customer with their new activation code.

![Google Form example for collecting emails](/img/automated-support/google-form.png)

<br />

The dream! A customer has an issue, emails me, my robots point them in the right direction, they fill out a form, I send them a new license. 

Turnaround time? Less than fifteen minutes. I don’t have to intervene unless something goes wrong. Took two hours to automate a process that would take me an hour each week.

### Big Lessons

Solo and small businesses can increase the limits of their production with automation tools like Zapier. These tools are easy to set up, cheap to maintain, and more reliable than what you’d custom-build. You can avoid assembling a team, which will keeping your costs low and your projects faster.

<br />

Need help or advice automating your business? Want more detail on how to set up Zapier? Email me at hello@matthewpalmer.net or get in touch [on Twitter][twitter]. I’d love to help.

[twitter]: https://twitter.com/_matthewpalmer
