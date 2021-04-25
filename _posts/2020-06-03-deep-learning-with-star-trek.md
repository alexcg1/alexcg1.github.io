---
title: "Deep Learning with Star Trek: Part 1"
layout: post
tags: [star trek, nlp, deep learning, script buddy, machine learning, sci-fi]
splash_img_source: /assets/img/mccoy.jpg
splash_img_caption: https://www.flickr.com/photos/jdhancock/11793065705
---

I've been thinking lately, that sooner or later it'll be possible to create TV episodes with deep learning. Just look at the tech we already have:

* [GPT-3](https://towardsdatascience.com/gpt-3-the-new-mighty-language-model-from-openai-a74ff35346fc?gi=ffae41ed01d5) - text generation that is getting on for human-level quality
* [Deepfake](https://en.wikipedia.org/wiki/Deepfake) - mapping one actor's face onto footage from a different actor
* [Real Time Voice Cloning](https://github.com/CorentinJ/Real-Time-Voice-Cloning#pretrained-models) - does what it says on the tin

Today, many of the above technologies are still in their infancy, and I'm not confident we could re-create an episode of say, *Star Trek*, that would fool anybody. But we can create a janky knock-off just for the hell of it. Think of it as like [B-4](https://memory-alpha.fandom.com/wiki/B-4), the less bright younger brother of Lieutenant Commander Data.

<iframe src="https://giphy.com/embed/QQKhpfeRQqz6M" width="480" height="368" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-trek-data-QQKhpfeRQqz6M">via GIPHY</a></p>

Now, if we're creating a TV show, the first thing we need is a script. I used [script buddy v2](https://github.com/cdpierse/script_buddy_v2), a film script text generation tool. It was a pain in the ass to get it up and running (I'm looking at you `pip install torch` and your not being able to find a version on Pypi that *clearly exists*) but I got there in the end. It's even got a pretty graphical interface:

![](https://raw.githubusercontent.com/cdpierse/script_buddy_v2/master/script_buddy/images/app.gif)

I haven't yet fine-tuned it for Star Trek (that'll be for a future post), but here's what I got when I used "Space: the final frontier. These are the voyages of the starship Enterprise. Its five-year mission: to explore strange new worlds. To seek out new life and new civilizations. To boldly go where no man has gone before!" as the starting point:

### Star Trek: The Ruth of Kahn (Yeah, that's the title I'm giving it)

> Space: the final frontier. These are the voyages of the starship Enterprise. Its five-year mission: to explore strange new worlds. To seek out new life and new civilizations. To boldly go where no man has gone before!
> 
> (MORE)
> 
> EXT. SPACE (MATRIX) - DAY
> 
> The Enterprise is being launched out of the planet's atmosphere in a massive solar flare. It reaches the vast emptiness of space. It's mission is complete: to boldly go where no man has gone before.
> 
> SIGNS. THE ENTIRE PLANETARY IS NOW A GLASS.
> 
> SIGNS. The ship RISES INTO SPACE!
> 
> A huge cloud of dust streaks by them, blocking their view. As the ship rises in space, their view is blocked by clouds of dust. The entire planet is now a shiny, glassy mirror of the stars.
> 
> And now they begin to make their way to the surface. The clouds now obscure the view of the ship.
> 
> JUMP CUT TO:
> 
> THE DUST has cleared. A small, primitive human city is visible. The two of them are in the center. On the roof of the building.
> 
> JUMP CUT TO:
> 
> TIGHT SHOT of the rooftop, as they approach a very long-legged woman in her late 20's. The two of them walk up to her, and talk for a moment.
> 
> TIGHT SHOT. The woman turns her head and smiles, and a smile spreads across her face.
> 
> JUMP CUT TO:
> 
> INT. DANCE STUDIO - NIGHT
> 
> CLOSE SHOT on RUTH, a young girl from the audience, a perfect version of RUTH. She's singing in a low-rent country style. She makes her way up the stage towards the audience.
> 
> And as the last bars die down, she starts to sing again. And again. And again. And again. And then we
> FLASHBACK ON them as she stops. and looks down at her hands, as if looking at a mirror.
> 
> FLASHBACK ON RUTH as she is getting up and talking to the crowd. And finally looking at her hands. And the next bars, and
> the next, and the next and the next.
> 
> TIGHT SHOT. RUTH is getting more and more excited about the music and the act. She gets up and starts to sing again, which is then interrupted by:
> 
> 
> THE ENTIRE PAST - DAY
> 
> EXT.  JUPITER TWO - DAY
> 
> We see the Enterprise through the sun. RUTH is walking along the beach towards the ship. We see the ship and see her smile. She looks right at the crowd. There's a very large number of people there, including a very young HONEY.
> 
> And now they're on the ship. She stops, to get closer to her ship. There's a lot of activity up front, as they take their seats and the audience get's the chance to
> lick their lips and dance. The music is still high.
> 
> And now we FLASHBACK, as she notices a man sitting alone on one of the decks. She walks over and sits down beside him. He looks very bored.
> 
> And now they start to dance. She's a very good dancer. RUTH is smiling a lot, and she does a lot of hip moves. Her audience is very supportive, giving her credit for having a good time. This is a big moment for the audience.
> 
> Finally she hits the end of her swing.
> 
> FLASHBACK:
> 
> RUTH is dancing very close to the door where the audience was waiting. As she pulls up her seat belt, she sees: 
> 
> 
> HONEY
> 
> 
> She sees that she's going to be there for the whole time, and there's a very large number of people waiting to see her. 
> 
> 
> HONEY
> Hi. I'm looking forward to being here all day.
> 
> FLASHBACK:
> 
> The audience is completely silent, they're just watching her dance. There's a lot of noise from the people who have tickets. It's quite a sight.
> 
> FLASHBACK:
> 
> And HONEY looks up at the entrance. It's filled with people from the audience, many of whom are dressed very different. And they start to cheer for her.
> 
> HONEY
> Oh my God. Thanks.
> 
> (MORE)
> 
> EXT.  JUPITER TWO - DAY
> 
> She goes to the door.
> 
> JUPITER TWO - DAY
> 
> A beautiful view of the ocean.
> 
> FLASHBACK:
> 
> CUT TO:
> 
> A very large view of the ocean.
> 
> FL

### Thoughts

I mean it's not great, and it's not Star Trek, yet but it's not completely bad:

#### The Good

<iframe src="https://giphy.com/embed/NJZMSqRY3rG9i" width="480" height="363" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/captain-slow-NJZMSqRY3rG9i">via GIPHY</a></p>
 
* It clearly picked up on the space angle with its mentions of Jupiter
* I dig the cinematic opening with the solar flare and planet turning to glass

#### The Ridiculous

<iframe src="https://giphy.com/embed/tJZIYxsfFPs4" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/janet-napolitano-tJZIYxsfFPs4">via GIPHY</a></p>

* The Enterprise completed Starfleet's mission pretty damn early, right in the first few lines it's already boldly gone and done it
* A dance studio? I guess it could be in a holodeck??
* It's very fourth wall breaking, really using the audience as characters
* And all this focus on Ruth! She's clearly the heroine, using her low-rent country-style singing to explore the universe
