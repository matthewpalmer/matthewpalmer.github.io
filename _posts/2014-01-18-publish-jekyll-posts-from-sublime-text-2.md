---
layout: post
title: How to Publish Jekyll Posts from Sublime Text 2
category: web
---

Publishing to a Jekyll blog—or any blog—from Sublime Text 2 involves setting up a Custom Build System, which you can read about in [Addy Osmani's post here][1].

[1]: http://addyosmani.com/blog/custom-sublime-text-build-systems-for-popular-tools-and-languages/

Create a bash script of the git commands. I called mine `publishJekyllPost`, and saved it in `~/bin/` (you may need to symlink it to somewhere else—I forget how I got my `bin` set up). I also had to change permissions for the script, using `sudo chmod 755 publishJekyllPost` from within the `~/bin/` directory. The `chmod` value for the file needs to be `755`—you can clarify this by running `stat -f "%OLp" <file>`.

```
#!/bin/bash
git add -A :/
git commit -m "post"
echo "Pushing"
git push -u origin master
```

On the second line, `add -A :/` ensures that all of the files in the git tree are added; you can adjust this as required.

Create a `.sublime-build` file in your `~/Library/Application\ Support/Sublime\ Text\ 2/Packages/User` directory. I saved this file as `Jekyll.sublime-build`.

```
{
  "cmd": ["publishJekyllPost"]
}
```

Select the build system for your Markdown documents by choosing it in the menu bar Tools -> Build System -> `Jekyll`. Run the Build with `CMD + B`, and you should see the output of a regular `git push` command in the Sublime console.
