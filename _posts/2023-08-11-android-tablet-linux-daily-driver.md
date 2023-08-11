---
title: "Using Linux on Android as a Daily Driver"
tags: "linux, android, tablet, samsung, open-source"
---

# Note

This post isn't yet finished. Stuff is missing (most links) and I haven't yet gone into the meat of the Linux setup. However, I'd rather share a work in progress than have this in my drafts and never finish it. So, here it is - I'll likely finish it up in the next few days, but let's see.

---

I recently bought a [Samsung Galaxy S6 Lite]() with the intention of building it into a super lightweight Linux box for actual work. I'll chronicle the ups and downs in this post.

## For the love of gods, why?

I've always been a minimalist and a hacker (in the [hackerspace sense of the word](), not the type who wears a black balaclava and steals credit card info). I previously kicked around the idea of building a [Raspberry Pi Zero]() (alongside laptop parts) into a dedicated portable vim station. The idea of using a tablet as a Linux box (with attached keyboard and mouse) has been percolating for a while, so when I saw a tablet for like 40% off, I decided to take the plunge.

## Why not a lightweight laptop?

That's too easy. Plus I like having a detachable, rotatable screen for reading books and comics.

## But why not a Lenovo Yoga or something

Eh, enough justification. I've already sunk my costs on this project. Keep reading or don't.

## So, what work are you planning to do on it, specifically?

- Writing Python code and markdown
- Basic file management
- Writing and publishing blog posts
- Editing colleague's blog posts
- Communication with colleagues
- Video conferencing

## What about fun?

I'm planning to use the tablet for pleasure too. Namely:

- Watching videos (via [NewPipe](), NetFlix, other streaming services)
- Writing personal blog posts (like this one)
- Reading books
- Reading comic books and graphic novels
- General web surfing

## And hacker-y stuff?

I'd love to be able to:

- Use Arduinos and Raspberry Pi's
- Design and slice 3D models for printing
- Create SVGs for laser cutting (and interface with the cutter itself)

I don't see these being trivial. At the very least I'd need an OTG adapter to even physically connect the devicees, and this device is becoming such a Frankenstein already (a Linux brain in an Android body, which expects certain kinds of hardware access) and drivers (esp for Arduinos) may be an issue.

## What's the setup?

There are several layers to this:

- Stock Android stuff
- Official apps (from companies who make software my company uses)
- FOSS apps (usually from F-Droid)
- Real Linux stuff (running inside Termux)

### Stock Android and official apps

First up, some of my work I can do in existing Android apps. I'm crazy and masochistic to be doing this experiment in the first place, so I'm not going to flagellate myself even more than necessary. Running Zoom through asciicinema is out of the question. Anything I can do in plain old Android (at a level similar to doing it on desktop) I *will* do in Android. That includes:

#### Samsung DeX

![](images/tablet-linux-dex.jpg)

Not strictly "stock" Android, but it's part of the Samsung tablet experience. It gives me a much more desktop feel, and setting it to autohide the taskbar gives me a decent amount of screen space. It's a shame the window titlebars are so massive. I'd love something like the Gnome [Unite extension] but given DeX's limited options that's not on the table. It's a decent enough desktop environment given my options.

(And yes, those options include running X11 and VNCing into a "real" desktop environment. Keep reading)

#### Video meetings via Zoom

I don't have too many of these and the Zoom app seems on par with the Linux desktop version (which lags behind other versions in my experience). Camera placement may be an issue when I use the device in landscape. Maybe a 3D printed periscope to change the angle...

#### Work comms via Slack

I'm on Slack all the time. The Android app seems *fine*, but I miss the multi-pane arrangement from desktop which I *should* be able to replicate by running the website through [Native Alpha]() but the zoom goes haywire (also on other Android browsers in landscape) so I had to scrub that idea because it was very literally a headache.

I can live with the Android version for now.

#### Google suite

Just using the apps. They're more tablet optimized than running in a browser or some weird Linux version.

#### Banner creation with Canva

We use [Canva]() to create banners for our blog posts. Surprisingly, Canva's app is just as good as the desktop version -- perhaps even more so since I can use the S pen with it directly. Respect.

#### What Android apps suck for this?

Mostly apps that render a scaled up phone view on a tablet. This includes:

- Firefox (my desktop daily driver)
- GitHub
- Probably a few others

### FOSS apps

There are a bunch of apps I installed from F-Droid that make life a lot easier

#### Termux + extensions

Without this I can't run the stuff later in this post. I wouldn't even have bothered trying this project without it.

#### Browser: Fulguris

Weird name, good browser. Built-in adblock, lots of settings to tinker with. Some inconsistencies with the behavior I'd expect (given I'm using it with keyboard and mouse), but I've filed an issue and will see where it goes.

#### Adblocker: PersonalDNSFilter

I install this on all my Android devices. No ads ever. Bliss

#### Alpha Native

Kind of an Electron equivalant. Wraps websites into a webview without toolbar and other chromey bullshit. I primarily use GitHub through this, since I can get the full desktop website and it works perfectly. Well, perfectly-ish. There's a bug or two, but I think that's likely from upstream webview. It also gives lots of options to customize how the wrapped site behaves.

#### KDE Connect

I don't use KDE itself, but KDE Connect is a killer app for inter-device connectivity regardless. No point in me spilling pixels on how useful it is, since none of that is tablet specific.

#### NewPipe

The YouTube experience, plus:

- No ads
- Download any video (or just the audio for the video)
- No bullshit algorithmic feed (it supports subscriptions tho)
- Optional sponsorblock

#### Libera

My go-to reader app. Handles comics (in `cbz` and `cbr` format) and any ebook I can throw at it. It just works. No notes.


