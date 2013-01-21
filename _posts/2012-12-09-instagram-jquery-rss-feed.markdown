---
layout: post
title: Embedding an Instagram Feed into Your Website Using RSS and jQuery
category: web

excerpt: How to include an Instagram Feed into a website with RSS and jQuery...
---

<p>Including an Instagram feed is not difficult, you don't need an API or developer code and you can do it quickly from an Atom/RSS Feed. Conveniently, the feed is outputted in an easy to style list.</p>
<h2>Ready your feed:</h2>
<p>
	Visit instagram.heroku.com/users/YOURUSERNAME</p>
	<p>Click 'user discovery process'</p>
	<p>Log in/verify</p>
	<p>Visit instagram.heroku.com/users/YOURUSERNAME and click the 'photo feed link'</p>
<p>	Copy the URL (it should end in .atom)</p>
	
<h2>Set up your HTML file:</h2>
	<pre>
&lt;html&gt;
	&lt;head&gt;
	&lt;script src=&quot;<br/>http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js<br/> &quot;type=&quot;text/ javascript&quot;<br/>&gt;&lt;/script&gt; 
	&lt;script src=&quot;jquery.zrssfeed.min.js&quot; <br/>type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
	
	&lt;/head&gt;
	&lt;body&gt;
	&lt;div id=&quot;instagram&quot;&gt;
	
	
	&lt;/div&gt;
	&lt;script type=&quot;text/javascript&quot;&gt;
		$(document).ready(function () {
    	$(&#39;#instagram&#39;).rssfeed(<br/>&#39;http://instagram.heroku.com/users/YOURUSERID.atom&#39;,{
        	snippet: false,
        	limit: 3,
    	}, function(e) {
        $(e).find(&#39;div.rssBody&#39;).vTicker({
            showItems: 1,
           
        		});
    		});
		});
	&lt;/script&gt;
	&lt;/body&gt;
	&lt;/html&gt;
	

</pre>
<h2>Download ZRSSFeed:</h2>
	<p><a href="http://www.zazar.net/developers/jquery/zrssfeed/">Download</a></p>
<p>	Copy/Paste the jquery.zrssfeed.min.js file to your directory</p>
	
<h2>Edit the following lines in your HTML file:</h2>
	<p>http://instagram.heroku.com/users/YOURUSERID.atom with your user id</p>
<p>
	Set 'limit' to how many photos you want to display
	</p>
<h2>Read the docs:</h2>
	<p><a href="http://www.zazar.net/developers/jquery/zrssfeed/">ZRSSfeed Docs</a> will help you get set up with specific settings.</p>
	
<h2>Optional Extra - displaying only the image:</h2>
	<p>To display the image with no date, title or text, you'll need to edit the Javascript and add some CSS.</p>
	<p>The CSS is easy:<br/>
		a {
			display:none;
		}<br/>
		will remove the links</p>
<p>
	To remove dates, you'll need to go through the Javascript file and remove any functions or references to dates. I have done this and uploaded the results, you can download it <a href="http://d.pr/f/YxMI">here</a>.</p>
	
