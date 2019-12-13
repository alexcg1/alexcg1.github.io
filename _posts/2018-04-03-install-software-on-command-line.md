---
id: 54
title: Install Software Quickly via the Command Line
date: 2018-04-03T15:53:56+00:00
author: Alex C-G
guid: http://remix.zone/?p=54
permalink: /2018/04/03/install-software-on-command-line/
image: /wp-content/uploads/2018/04/Chocolatey-Screenshot-825x510.png
categories:
  - Blog
tags:
  - command-line
  - howto
  - windows
---
Though you may not believe it from my stunningly youthful good looks, I grew up in the halcyon days of MS-DOS 5.0. One of my fondest memories is sitting in front of my Dad&#8217;s 80286 with a hulking CRT screen, and typing the commands to start [Prince of Persia](https://classicreload.com/prince-of-persia.html).

<img src="http://remix.zone/wp-content/uploads/2018/04/320px-GAME_Prince_of_Persia_Title-300x188.png" alt="" width="600" height="390" class="alignnone size-medium wp-image-55" />

We&#8217;ve come a long way since then, but I&#8217;ll always be a command-line guy. It&#8217;s not (just) nostalgia either. If you really want to get things done more efficiently, the command line is king.

## Example 1: Installing Software

We&#8217;ll be using Windows as an example here, since a) loads of people use it, b) I feel like a challenge. <span id='easy-footnote-1' class='easy-footnote-margin-adjust'></span><span class='easy-footnote'><a href='http://remix.zone/2018/04/03/install-software-on-command-line/#easy-footnote-bottom-1' title='Using the command line on Mac or Linux is well supported. On Windows it sometimes feels like a second-class citizen'><sup>1</sup></a></span><figure id="attachment_65" style="width: 762px" class="wp-caption aligncenter">

<img src="http://remix.zone/wp-content/uploads/2018/04/download-button-tries-to-trick-you.png" alt="" width="762" height="511" class="size-full wp-image-65" srcset="http://remix.zone/wp-content/uploads/2018/04/download-button-tries-to-trick-you.png 762w, http://remix.zone/wp-content/uploads/2018/04/download-button-tries-to-trick-you-300x201.png 300w" sizes="(max-width: 762px) 100vw, 762px" /><figcaption class="wp-caption-text">The joys of downloading software</figcaption></figure> 

I&#8217;ve almost given up installing software via a GUI <span id='easy-footnote-2' class='easy-footnote-margin-adjust'></span><span class='easy-footnote'><a href='http://remix.zone/2018/04/03/install-software-on-command-line/#easy-footnote-bottom-2' title='Graphical User Interface'><sup>2</sup></a></span>. It just means a lot of time clicking, changing windows, and losing focus. Usually, if you want to install software on Windows, you have to:

  * Search for the software on Google <span id='easy-footnote-3' class='easy-footnote-margin-adjust'></span><span class='easy-footnote'><a href='http://remix.zone/2018/04/03/install-software-on-command-line/#easy-footnote-bottom-3' title='Though I&#8217;d recommend <a href=&quot;http://duckduckgo.com&quot;>DuckDuckGo</a> if you&#8217;re privacy-conscious.'><sup>3</sup></a></span>
  * Go to the software website <span id='easy-footnote-4' class='easy-footnote-margin-adjust'></span><span class='easy-footnote'><a href='http://remix.zone/2018/04/03/install-software-on-command-line/#easy-footnote-bottom-4' title='A lot of useful software is still not on the Windows Store'><sup>4</sup></a></span>
  * Find and click a download link (and make sure it&#8217;s the right one!)
  * Find the file you downloaded
  * Open the installer
  * Click, click, click through to install

While each of these steps may not take too much time, they all require your attention and that time adds up.

Whereas, on the command line:

<img src="http://remix.zone/wp-content/uploads/2018/04/Screenshot-from-2018-04-03-14-45-21-1024x644.png" alt="" width="660" height="415" class="aligncenter size-large wp-image-69" srcset="http://remix.zone/wp-content/uploads/2018/04/Screenshot-from-2018-04-03-14-45-21-1024x644.png 1024w, http://remix.zone/wp-content/uploads/2018/04/Screenshot-from-2018-04-03-14-45-21-300x189.png 300w, http://remix.zone/wp-content/uploads/2018/04/Screenshot-from-2018-04-03-14-45-21-768x483.png 768w, http://remix.zone/wp-content/uploads/2018/04/Screenshot-from-2018-04-03-14-45-21.png 1466w" sizes="(max-width: 660px) 100vw, 660px" />

  * Open Powershell <span id='easy-footnote-5' class='easy-footnote-margin-adjust'></span><span class='easy-footnote'><a href='http://remix.zone/2018/04/03/install-software-on-command-line/#easy-footnote-bottom-5' title='Hit <i>Win</i>+<i>r</i>, type <i>powershell<i> and hit enter.
<p>And yes, the above screenshot is not really Powershell. I cheated since I&#8217;m on my Linux box right now'><sup>5</sup></a></span>
  * Type _[choco](http://chocolatey.org/) install name\_of\_software -y_ <span id='easy-footnote-6' class='easy-footnote-margin-adjust'></span><span class='easy-footnote'><a href='http://remix.zone/2018/04/03/install-software-on-command-line/#easy-footnote-bottom-6' title='<a href=&quot;http://chocolatey.org/&quot;>Chocolatey</a> is a command-line tool for installing software on Windows. Kind of like apt or yum on Linux'><sup>6</sup></a></span>
  * Hit enter

Okay, so you&#8217;ll have to install chocolatey to start with, but after that no windows popping up, no clicking required. A lot of the software we use in Remix is in the Chocolatey database, so installing Virtualbox, Python, Git, Docker, and other stuff is just a few keystrokes away:

<pre>choco install virtualbox python git docker -y</pre>

Want to update all your software at once? Just run _choco upgrade all_. Want to do the same on a remote machine? No need to bother with all the colorful graphical overhead that guzzles bandwidth. Just pure, plain text all the way, baby.

I&#8217;ll be talking more about the command line and why it&#8217;s the best in future posts. If you&#8217;re a command-line warrior yourself, drop a note in the comments with any helpful tips!