---
title: "How to Create a Sublime Text 2 Plugin"
layout: post
category: mac
---

Like a lot of people, I write in [Markdown][md], which has great reference-style links.

        This is [some text][st] that I am writing.
        
        [st]: http://sometext.com

I do my writing in Sublime Text 2, and I use these links all the time, but I never like to interrupt what I’m writing by searching for URLs. Instead, after I’ve finished writing, I then go through grab out the reference links to be researched.

With this goal, and with the [documentation][stdocs] here’s how to create a simple plugin or package for Sublime Text 2.

1.    In the Menu Bar, click Tools → New Plugin.
      
      ![Sublime Text 2 New Plugin][newplugin]
2.    This will open a new tab with some default code.

          import sublime, sublime_plugin

          class ExampleCommand(sublime_plugin.TextCommand):
            def run(self, edit):
              self.view.insert(edit, 0, "Hello, World!")
3.    Hit Save, which will open a dialog in the `Packages/User` directory.
      **We don’t want this.** Instead, create a new directory within 
      the `Packages` directory. Call it `Extract Markdown Links`.
      So, after this, there should be a directory called
      `Packages/Extract Markdown Links`. Save the file there, and 
      call it `Markdown Links.py`.
      ![directory][dir]
4.    Create a new file (Command + N) and paste in the following code
      
          [{
            "id": "markdownlinks",
            "caption": "Extract Markdown Reference Links",
            "command": "markdown_links"
          }]
5.    Save this file in the directory we created above, calling it `Default.sublime-commands`.
6.    Switch back to your `Markdown Links.py` file, and replace its
      contents with the following. Save the file.
      
          import sublime, sublime_plugin, re

          class MarkdownLinksCommand(sublime_plugin.TextCommand):
            def run(self, edit):
              # Extracts reference-style links from Markdown text
              # The matching links are inserted at the cursor location
              content = self.view.substr(sublime.Region(0, self.view.size() - 1))
              # * a string in square brackets
              # * an optional space
              # * word characters in square brackets (captured)        
              matches = re.findall(r"\[[^\]]*\] ?(\[\w+\])", content)
              currentPosition = self.view.sel()[0].begin()
              self.view.insert(edit, currentPosition, ":\n".join(matches) + ":")
      
      A quick run through (skip if you like):
      
      1. `import` the necessary modules—the two sublime modules for access to the API and `re` for regular expressions.
      2. `MarkdownLinksCommand` is the name of the class. Note that this name has to correspond to `markdown_links` (under the key `command`) in the file `Default.sublime-commands`. Strip `Command`, convert camel-case to underscores, and make everything lowercase to get from the class name to the command.
      3. `self.view.substr` with this region gets the contents of the currently active document, from the first character to the last.
      4. Extract the matches from the contents.
      5. Insert the matches, inserting colons and new lines, at the current cursor location.
7. Now you should be able to run your command. Open up a Markdown file with some reference links, hit Command + Shift + P, and search for ‘Extract Markdown Reference Links’.

![search][search]

[md]: http://daringfireball.net/projects/markdown/
[stdocs]: https://www.sublimetext.com/docs/2/api_reference.html "Sublime Text 2 API Reference"
[newplugin]: http://i.imgur.com/hATjaxN.png
[dir]: http://i.imgur.com/sw1Lnpz.png
[search]: http://i.imgur.com/9OIGx7F.png

