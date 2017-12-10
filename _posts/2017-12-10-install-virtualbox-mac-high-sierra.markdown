---
title: "How to Install VirtualBox on macOS High Sierra"
layout: post
category: mac
---

I tried to install VirtualBox on macOS High Sierra, but I got an error about kernel drivers, system extensions, and kernel modules not being installed. The VirtualBox installer fails with “The installation failed” where it “encountered an error that caused the installation to fail.” 

Go to System Preferences > Security & Privacy. Click the ‘Allow’ button at the bottom. Re-run the installer. More detailed instructions are below.

![VirtualBox on macOS failed to install][failed]

<small style="display:block;text-align:center;color:gray;font-weight:100;font-size:10px;font-family:Helvetica;margin-top:2%;">VirtualBox has an error when installing.</small>

* Run the VirtualBox installer just like any other installer.

* You might see a prompt from macOS about not allowing unsecure system extensions. You can click ‘Next’ for now.

* After reaching the end, installation will fail with the message above.

* Navigate to System Preferences > Security & Privacy. At the bottom of the window, you should see a message saying “System software from developer, ‘Oracle, America, Inc.‘ was blocked from loading.”

![VirtualBox allow kernel modules][allow]

* Click the lock in the bottom left corner, enter your password

* Click ‘Allow’ next to the ”blocked from loading” message.

* Re-run the VirtualBox installer. It should succeed.

![VirtualBox install success on High Sierra][success]

[failed]: https://i.imgur.com/hGZ3ZF2.png
[allow]: https://i.imgur.com/IOBK5vg.png
[success]: https://i.imgur.com/pC3cs2i.png

