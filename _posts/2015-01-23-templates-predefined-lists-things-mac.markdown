---
title: "Templates and Predefined Lists in Things"
layout: post
category: mac
---

If you have collections of tasks that you do every now and then, [Things][th] can’t quite handle it. It has powerful support for recurring tasks, but only on a fixed timeline—it has no concept of presets, predefined lists, or templates.

A few examples of how this is helpful:

- I have a list of things I need to do before I go away for the weekend
- you need to do a series of steps whenever you release a new build of an app
- every time you travel, there’s a list of items you have to cover

Save the following in Script Editor on your Mac. I recommend using [Fast Scripts][fs] to run your scripts from the menu bar.

```
tell application "Things"
  set Todos to paragraphs of (read (choose file with prompt "Pick text file containing todos"))
  set myProjects to {}
  
  repeat with pr in to dos of list "Projects"
    copy pr's name to the end of myProjects
  end repeat
  
  set selectedValues to (choose from list myProjects with title "Choose Project" with prompt "Select a location (Cancel to send to Inbox)")
  
  repeat with nextTodo in Todos
    if length of nextTodo is greater than 0 then
      if selectedValues is not false then
        if (count of selectedValues) is greater than 0 then
          -- The user has selected a project to save the todos to
          set projectName to beginning of selectedValues
          set newTodo to make new to do ¬
            with properties {name:nextTodo} ¬
            at beginning of project projectName
        end if
      else
        -- The user has not select a project. Add to Inbox.
        set newTodo to make new to do ¬
          with properties {name:nextTodo}
      end if
    end if
  end repeat
end tell
```

The source of the items needs to be a text file, with each new todo item on a new line.

After you choose the source, you can pick a project for them to go to. Or you can hit ‘Cancel’ (unintuitive, huh) and it will add everything to Next.

And here’s what running it looks like.

__Step One__

![Choose a source for your predefined list][src]

__Step Two__

![Choose a destination in Things][dest]

__Step Three—Finished__

![Now your template is in Things][finished]

[src]: http://i.imgur.com/aPdp3SJ.png
[dest]: http://i.imgur.com/Un0hwUY.png
[finished]: http://i.imgur.com/LykYyZe.png
[th]: https://culturedcode.com/things/
[fs]: http://www.red-sweater.com/fastscripts/
