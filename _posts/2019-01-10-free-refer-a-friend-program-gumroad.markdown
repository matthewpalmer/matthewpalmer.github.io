---
layout: post
title: Set Up a Free Refer-a-Friend Program on Gumroad
category: web
---

Uber, Dropbox, and a zillion other companies run promotions
like “Tell a friend about us and get a $5 credit when they sign up.”

Those programs work really well to increase sales. Those companies are smart. Turns out.

But referral programs are *very* difficult to create and maintain yourself, especially if you’re
not a software developer.

Luckily, if you sell things through Gumroad (or a bunch of other services), 
[Peach’s free refer-a-friend software](https://peachs.co) lets you set one up.
It takes like ten minutes. It’s free. It increases sales.

I wrote a [book about Kubernetes](/kubernetes-app-developer/) that I sell through Gumroad, and I
wanted to set up a refer-a-friend program. Here’s how I did it.

## 1. Add a custom field in Gumroad

You need to add a custom field called ‘Referral Code’ to your Gumroad checkout form.

Open up your product in Gumroad, navigate to the checkout configuration, 
flip the little toggle that says ‘Preview’, and under ‘More information’
add the field for ‘Referral Code’

![Embed Peach's form](/img/peachs/configure-gumroad.png)

## 2. Create a free Peach’s account

Go to [peachs.co](https://peachs.co) and create a free account.

![Create Peach's account](/img/peachs/create-account.png)

## 3. Set up a new gambit

Once you’ve logged in, click ‘New Gambit’ to get started creating your refer-a-friend program.

Fill out the fields in the form, putting in your product’s details.

![Create Peach's account](/img/peachs/product-details.png)

On the next step, enter the URL of the page where you sell your product and how many
friends need to be referred for your customer to get rewarded.

![Create redirect](/img/peachs/product-sale.png)

On the last step, authorize Peach’s to use your Gumroad account. It uses this
to create coupon codes and track who has been referred.

## 4. Embed your refer-a-friend form

You’re ready to start integrating your refer-a-friend program with your website.

Somewhere on your site ([for example](/kubernetes-app-developer/refer-a-friend.html))
paste in the form embed code from the Peach’s console. This code loads 
the form that people will use to sign up for your refer-a-friend system.

![Embed Peach's form](/img/peachs/embed-form.png)

Once you’re done, reload the page where you added the code. Your page 
will get a fancy new form where people can sign up for a refer-a-friend program.

![Peach's form result](/img/peachs/form-result.png)

## 5. Configure your product and discount

In the Peach’s console, choose which product you want to set up the 
refer-a-friend program for, select the custom field you created in
step 1, and enter your discount. Then click ‘Save’.

![Peach's form result](/img/peachs/configure-product.png)

## 6. Set up your checkout button

The last step is to integrate Peach’s with your Gumroad checkout button.

There are two steps.

One, add the `data-gumroad-gambit` attribute to your existing Gumroad checkout button.

Two, copy and paste the code from the Peach’s console to your site, right below your Gumroad
checkout button.

![Embed Peach's form](/img/peachs/embed-button.png)

After that’s done, fill out your form from step 4 where people sign up to your 
refer-a-friend program. Grab the link that’s generated, and visit it. Then
start the Gumroad checkout process. You’ll see a neat little pop up
that you’ve been referred by a friend.

![Peach's button result](/img/peachs/button-result.png)

## 7. Check your discount works

Back in the Peach’s settings screen, click the button that says ‘Send Test Email’.
This will send you an email with a link to purchase your product with the
discount applied. Click that link and check everything looks good!

![Peach's button result](/img/peachs/email.png)

## Congrats!

You’ve finished setting up your refer-a-friend program. Remember to link
to your refer-a-friend sign up form (step 4) from your product’s marketing
so that your customers know they can earn a discount.

Feel free to email me if you have any trouble or any questions.

