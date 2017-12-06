---
title: Emoji Bullet List ⚡ Behind the Scenes
layout: post
category: web
---

Have you ever seen tweets like these?

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Our <a href="https://twitter.com/buffer?ref_src=twsrc%5Etfw">@buffer</a> Social blog numbers for October:<br><br>🖥️ 1,431,160 sessions<br>👀 1,702,867 pageviews<br>🔍 80% search traffic<br>🕑 4m 24s average time on page<br>🏀 12% inverse bounce rate<br>💰 1,641 signups directly from the blog<br><br>P.S. What else would you want me to share?</p>&mdash; Alfred Lua (@alfred_lua) <a href="https://twitter.com/alfred_lua/status/932590618039193601?ref_src=twsrc%5Etfw">November 20, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Bulleted lists that use emoji

- 🌟 look awesome
- 💯 are perfect for sharing on social media
- 😄 bring joy to boring lists

*(Can you guess how I made that emoji list?)*

Painful to write, though. Like, [I know emoji better than most](http://matthewpalmer.net/rocket), and I struggle to quickly pick out the right emoji to go with each line.

I built [Emoji Bullet List](https://emojibulletlist.com/?ref=mpblog) to make creating emoji dot point lists really easy. Just copy in your list, hit the big "Emojify" button, quickly choose from the suggested emoji if the first suggestion doesn't fit your needs, and hit "Copy" to get an emojified list back. Too easy!

This idea originated as a nice-to-have feature for Rocket, but I realised I could use Rocket's emoji keyword/phrase dataset to build this into a web app. More people can access it, it's a bit easier to use, and hopefully a few more people will find Rocket because of it. 

I couldn't figure out a good way to monetise it, so it’s completely free 🤷‍♂️.

### Technical Notes

#### Simple, useful logging for Node.js apps

I added unremarkable-yet-incredibly-useful logging with ten lines of JavaScript that lets me see in detail how (anonymised) users are interacting with the app. (This is great for low volume apps, but I don't do this for services running at scale.)

* Create a middleware function early in the chain that gives a user a random identifier as a cookie (using Express `cookie-parser`) when they access a page if they don't have one already.

```js
app.use(cookieParser())

app.use((req, res, next) => {
	if (!req.cookies[COOKIE_NAME]) {
		res.cookie(COOKIE_NAME, uuid(), { maxAge: 900000, httpOnly: true })
	}
	next();
});
```

* Create a second middleware function using the Express `response-time` middleware that logs the user's cookie, what they're requesting, and how long it took us

```js
app.use(responseTime((req, res, time) => { 
	const cookie = req.cookies[COOKIE_NAME] || 'no-cookie                           '
	console.log(cookie, req.path, time)
}))
```

(The extra spaces next to `no-cookie` are so that it lines up with our UUIDs in the logs.)

* Since I use pm2 to manage the app in production, the log file gets handled automatically, and I can just `pm2 logs` to stream the app in use and see what people are doing in real time. This is pretty addictive. Let's take a look at one example I saw.

```
# A new user comes to the app, gets their identifier set as c5ff9a10
0|index    | no-cookie  / 						0.5199119999999999
0|index    | c5ff9a10   /styles.css 			0.39601899999999995
0|index    | c5ff9a10   /app.js 				0.33612

# Another new user comes in, set as 1378f9d0
0|index    | no-cookie  / 						0.37545999999999996
0|index    | 1378f9d0   /styles.css 			0.362075
0|index    | 1378f9d0   /app.js 				0.491498

# The first user asks for some suggestions and uses them!
0|index    | c5ff9a10   /api/v1/suggestions 	0.964749
0|index    | c5ff9a10   /api/v1/used-suggestion 0.5390269999999999

# Some previous user comes back to the app and asks for a suggestion
0|index    | f92af790   / 						0.46471999999999997
0|index    | f92af790   /styles.css 			0.40573299999999995
0|index    | f92af790   /app.js 				0.217364
0|index    | f92af790   /favicon.ico 			0.31112999999999996
0|index    | f92af790   /api/v1/suggestions 	0.921465

# Our original user is playing around with different suggestions until they're happy
0|index    | c5ff9a10   /api/v1/suggestions 	0.676022
0|index    | c5ff9a10   /api/v1/suggestions 	0.8778859999999999
0|index    | c5ff9a10   /api/v1/suggestions 	0.71288
0|index    | c5ff9a10   /api/v1/used-suggestion 0.522269
```

There are a bunch of fancier ways using external services or adding full user tracking, but honestly there's nothing more fun than tailing your logs in realtime while someone is successful with your app.

I even saw one person come in, play around with the app for a minute, and click on the link to my Twitter profile. I opened up Twitter, and 30 seconds later I had a tweet from them about how much they liked the app 😁.

(As a side note, you'll notice attackers and bots trying to crawl your site for security vulnerabilities. `/manager/assets/modext/modx.jsgrps-min.js`, `/media/system/js/core.js`, `/privacy_policy.php` (why!?), `/a2billing/common/javascript/misc.js`, are some common ones.)

#### Dead-simple Node.js and Express app deployment on DigitalOcean

I've got a dead simple deployment strategy that's great for small apps. Put this in a file called `node-simple-redeploy.sh` (or whatever) in your project.

```
#!/bin/sh

# Copy this to your package. Change the IP.
rsync -azv --exclude node_modules/ --progress -e ssh "$PWD" root@XXX.XXX.XXX.XXX:~/app/

# You may need to npm install on the DigitalOcean box
```

And to your `package.json`, add

```
"scripts": {
	...
	"sync": "./node-simple-redeploy.sh",
}
```

And I simply `npm run sync` to update the app. Don't do it at scale, but it's super fast and works for small apps. I’m not fancy 🤷‍♂️.

#### Other Notes

* Like most web apps I make, it's a one-page app using Node.js, Express, and MongoDB for long-term storage. On the frontend it's pretty plain JS/jQuery/CSS. I love Flexbox more and more each day.
* The emoji dataset is loaded into memory on the backend and we query from there, so it's super fast.
* I'm always surprised how simple implementing things like popup modals and selectable lists are in web development compared to iOS apps. It's like 30 minutes of work to write your own.
* Uses LetsEncrypt for HTTPS. So easy.


**If there's anything you'd like me to write more about, [let me know](http://twitter.com/_matthewpalmer).**