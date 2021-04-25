---
title: Open Source Explained with 1980's Cartoons
layout: post
splash_img_source: /assets/img/open_source/thundercats.png
sticky: true
---

Note: This turned into [a post on Hackernoon](https://hackernoon.com/open-source-explained-by-1980s-cartoons-fym3uz6). I suggest you read that instead of my half-formed thoughts below!

## Introduction

So, I've got an idea in my head (well, where else would it be?) about comparing open source to magic. That still needs a while to brew in my wizard's cauldron, so stay tuned or set a [remembrall](https://harrypotter.fandom.com/wiki/Remembrall) to come back and check some time in the future.

But wait, don't go yet! One of the common ideas in open source is "release early, release often", so I'm putting up my thoughts now, in advance of weaving them into a more magical narrative. This post may have bugs, annoyances, and a few swear words, but rest assured if it breaks you can keep both pieces. Oh, and feel free to cringe at the titles, taken from popular songs - because what's more magical than music?

<figure>
  <img src="{{site.url}}/images/open_source/a-kind-of-magic.jpg" alt="A Kind of Magic"/>
  <figcaption>How could I possibly resist throwing this in?</figcaption>
</figure>

On with the show...

<!-- more -->

### Freedom is the Right of All Sentient Beings

Optimus Prime

Humans love novelty. Some people want to try new foods, see new places, or find new ways to use their [coffee maker](https://www.youtube.com/watch?v=Z9Pa7hxJUfA). I'm all three of those. And a geek who loves cartoons. But I also love finding new ways to use (and ~~sometimes~~ often break) my computer.

<figure>
  <img src="{{site.url}}/images/open_source/broken-pc.jpg" alt="Broken PC"/>
  <figcaption>My PC, after one too many blue screens of death</figcaption>
</figure>

But after using open-source systems for so long, going back to Windows or macOS is jarring. I just don't have the freedom to customize it the way I want. In the words of a great philosopher "Freedom (to futz around with your desktop settings) is the right of all sentient beings":

I want the freedom to completely reconfigure my workspace, with whatever look and feel works best for me. That might mean working in a bare-bones green on black terminal, 
spinning around a cubic desktop with [compiz](https://www.youtube.com/watch?v=4QokOwvPxrE), or something that looks like it [crawled out of the age of 80s cartoons itself](https://www.theregister.co.uk/2012/08/09/cde_goes_opensource/). And I can mix and match bits of them as I see fit.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ed01erRy5ms" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Like every classic cartoon bad guy, Windows wants to limit my freedom to do what I want. Freedom to change the position of my taskbar or swap out my wallpaper is barely freedom at all. For true customization I'd have to yank out the desktop shell and replace it with [a third party alternative](https://en.wikipedia.org/wiki/List_of_alternative_shells_for_Windows). Pretty, but not great for stability.

<figure>
  <img src="{{site.url}}/images/open_source/litestep.jpg" alt="Litestep"/>
  <figcaption><a href="https://github.com/lsdev/LiteStep">Litestep Windows shell. I used this a lot back in the day</a></figcaption>
</figure>

The Mac is similar. I can choose from two themes, and I'm limited to the standard WIMP (Windows, Icons, Mouse, Pointer) interface. No tiling with [i3m](https://i3wm.org/) or [PaperWM](https://github.com/paperwm/PaperWM) for me.

<iframe src='https://gfycat.com/ifr/PresentBareIcterinewarbler' frameborder='0' scrolling='no' allowfullscreen width='640' height='444'></iframe><p> <a href="https://gfycat.com/presentbareicterinewarbler">via Gfycat</a></p>

My current setup is a stripped-down GNOME desktop with PaperWM that I mostly use for running a terminal emulator and web browser. It's fully keyboard-driven, uses arcane key bindings (thank you Vim!), and is almost perfectly tailored for my needs. Going back to one of the standard operating systems makes me feel like typing with boxing gloves on.

<figure>
  <img src="{{site.url}}/images/open_source/2020_gnome-desktop.png" alt="My Gnome desktop"/>
  <figcaption>My current desktop, running Gnome and <a href="https://github.com/paperwm/PaperWM">PaperWM</a></figcaption>
</figure>

### I yam what I yam

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/en5NzwEU5Gg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Okay, so Popeye wasn't technically an 80's cartoon, but that's when I watched it. And it took me until not long ago to realize that the spinach stuff? [Total fiction](https://www.brainpickings.org/2013/07/02/spinach-popeye-error-half-life-of-facts/). I know, I feel as betrayed as you do.

Like Popeye, open source is what it is. It does what it claims to do (or fails trying if it's buggy). Don't believe what it says on the tin? Take a look at the source code on GitHub or work with a company like [FossID](https://fossid.com/) to search vulnerabilities for you.

Closed source can be very different. Just recently we've seen [Tiktok scraping clipboard data without consent](https://www.theverge.com/2020/6/26/21304228/tiktok-security-ios-clipboard-access-ios14-beta-feature) and [Microsoft sending telemetry in breach of privacy rules](https://www.forbes.com/sites/daveywinder/2019/08/28/microsoft-confirms-windows-10-privacy-investigation-with-a-4-billion-sting/). If such prominent products were open-source, these issues would be sniffed out quickly, or less likely to arise in the first place since you're doing everything in the open. 

### The Best Things in Life are Free
### Richie Rich?

Back when I was a struggling student surviving on ramen and mince and cheese pies, I sure as Hell didn't have any spare funds to throw at the latest Windows upgrade or (Heaven forbid) buying a Mac. I was stuck with what I had, or what I could download.

<figure>
  <img src="{{site.url}}/images/open_source/pie.jpg" alt="pie"/>
  <figcaption>What I ate every day at university in New Zealand. Except mine didn't look half as tasty. <a href="https://www.flickr.com/photos/itravelnz/7667051700">Thanks to itravelnz for the pic</a></figcaption>
</figure>

Then I saw a computer magazine in a local shop. It was one of those ones with CD-ROMs stuck to the front, offering the latest and greatest demos, shareware, and full versions of out-of-date software. And in this case, something called [Knoppix Linux](https://www.knopper.net/knoppix/index-en.html). For about 5 quid, I could not only get a new operating system, but one that came preinstalled with an office suite, programming IDE, graphics editor, and more. And I could share it with my friends for free!

<figure>
  <img src="{{site.url}}/images/open_source/gnome1.png" alt="Gnome 1.0"/>
  <figcaption>Gnome 1.0: This was my first Linux desktop, back in the day</figcaption>
</figure>

For a penniless student like myself, this was the *only* way I could've got my grubby little hands on all of these shiny goodies. Pirating really wasn't an option on a 56k baud modem, and this was before torrenting was really a thing.

<figure>
  <img src="{{site.url}}/images/open_source/modem.jpg" alt="US Robotics Modem"/>
  <figcaption>The "good" old days. Thanks to <a href="https://www.flickr.com/photos/monado/4406606802">monado</a> for the pic</figcaption>
</figure>

### I Have the Power

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4zIoElk3r2c?start=5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Open source software has the potential to continuously improve, and be driven by the needs of the users themselves. Sure, you could say that Windows 10 is an improvement on Vista, but there are definite downsides like ads clogging up your Start menu and your telemetry being reported back to Microsoft.

<figure>
  <img src="{{site.url}}/images/open_source/start_menu_ads.png" alt="Windows 10 start menu"/>
  <figcaption>Where do you want to go today? Uh, not there...</figcaption>
</figure>

You don't like the direction in which your desktop environment is going? If enough users feel the same way, you can get together, fork it, and take it in a new direction. The [MATE Desktop](https://mate-desktop.org/) crew did just this with the [Gnome](http://www.gnome.org) codebase - they didn't like the vision for Gnome 3.0, so took the 2.0 code and built their own version out of that. Just imagine trying to do the same thing with Windows or MacOS (admittedly, Gnome and MATE are desktop environments rather than full-blown operating systems like Windows, but that's the beauty of it. Because it's an open ecosystem, things are more modular. One system can have multiple desktop environments built in many different ways.)

<figure>
  <img src="{{site.url}}/images/open_source/mate.jpg" alt="MATE desktop"/>
  <figcaption>MATE Desktop</figcaption>
</figure>

### Let Our Powers Combine

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kbW5sxyu9bU?start=10" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In the words of [Margaret Mead](https://www.goodreads.com/quotes/1071-never-doubt-that-a-small-group-of-thoughtful-committed-citizens):

> “Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.”

See? And you thought you'd only be reading about naff 80s cartoons, not reading quotes from one of [America's best cultural anthropologist](https://en.wikipedia.org/wiki/Margaret_Mead)

Margaret meant this in more of an activism context, but the same holds true for open-source hardware and software. Many of the world's biggest software projects are open-source, and contributed to by millions of developers. Billions of people around the world use them every day, often without ever knowing:

* [Web server OS]
* [DNS]
* [Browser]
* [Android]

### Live Long and Prosper

Again, not *exactly* an 80s cartoon, but I saw *Star Trek: The Animated Series* in the 80s and its message of peace and understanding inspires me to this day (well, if I'm being honest, Star Trek's message as a whole, not just TAS)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fQ66DvdojR8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The thing about a lot of closed-source software is that it *doesn't* live long, and this can lead to a downfall in your prosperity. Just think about the most popular word processing software in the world? What happens if the owner goes out of business?

  <img src="{{site.url}}/images/open_source/wordstar.jpg" alt="Wordstar"/>

I'm not talking about Microsoft Word. I'm talking about [WordStar](https://en.wikipedia.org/wiki/WordStar), the dominant word processor of the 1980s. Thousands of users, including [George R. R. Martin](https://slate.com/technology/2014/05/george-r-r-martin-writes-on-dos-based-wordstar-4-0-software-from-the-1980s.html) (from Game of Thrones fame) were left in the cold when it was abandoned. They'd invested time and effort into learning this system, and now what? Over time, operating systems deprecate old functions and old software "rots". Now the only way to run that once powerful program is to [install Linux and DOS emulator on top of that](https://en.wikipedia.org/wiki/WordStar#Running_WordStar_in_modern_platforms). Otherwise all of those .ws files you spent hours, days, and years on, are if not completely inaccessible, a total [PITA](https://www.netlingo.com/word/pita.php) to work with. It's kind of ironic that now the only way to work with closed software like WordStar is via an open source system.

Now, how would that look in the modern day? Microsoft is way bigger than just Word, so let's look at a smaller company that makes productivity tools: What would happen if Adobe went under?

* You'd be stuck with your existing versions of Adobe software while the rest of the world marched on. After a while, operating systems will deprecate enough legacy code that old apps won't run any more. I haven't tried running Photoshop 1.0 on Windows 10, but I can't imagine it would be easy
* Even sooner than that, Adobe's license activation servers would go down. Since Adobe Creative Suite is Software as a Service (SaaS), it relies on these servers to verify you're a paying customer. No server means no verification means you'll either have features restricted or you'll be locked out completely
* What happens then to all your PSD and AI files? You might be able to do *something* with them in [Inkscape](https://inkscape.org/) or [GIMP](http://www.gimp.org), but there's not 100% compatibility
* If you want to keep moving forwards, you'll need to learn a new piece of software. Goodbye muscle memory and interface familiarity!

<figure>
  <img src="{{site.url}}/images/open_source/adobe_nope.png" alt="Adobe dialog box"/>
  <figcaption>Illustrator? I barely knew 'er!</figcaption>
</figure>

What happens if an open-source project goes under? If enough people care about it they can fork the code and keep it going themselves, just like MATE did.

### The Magic School Bus

<figure>
  <img src="{{site.url}}/images/open_source/newton.jpg" alt="Isaac Newton"/>
  <figcaption>Fun fact: Isaac was also known for <a href="https://www.forbes.com/sites/rosspomeroy/2013/11/04/why-was-isaac-newton-such-a-jerk/">being a dick</a> and <a href="https://psmag.com/social-justice/newtons-needle-scientific-self-experimentation-86583">sticking knitting needles into his own head</a></figcaption>
</figure>

This is the quote that always springs to mind when I think of what open source has done for me personally. I got started with coding back in the bad old days of MS-DOS 5.0 and QBasic. I have fond memories of editing the physics in the [Gorillas game](https://classicreload.com/qbasic-gorillas.html) to make the bananas fly where I wanted, and trying to build a Zork-like text adventure without initially realizing the sheer amount of object interactions I'd have to deal with.

<iframe src='https://gfycat.com/ifr/ScratchyDeliriousKakapo' frameborder='0' scrolling='no' allowfullscreen width='640' height='394'></iframe><p> Other kids got Donkey Kong. I had this monstrosity instead. <a href="https://gfycat.com/scratchydeliriouskakapo-old-dos-stuff-gorillas-gaming-dosbox">via Gfycat</a></p><figure>

Gorillas came with Qbasic, and the code was available to view and edit. But really it (and BASIC itself) are just toys. I really got into programming with Python, and the open community has been so educational and helpful in building what I want, whether it's a terminal-based WeChat client, a tool to translate and summarize long PowerPoints from a professor, or a website to help hospitals get protective equipment more easily.

Because I was building on open code bases (or in some cases, just open APIs and SDKs), I could see the magic for myself. The more popular programming languages and frameworks have extensive documentation and YouTube tutorials created by the community that helped me get running quickly, and by sharing the code myself, others helped me test it, fix bugs, and make it even better.
