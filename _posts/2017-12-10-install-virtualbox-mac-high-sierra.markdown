---
title: "How to Install VirtualBox on macOS Mojave and High Sierra"
layout: post
rank: top
category: mac
excerpt: A quick guide on a couple of tricks you need to get VirtualBox installed on a Mac. Includes a bonus tip on sharing folders between the VM and your host OS.
---

I tried to install VirtualBox on macOS High Sierra, but I got an error about kernel drivers, system extensions, and kernel modules not being installed. The VirtualBox installer fails with “The installation failed” where it “encountered an error that caused the installation to fail.”  This guide also works for macOS Mojave.

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

## How to add a shared folder for Ubuntu on a macOS High Sierra Host?

Side note: here's how to share files between a Ubuntu virtual machine and macOS High Sierra on VirtualBox.

* Download, set up your VM. See above.

* Open settings for the VM. Click the "Shared Folders" tab. Add your folder and select Yes for "Auto-mount"

* Run the VM

* While the VM is running, in the Mac menu bar go to Devices > Optical Drives > Choose disk image… 

* Select the VirtualBox Guest Additions image, for me this is located at `/Applications/VirtualBox.app/Contents/MacOS/VBoxGuestAdditions.iso`. Once the `Choose disk image…` option was selected, you were probably shown a file picker. Press Command-Shift-G and then type in that file to choose the `VBoxGuesAdditions.iso`.

* You might need to force mount/unmount. You’ll be prompted by VirtualBox if this is necessary.

* Restart your VM.

* Run the following command to install prerequisites for the Mac VirtualBox Guest Additions: `sudo apt-get -y install gcc make linux-headers-$(uname -r)`

* Then run `sudo /media/cdrom/VBoxLinuxAdditions.run` to install the Guest Additions

* Restart your VM again.

* Run `sudo usermod -aG vboxsf USERNAME` where `USERNAME` is your guest OS username. This will let your user access the shared folder.

* Your folder will be at `/media/sf_FOLDER_NAME`, so `cd /media/sf_FOLDER_NAME`
