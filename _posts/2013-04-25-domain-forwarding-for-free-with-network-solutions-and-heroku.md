---
layout: post
title: Domain Forwarding on Naked Domains with Network Solutions
category: web

excerpt: Here's a quick guide on how to get domain forwarding to heroku on naked and apex domains to work with Network Solutions.
---

Here's a quick guide on how to get domain forwarding to heroku on naked and apex domains to work with Network Solutions for __free__. Network Solutions wants to charge money for domain forwarding, but with a few redirects, we can somewhat achieve the same results.

1. Start by setting up your Heroku custom domain as normal. When this is done, visiting _www.yourwebsite.com_ will work, and _yourwebsite.com_ will not work.
2. Create a custom Github Pages site [following these instructions](https://help.github.com/articles/creating-project-pages-manually).
3. Then [do this](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) to get your custom DNS settings working with the naked domain. If you test now, visiting the naked domain should take you to your Github custom page
4. Alter the custom page you made by adding _window.location.assign("http://www.yoursite.com")_ within some _<script>_ tags.
5. Visiting _yoursite.com_ should now eventually redirect you to _www.yoursite.com_

These changes may take up to ten or fifteen minutes each to work (usually less), so it's best to be patient. It's a little slow to redirect, but it's better than paying $12 per month for something that would only be slightly better. Next time I won't be using Network Solutions.

If you need help, [contact me on twitter](twitter.com/_matthewpalmer).


