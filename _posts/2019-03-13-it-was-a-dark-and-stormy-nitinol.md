---
title: Bent Out of Shape - All the Ways (so far) I've Screwed Up with Nitinol
---
I recently got my hands on some nitinol wire for a project I'm working on. Here are my misadventures in trying to work with the damn stuff.

## The Project: Biomimetic Butterfly Brooch

I like butterflies. I like looking pretty. I like making stuff. So I've decided to make a butterfly brooch that's hyper-realistic and fools the eye into thinking it's actually alive.

![](images/butterfly/real_butterfly.png)

To do this, I need the wings to flap and the antennae to move. And since it's supposed to more or less life-size, I don't have a lot of room for battery power or motors. I'd seen nitinol before and thought it'd be a fun and interesting solution to the constraints. In short, nitinol is a kind of shape memory alloy. It "remembers" a shape, so when you deform it then add heat or current, it'll bounce back to the shape it has in its "memory."

So...*is* it a viable solution? The jury is still out on that one, at least for the next few days. Let's wait and see!

## Getting the Nitinol

I found a supplier on Taobao, the store that has cheap everything. If you're outside China you may want to check out eBay or AliExpress. There were two main types on nitinol on sale:

## Pre-shaped Nitinol

Often for use in magic tricks. For example, "guessing" your mark's card and then making this seemingly innocuous piece of metal spring into the shape of the seven of diamonds.

![](images/butterfly/nitinol_shaped.jpg)

## Raw Nitinol

In the form of wire. Since I have a specific shape I want to make, I bought a meter of 0.3mm nitinol wire for about 7 RMB (about 1 buck USD at the time of writing)

![](images/butterfly/nitinol_raw.jpg)

## First Reactions

![](images/butterfly/nitinol_package.jpg)

Wow. This stuff is springy. And totally unbendable. And it's so damn thin that when I put it down, I can't find it to pick it up again. Also, it's not magnetic. That's a big plus, since I may use strong magnets as a fastener for the brooch.

## Forming the Shape

Before forming the shape, nitinol is still in its superelastic (springy as hell) form. To give it shape memory, we need to add heat. I didn't really research this bit enough, but just went ahead and started experimenting by clamping a small piece of nitinol wire in some helping hands, and making it all hot and stuff.

Things I tried:

![](images/butterfly/nitinol_form_1.jpg)

* Soldering iron: Not hot enough
* Hot air gun: Not hot enough
* 4 x AA batteries: I'd read that current would do the job, and someone had used 4 x AA' to do it. I didn't read carefully enough - they'd only used the AA's to bring it back to it's remembered shape, not form that shape in memory

At this point I did a bit more research (i.e. did more than impatient skimming) and found out I need a temperature of 500 to 550 degrees Celsius. I figured it'd be better to go too high rather than too low. I'd already seen what happened with too low temperatures (zip, nada, nothing), so figured I should at least try extreme heat if only to see what happens.

So I pulled out the trusty blowtorch and proceeded to NOT set myself aflame. Small victories and all that.

![](images/butterfly/nitinol_blowtorch_1.jpg)

This time I actually made the damn thing bend. Bending a bit of wire doesn't seem like a big deal, but I'd already invested half a day in this so yay me I guess. I took it out of the clamp and quenched it in a cup of cold water.

!{}(images/butterfly/nitinol_clamp.jpg)

So, the shape was set in memory...or was it?

## Deforming the Shape

Now that the wire was bent, it was time to unbend it to test if it could bounce back. I made a few test pieces - just bits of wire with a kink to test the concept:

* Half of them: I bent into a different shape no problem
* Half of them: SNAP! Broken in two

## Reforming the Shape

I'd read that just putting the wire in hot water should bring it back to it's remembered shape. I schlepped up to the hot water machine, heart aflutter. Could all this frustration pay off at last? Had I actually *not* wasted a whole day obsessing over a kink in some wire?

I put the bent up wire in the cold water and watched intently, waiting for it to reform. Seconds ticked by. And...nothing. It just sat there, like a piece of wire that just sits there. Ugh.

## How'd I Mess Up?

It was likely because the torch was too hot. 1,000+ degrees, while nitinol needs about 500-550. Even covering the oxygen holes to get a cooler flame on the torch didn't really work, mostly because we used a rubber band and it was hardly uniform.

## Back on the Wagon

What's next? I'll head back to the hackerspace and try:

* Plan A: Running enough current through the nitinol to heat it enough to set a shape. I'll use a PSU to start low and ramp up.
* Plan B: I've ordered a different head for the torch, one with a knob that allows me to control the amount of oxygen, so I can get a nice yellow flame instead of a fierce blue one.
* Plan C: Screw nitinol. I've ordered some tiny DC motors, and will 3D print some kind of [ornithopter mechanism](https://www.thingiverse.com/thing:2410651) to make the wings on the butterfly flap.
* Plan D: A friend mentioned using a kiln at a ceramics factory for heat setting a shape in nitinol. This may take time and money to set up though, and I'm not sure it's worth it at the prototype stage.
