---
title: "Writing Shakespeare with an RNN"
tags: [shakespeare, machine learning, rnn, python, tensorflow]
splash_img_source: /assets/img/shakespeare.jpg
layout: post
---

I've just been noodling around with some [RNN (recurrent neural network) tutorials](https://www.youtube.com/watch?v=tPYj3fFJGjk&t=16844s) for NLP to create scripts for plays or TV shows, both for my own interest and a project idea I have in mind. After 100 epochs or so, I can feed it the text of *Romeo and Juliet* and it's returning *something* that sounds Shakespearean. I mean, it's gibberish, but at least it's *Shakespearean* gibberish:

![](/images/rnn-shakespeare/monkey.jpg)

[Link to Notebook](https://colab.research.google.com/drive/1ysEKrw_LE2jMndo1snrZUh5w87LQsCxk#forceEdit=true&sandboxMode=true) - it's the second section, called **RNN Play Generator**

From the starting phrase `Romeo`:

> Romeo! a very vial than himself, there is my hand
> To be the other for our daysage for a whore! make a shame?
> Death, clock their woes command, and not true parts
> Like free ppaid your treasures young and loving friends,
> And there did stand again of bastards,
> And I am the lurking sea or seest? stand not a duke! come on,
> And bite me die with her to tears,
> Than to dress'd unto the officers all I
> Provided to die philosophy:
> Therefore ept news, and all of you there.
> 
> ESCALUS:
> Why, then it seems 'This mercy with the face thereof course he has betidently
> By lack of stooping,--
> 
> SEBASTIAN:
> Look he's winding up the watch of his wit;
> by a man's wife a fear.
> 
> Third Citizen:
> The price of the earth
> Commit thee with his death of his horse.
> Why they shall wallow easy news!
> 
> GRUMIO:
> Excery, you know; you must not love some seats
> as good condemnster, e are:
> Stay but a little, I will come away; and to itself a maid and blown
> To this shall find
> A curbsh in the mardle: all these
> Wherein my soul is and use it too, and he shall stay?
> 
> First Murderer:
> And that his majesty
> To hear the place of state, where now it falls,
> Not what said Servingman:
> Beseech you, sir, be misathere,
> For our costerpoises; ha, had you not crossed me,
> that one saill they make his oath.
> 
> First Servingman:
> But, more of that I have done.
> 
> POLIXENES:
> Pray, Master Bonagseent, and prt the days;
> Rome of the while!
> 
> PETRUCHIO:
> I say so; he hath the windows of mine humour,
> Than man Apon of Hereford that at all,
> I have sent for to an interest,
> And where thou art out to each require of his clothes; and
> envilake you, that you have worn this 

I'm going to try some Star Trek next...

#### Attributions

Thanks to [Wikicommons](https://commons.wikimedia.org/wiki/File:Chimpanzee_seated_at_typewriter.jpg) for the image
