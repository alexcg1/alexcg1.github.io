---
title: YaaS Queen! YAML as a Service
splash_img_source: /assets/img/streamlit-jina.gif
tags: [jina ai, lqbtq, pride, yaml, json]
layout: post
---

It's Pride Month. That means rainbow flags, parades, and insecure people melting down at Target. But more importantly, I get an excuse to make terrible campy puns about X as a Service!

Seeing as this post covers both stuff popular in the LGBTQ community, and deeper technical stuff, some explanations may be in order for people who don't fit in the center of this Venn Diagram:

![](images/yaas-queen/venn.png)

I'm being lazy so I'll ask GPT to give definitions:

- [RuPaul's Drag Race](https://en.wikipedia.org/wiki/RuPaul%27s_Drag_Race) - A reality competition TV show where drag queens, under the mentorship of RuPaul, compete in a variety of challenges showcasing their charisma, uniqueness, nerve, and talent, with the aim of being crowned America's next drag superstar.
- [X as a service](https://en.wikipedia.org/wiki/Software_as_a_service) - a cloud-based model where users access software over the internet, eliminating the need for installation or maintenance on individual devices.
- The cloud - someone else's computer.
- "Yas Queen" - An exclamation of enthusiastic support, approval, or celebration, often used in drag culture and online communities to uplift and cheer on someone's success, style, or attitude.
- [YAML](https://en.wikipedia.org/wiki/YAML) - A human-friendly language for coding data, commonly used in configuration files. Has issues with [Norway](https://www.bram.us/2022/01/11/yaml-the-norway-problem/)

Which brings us to **YaaS Queen** - it's a simple cloud-based service that lets you turn anything into YAML (whether you actually know the details of the thing or not).

Note: This is something of a follow up to a post on our company blog, [What's Next After Prompt Engineering? Prompt as a Service](). That goes into more detail on prompt engineering and features more examples.

## What does it do, exactly?

It takes a request, and converts it into YAML.

So I could give it a list:

```text
A list containing the items: Nails, Hair, Hips, Heels
```

And it would convert that to a YAML file that I can easily use with other software:

```yaml
- Nails
- Hair
- Hips
- Heels
```

But it can go further than that. We can ask it something *without* providing all the data, and it *should* do its thing:

```text
Key-value pairs, where each key is a season of RuPaul's Drag Race, and the corresponding value is the winner.
```

And it'll output:

```yaml
season_1: BeBe Zahara Benet
season_2: Tyra Sanchez
season_3: Raja
season_4: Sharon Needles
season_5: Jinkx Monsoon
season_6: Bianca Del Rio
season_7: Violet Chachki
season_8: Bob the Drag Queen
season_9: Sasha Velour
season_10: Aquaria
season_11: Yvie Oddly
```

Of course, you can use this for boring stuff like converting file formats, but why on Earth would you ever go beyond Drag Race?

## Building your own YaaS Queen

Disclaimer: I work for Jina AI, the company that provides the infrastructure for this service.

First up, you'll want to sign up at PromptPerfect - it's a tool for prompt engineers, the folks who whisper at AIs like GPT and make them say things. You'll want the "Service" tab to create Prompt as a Service.

![](images/yaas-queen/create-prompt.png)

Click "New Prompt Service", then select "GPT-4" as your model (this is the most advanced language model on the market right now), and use the following as your prompt:

```text
Create a valid YAML structure based on the following: [data]. Return only YAML, nothing else.
```

`[data]` is a placeholder where we can add our own data when we access our YaaS. I specifically instruct it "Return only YAML, nothing else", because otherwise it'll be all: "Here's your YAML, enjoy! Blah blah blah" which doesn't play ball when we try to feed the output into other software. We want the YAML, and just the YAML.

After that you'll want to get your service running. Click the little switch to make that happen:

![](images/yaas-queen/not-running.png)

And then we can set some options or take her for a spin:

![](images/yaas-queen/not-running.png)

Let's choose to make YaaS public for now. This'll make it easier to test from your terminal.

![](images/yaas-queen/public.png)

## Let's Go, cURLfriend

cURL is a tool for accessing online data - kind of like a web browser, but without the fancy visuals. We'll use it to access our YaaS endpoint. Let's use our example above where we get all the Drag Race Winners.

Installing cURL is waaay beyond the scope of this post. Just follow [the instructions](https://everything.curl.dev/get). And don't fuck it up.

<div class="tenor-gif-embed" data-postid="7618177" data-share-method="host" data-aspect-ratio="1.77305" data-width="100%"><a href="https://tenor.com/view/ru-paul-dont-fuck-it-up-gif-7618177">Ru Paul Dont GIF</a>from <a href="https://tenor.com/search/ru+paul-gifs">Ru Paul GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

Once you've installed it, you can open your [terminal](https://www.freecodecamp.org/news/command-line-for-beginners/) and access YaaS with the command:

```bash
curl "https://api.promptperfect.jina.ai/Q7xQrmCXUEXJQcdg2ey4" \
  -H "content-type: application/json" \
  --data '{"parameters": {"data":" Key-value pairs, where each key is a season of RuPauls Drag Race, and the corresponding value is the winner."}}'
```

And you should get something like this back:

```json
{"code":200,"status":20000,"data":"season_1: BeBe Zahara Benet\nseason_2: Tyra Sanchez\nseason_3: Raja\nseason_4: Sharon Needles\nseason_5: Jinkx Monsoon\nseason_6: Bianca Del Rio\nseason_7: Violet Chachki\nseason_8: Bob the Drag Queen\nseason_9: Sasha Velour\nseason_10: Aquaria\n"}%
```

As you can see, it's bit different to what we got before. Mostly because our YAML is now wrapped into [JSON](https://en.wikipedia.org/wiki/JSON).

## Okay, but what is this actually good for?

A dumb post to celebrate Pride Month and an excuse to make bad puns? Do I need anything else?

There are actual uses though: YAML is a widely used format for programmers to store data, like configuration, in a human-readable way but with a strict structure. There are many formats that have similar purposes, like JSON, TOML, and (shudder) XML. Having a universal converter like this helps migrate settings more easily between tools and services (I say *more easily* - I'm not claiming this is a one-and-done process).

## JaaS Königin!

For my German friends (and for any other language that prounces `/j/` like an English `/y/`), I propose the idea of *JaaS Königin!* - the JSON equivalent of YaaS Queen. Please have it ready on my desk by Monday.

## That's a wrap!

Condragulations - you've created your own YaaS Queen. Now you're ready to make Anything as a Service. Now you can shake that AaaS in new and interesting ways, and deal with all kinds of input and output! And PP (short for PromptPerfect, of course) is here to help every step of the way.

Now it's time for me to sashay away, and for you to start your engines on your very own Prompts as a Service!
