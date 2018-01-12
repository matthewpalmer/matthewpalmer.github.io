---
title: "Visual Cryptography is the Coolest Thing Ever"
layout: post
category: dev
---

I just learnt about the coolest thing. Let me share it with you.

Let’s say you and some friends are taking a walk through the Australian outback. Which, as we all know, is full of treasure and deadly animals in equal measure. You’ve got an image file that’s a map to some treasure, and you want to split it amongst the ten of you.

While you’re hiking around, you want everyone to come together and overlay their shares to locate the treasure and navigate. But, since we don’t want anyone running off, no individual person can know what any part of the map looks like on their own.

Now this is where the deadly animals come in. To protect us against likely death by dropbear of a few of our group, we want the added feature that *only six out of ten* of us need to combine map shares to get the full map back. And, if *five* out of ten combine shares, they should gain no information.

So we’ve got this impossible set of requirements:

* Split an image up into *n* shares
* Each share should reveal *nothing* about the original image
* *k* out of those *n* shares, if you lay them on top of eachother, should recreate the original image

Hmm…

## Visual Cryptography

Visual cryptography can do this, and it’s absolute magic. 

Let’s simplify our example to just 2 friends, and when they combine their shares it should reveal the original. We’ll work with a black and white secret image.

![Animated demo of visual cryptography][visual-crypto-gif]

**Encryption**

1. Take a pixel from the secret map image
2. Subdivide that pixel into four subpixels for each friend (so eight subpixels total)
3. Colour in those subpixels so that, when the friends overlay their images…
   - If the original pixel was black, the overlayed subpixels will have four pixels coloured in
   - If the original pixel was white, the overlayed subpixels will have two pixels coloured in
   - Do this with a degree of randomness so that the shares are secure. 
4. Combine each friend’s subpixels into an image, and distribute each image to that person

This is a very visual problem, so spend a bit of time looking through the diagram below.

![Visual cryptography tutorial image][visual-crypto-tutorial]

Some key things to note:

* If the original pixel was black, the overlaid subpixel shares will be all black. If the original was white, the overlaid will be 50% coloured in.
* The coin toss is what makes this sharing scheme secure, because an attacker can't guess with more than 50% likelihood which set of patterns were used to colour in the shares
* The specific patterns (BWBW, WBWB) we used to colour don’t really matter, what matters is how many cells in the overlaid pixels are coloured

If you want to see some code, the most interesting snippet from the [full JavaScript Gist][full-gist] is this:

```
// This is the important function -- it's how we encode our shares.
// Given a secret pixel, subdivide it into four subpixels with a set pattern.
const subdivideSecretPixel = (pixel) => {
    const redPill = Math.random() > 0.5;

    if (pixel.alpha > 0) {
        // The pixel is coloured in the secret.
        // When overlaid, all four subdivisions in the shares need to be black.
        if (redPill) return [ patternA, patternB ];
        return [ patternB, patternA ];
    }

    // The pixel in the secret was not coloured.
    // When overlaid, only two of the four subdivisions should be black.
    if (redPill) return [patternA, patternA];
    return [patternB, patternB];
};
```

**Decryption**

Simply overlay each person’s shares to get back the original image!

![Animated demo of visual cryptography decryption][visual-crypto-gif]

## Wrap up

That’s a super quick overview of the ideas behind visual cryptography. There’s a tonne more fascinating stuff to read, especially once you get into the *k* out of *n* schemes and using coloured images I mentioned in the intro. Here are some of the great resources I’ve been reading to learn about visual cryptography. Dive in!

* [A great web primer](http://www.datagenetics.com/blog/november32013/), it’s honestly probably even a better explainer than this
* [The OG paper on visual cryptography](http://www.cs.jhu.edu/~fabian/courses/CS600.624/NaorShamir-VisualCryptography.pdf)
* [Visual cryptography for colour images](https://www.sciencedirect.com/science/article/pii/S0031320302002583)
* [k out of n visual cryptography](http://ieeexplore.ieee.org/document/7726969/)


[visual-crypto-gif]: https://i.imgur.com/RIVgS4c.gif
[full-gist]: https://gist.github.com/anonymous/62495384b922514325bf10a3d08f0c16
[visual-crypto-tutorial]: https://i.imgur.com/LOBfysb.png
