---
id: 129
title: On Learning Machine Learning
date: 2018-04-24T16:06:06+00:00
author: Alex C-G
guid: http://remix.zone/?p=129
permalink: /2018/04/24/on-learning-machine-learning/
categories:
  - Blog
tags:
  - jupyter
  - machine learning
  - scikit-learn
---
Machine learning has a lot of buzz these days, and with good reason. But getting into it isn&#8217;t a simple task. Here&#8217;s what I&#8217;ve discovered so far:

## Pure or Applied?

Applied machine learning is about using it to actually do stuff in the real world. Pure is more about learning the theory behind it. While it&#8217;s good to have at least _some_ grounding in algebra and matrices before jumping on the latest modules, there&#8217;s nothing quite like getting your hands dirty.

I&#8217;m already proficient in Python (the de facto language for a lot of machine learning projects) but even then, getting my hands dirty took some work before I got a handle on what was going on. Watching some tutorials on [Numpy (a module for dealing with numerical matrices)](https://www.youtube.com/embed/lKcwuPnSHIQ?start=6259&autoplay=1) and [Pandas (a module for tabular data representation](https://www.youtube.com/embed/6ohWS7J1hVA?start=1024&autoplay=1) helped a fair bit.

## Tensorflow? Keras? Scikit-Learn?

I&#8217;ve dabbled in all three, but sticking to [Scikit-learn](http://scikit-learn.org/stable/tutorial/index.html) for now. It seems the most straightforward by far, since you&#8217;re working with pre-existing models, and it comes with several datasets by default, all of which are already processed for easy use by the module.

Tensorflow is a lot more low-level, and while Keras is high-level it&#8217;s more about building your own models rather than playing with existing ones.

Once I get a better grip on models I plan to look at the other options.

## Python 2 or 3?

Different tutorials use different versions of Python, and these different versions really are different. Even dividing numbers will return different results depending on your version! Not to mention needing parentheses with the print() function in Python 3 (which I&#8217;m constantly forgetting about &#8211; old habits die hard!)

## Jupyter Notebook

Aaah, our old friend [Jupyter](https://jupyter.org/). I&#8217;ve been using the notebook more and more, using markdown cells to paraphrase tutorials in my own words as I go through them. Plus, embedded graphing via matplotlib helps a great deal. Just make sure you install the kernel for the right Python version!