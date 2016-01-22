---
title: "Transducer 1.0"
layout: post
category: mac
---

I've been working on a Mac app that makes posting podcasts to Libsyn and SoundCloud way easier. This is the first Mac app I've ever made, and I've just released the first version. [Download Transducer for OS X](http://matthewpalmer.net/transducer) for free and let me know what you think.

This started as a cobbled together Shell script, and has grown pretty organically from there. First, I just wanted a way to automate posting a new podcast episode to a Jekyll blog. Then, I wanted to get the file's metadata and have that automatically filled in for the RSS feed. Then, I wanted to set the ID3 metadata, and to not have to type the same stuff out week after week.

The 1.0 gives me exactly the workflow I wanted:

1. Choose the audio file you want to post
2. Choose the podcast you're posting it for
3. Fill in some metadata (title, description, etc.)
4. Upload to Libsyn (or SoundCloud!)
5. Run a custom script to create a Jekyll post that'll eventually end up in the podcast's RSS feed

The design's definitely not as polished as I'd like, and there are still some rough edges, but I'm hoping it'll make posting a podcast a little bit easier.
