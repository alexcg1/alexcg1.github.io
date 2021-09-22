---
title: "Image Encoders Part Deux: Let's ramp things up"
splash_img_source: /assets/img/image-encoders-2/cover.jpg
tags: [python, neural search, Jina, deep learning, clip, images]
layout: post
---

Let's get back to [how well those image encoders cope with memes](http://blog.alexcg.net/2021/09/18/comparing-bit-and-clip-image-encoders.html). We previously saw that when we were comparing very similar (in terms of pixel value) memes, BigTransfer came out on top. But what if we're searching variants, like Buff Doge vs Cheems?

![](https://imgflip.com/s/meme/Buff-Doge-vs-Cheems.png)

As far as I know this meme isn't in the [dataset we're using](https://www.kaggle.com/abhishtagatya/imgflipscraped-memes-caption-dataset). That means it can't just do a straight up pixel-match like before. So what could happen? My guess here is that:

- [CLIP](https://hub.jina.ai/executor/0hnlmu3q) will return doge memes, since it does feature detection that should pick up those chonky doggo features.
- [BigTransfer](https://hub.jina.ai/executor/04yakw38) will return stuff with similar pixel values. And since there's nothing super close, that means it'll return stuff with a white background, which is what most of the Buff Doge image is.

## Okay, fight!

- We're using the same dataset and index size as last time to ensure it's a fair fight.
- This time for the sake of brevity and so we don't lose it over how cute these puppers are, we'll just check the top three results.

### CLIP

<table>

<colgroup>
  <col span="1" style="width: 25%">
  <col span="1" style="width: 75%">
</colgroup>

<tbody>
  <tr>
    <th width>
      Query image
    </th>
    <th>
      Results
    </th>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders/inputs/doge.jpg" ></td>
    <td><img src="/assets/img/image-encoders-2/clip/doge.png"></td>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders-2/input/buff-doge.jpg" ></td>
    <td><img src="/assets/img/image-encoders-2/clip/buff-doge.png" ></td>
  </tr>
</tbody>
</table>

  
### BigTransfer

<table>

<colgroup>
  <col span="1" style="width: 25%">
  <col span="1" style="width: 75%">
</colgroup>

<tbody>
  <tr>
    <th width>
      Query image
    </th>
    <th>
      Top 3 results
    </th>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders/inputs/doge.jpg" ></td>
    <td><img src="/assets/img/image-encoders-2/bit/doge.png"></td>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders-2/input/buff-doge.jpg" ></td>
    <td><img src="/assets/img/image-encoders-2/bit/buff-doge.png" ></td>
  </tr>
</tbody>
  
  
</table>

Oddly, BigTransfer surfaced this as the fifth result, so maaaybe it's recognizing something like the dogs? Or maybe just a fluke.

![](/assets/img/image-encoders-2/bit/result-5.jpg)

## So, was I right?

Nope, off by a long shot. Perhaps there's something weird going on with CLIP's feature detection. Either way, that's two for two for BigTransfer when it comes to searching memes. Though it might've just got lucky hitting that fifth image.

In short, both encoders suck for this kind of thing, at least out of the box.

## What's next?

I'm exhausted with memes for now. But if anyone has any ideas for what to try next (and preferably wants to take part!) ping me on Twitter at [@alexcg](https://twitter.com/alexcg).
