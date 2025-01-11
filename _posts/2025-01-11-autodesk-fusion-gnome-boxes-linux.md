---
title: Installing Autodesk Fusion on Gnome Boxes on Linux
date: 2025-01-11
layout: post
author: Alex C-G
permalink: /autodesk-fusion-gnome-boxes-linux
splash_img_source: /assets/img/fusion-linux/fusion-linux.png
categories:
  - linux
  - virtualization
tags:
  - linux
  - virtualization
---

I've just spent several days pulling my hair out trying to install [Autodesk Fusion](https://www.autodesk.com/products/fusion-360/overview?term=1-YEAR&tab=subscription) on Linux. There's no native version available, so I've been trying to get the Windows version running, without any real success up until now.

**Note:** I came across some AI slop instructions during my intense research. That wasted my time completely. Rest assured, this page is 100% human generated. Any stupidity is pure, honest-to-goodness _human_ stupidity, not artificial stupidity.

## Caveats

- I haven't really used this for real work yet - just tested that it runs okay and can load files.
- Gnome Boxes only supports software rendering, no 3D acceleration. So things will be a little slow.

## My Setup

- Lenovo ThinkPad X1 Carbon Gen 9
- 16 gb RAM
- Intel Xe Graphics (TGL GT2) card
- [Manjaro Linux](https://manjaro.org/)
- Gnome 47 running on Wayland

## You Will Need

- A computer running Linux. I haven't tested on BSD or anything else.
- A Windows 10 `.iso` file. I used [NTLite](https://www.ntlite.com/) to cut a lot of the junk and hopefully make it run faster.

## You Will Not Need

- A Windows 10 license. It runs just fine if you don't register.

## Instructions

I'm keeping these brief, since installation methods may vary based on your Linux distribution, and I mostly just cribbed instructions from other places anyway.

1. Install [Gnome Boxes](https://apps.gnome.org/Boxes/). I installed version 47.0 through my package manager, though Flatpak may work too.
2. Install Windows on Gnome Boxes. I used [this guide](https://www.ctrl.blog/entry/how-to-win10-in-gnome-boxes.html). Follow the guide's post installation steps to ensure you get shared folders and graphics drivers working.
3. Optionally clean up some of the Windows crap and install a safer browser like Firefox.
4. Download and install Fusion from [Autodesk's website](https://www.autodesk.com/products/fusion-360/personal-form). After running it and logging in, it should work fine.

## Notes

- When dealing with virtualization tools like VirtualBox or Gnome Boxes, I find it helps to reboot if I face an issue. Virtualization is a tricky process and if you've done something like upgrade your kernel since your last reboot it can just not work right.
- When installing Windows, don't use any online accounts, and if it asks for a license key, just click the text that says something like "I don't have a license key"
- If you don't use a license key, you can't activate Windows. This disables certain functionality like being able to customize the taskbar or change your wallpaper.
- If there are any issues within the virtual machine, I suggest rebooting that. Especially after installing the SPICE addons.
- Be sure to actually shut down your virtual machine when you're done. Just clicking the close button on the title bar pauses it, and it still takes up memory.
- I used Gnome Boxes snapshot feature to take a snapshot after I got Fusion working properly, in case I need to roll anything back.
- Use Gnome Boxes [shared folders](https://alexandruvisarion.wordpress.com/2017/06/15/gnome-boxes-introducing-shared-folders/) feature to get files in and out of your virtual machine.

## Appendix: What I tried before

- **Installing via [Bottles](https://usebottles.com/) (a Wine wrapper)**: Honestly I can't remember what failed on this try. I _think_ it installed okay, but didn't start up.
- Installing from [Autodesk-Fusion-360-for-Linux repo](https://github.com/cryinkfly/Autodesk-Fusion-360-for-Linux/): At first the installer claimed I didn't have enough disk space. Installing [bc](https://www.gnu.org/software/bc/) via my distribution's package manager fixed that. Fusion ran after installation, but failed when trying to validate my login, I guess due to my Linux browser not being able to redirect back to a Windows app. Installing Windows Firefox in the same `WINEPREFIX` didn't work either.
- Installing from the [fusion360 snap](https://github.com/Thermionix/fusion360): Same situation as the Autodesk-Fusion-360-for-Linux repo. Additionally I had to restart after installing Snap and manually enable it from `systemctl`.
- Installing on [VirtualBox](https://www.virtualbox.org/): Install worked fine, it started and redirected me to my browser to login. It successfully redirected my back to the app, but then hung when it was getting my user data. It said something in Task Manager about it waiting on the network. Fiddling with network settings didn't fix it.

To summarize:

| Method          | Install? | Run? | Login? | Download user data? | Actually work? |
| --------------- | -------- | ---- | ------ | ------------------- | -------------- |
| Bottles         | ✅       | ❓   | ❌     | ❌                  | ❌             |
| Linux installer | ✅       | ✅   | ❌     | ❌                  | ❌             |
| Snap            | ✅       | ✅   | ❌     | ❌                  | ❌             |
| VirtualBox      | ✅       | ✅   | ✅     | ❌                  | ❌             |
| Gnome Boxes     | ✅       | ✅   | ✅     | ✅                  | ✅             |
