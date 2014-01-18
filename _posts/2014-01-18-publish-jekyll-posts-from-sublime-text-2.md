---
layout: post
title: How to Publish Jekyll Posts from Sublime Text 2
category: web
---

Publishing to a Jekyll blog—or any blog—from Sublime Text 2 involves setting up a Custom Build System, which you can read about in [Addy Osmani's post here][1].

[1]: http://addyosmani.com/blog/custom-sublime-text-build-systems-for-popular-tools-and-languages/

1. Create a bash script of the git commands. I called mine `commitpost`, and saved it in `~/bin/` (you may need to symlink it to somewhere else—I forget how I got my `bin` set up).

```
#!/bin/bash
git add -A && git commit -m 'post' && git push -u origin master
```

2. Create a `.sublime-build` file in your `~/Library/Application\ Support/Sublime\ Text\ 2/Packages/User` directory. I saved this file as `pushToMp.sublime-build`.

```
{
  "cmd": ["pushToMp"],
  "working_dir": "$project_path"
}
```

3. Select the build system for your Markdown documents by choosing it in the menu bar Tools -> Build System -> `pushToMp`. Run the Build with `CMD+B`
