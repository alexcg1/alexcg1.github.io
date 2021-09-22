---
title: "Image Encoders Part Trois: In which CLIP discovers the transitive property"
splash_img_source: /assets/img/image-encoders-3/cover.jpg
tags: [python, neural search, Jina, deep learning, clip, images]
layout: post
---

Looking back on my [last post about image encoders](/2021/09/21/image-encoders-continued.html), I realize I should've based my judgement on more than one test. So I'm going to throw a bunch of images at CLIP that are not memes, but that include subjects that *are* memes. For example, a random non-meme picture of Kermit the Frog, since Kermit is in many memes.

Just for context, this is yet another in the series of posts where I talk about building a [meme search engine with Jina], an open-source framework that let's you build a search engine for any kind of data. Spoiler alert: I work for Jina, and I'm sure my boss will be overjoyed I'm using state-of-the-art technology for something as time-wasting as searching memes. Still, I'm not the kind of person [who hand-codes the whole damn thing](https://github.com/deepfates/memery), so there's that. (Shout-out to [deepfates](https://twitter.com/deepfates)!)

So here we go yet again. You'd think I'd be tired of this by now. You'd be right. That's why I'm just testing CLIP now. I tried them on BigTransfer as well but the results were pretty much just random. If you want to see what the results for BigTransfer would look like just print out a bunch of memes, chuck them down down the stairs and take a look. It was like that for pretty much every meme here except "Sparta" ([which it surprisingly does quite well on relative to CLIP in all tests](/2021/09/18/comparing-bit-and-clip-image-encoders.html)).

Towards the end of this, either I started going mad or CLIP did. Scroll on to "The Bloody Unexpected" for more on that.


## The Good

Solid matches. CLIP detected features and matched them well.

<table>

<colgroup>
  <col span="1" style="width: 15%">
  <col span="1" style="width: 60%">
  <col span="1" style="width: 15%">
</colgroup>

<tbody>
  <tr>
    <th width>
      Query image
    </th>
    <th>
      Top 3 results
    </th>
    <th>
      What I expected
    </th>
  </tr>
  
  <tr>
    <td><img src="/assets/img/image-encoders-3/input/baby_koala.jpg" ></td>
    <td><img src="/assets/img/image-encoders-3/output/baby_koala.png" ></td>
    <td><img src="https://imgflip.com/s/meme/Surprised-Koala.jpg"></td>
  </tr>
  
  <tr>
    <td><img src="/assets/img/image-encoders-3/input/sparta.jpg" ></td>
    <td><img src="/assets/img/image-encoders-3/output/sparta.png" ></td>
    <td><img src="https://imgflip.com/s/meme/Sparta-Leonidas.jpg"></td>
  </tr>
  
  <tr>
    <td><img src="/assets/img/image-encoders-3/input/spongebob.png" ></td>
    <td><img src="/assets/img/image-encoders-3/output/spongebob.png" ></td>
    <td><img src="https://imgflip.com/s/meme/Imagination-Spongebob.jpg"></td>
  </tr>
  </tbody>
  </table>
  
## The Bad

No close matches whatsoever. Totally failed on all fronts. I mean I guess the "red button" thing did *kinda* work in that it returned images of another button. But where it got that top image I have no clue.
 
<table>

<colgroup>
  <col span="1" style="width: 15%">
  <col span="1" style="width: 60%">
  <col span="1" style="width: 15%">
</colgroup>

<tbody>
  <tr>
    <td><img src="/assets/img/image-encoders-3/input/blue_hat.jpg" ></td>
    <td><img src="/assets/img/image-encoders-3/output/blue_hat.png" ></td>
    <td>WTF, I'm sure I saw a meme of a stick figure with a blue bobble hat. I'm losing it ffs</td>
  </tr>
  
  <tr>
    <td><img src="/assets/img/image-encoders-3/input/red_button.jpg" ></td>
    <td><img src="/assets/img/image-encoders-3/output/red_button.png" ></td>
    <td><img src="https://imgflip.com/s/meme/Two-Buttons.jpg"></td>
  </tr>
  
  <tr>
    <td><img src="/assets/img/image-encoders-3/input/seagull.jpg" ></td>
    <td><img src="/assets/img/image-encoders-3/output/seagull.png" ></td>
    <td><img src="https://imgflip.com/s/meme/Inhaling-Seagull.jpg"></td>
  </tr>
  
</tbody>
</table>

## The Bloody Unexpected

So assuming the transitive property, "Captain Picard" == "Doctor Evil" == "Kermit the Frog" == "Yoda". I'm baffled by this. I ran the tests several times to make sure I wasn't saving the output images from a previous search under the wrong name. But nope. This is really what came out. CLIP is discovering whole new connections in its vector index, and possibly forming some warped meaning of life.

<table>

<colgroup>
  <col span="1" style="width: 15%">
  <col span="1" style="width: 60%">
  <col span="1" style="width: 15%">
</colgroup>

<tbody>
  <tr>
    <th width>
      Query image
    </th>
    <th>
      Top 3 results
    </th>
    <th>
      What I expected
    </th>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders-3/input/picard.jpg" ></td>
    <td><img src="/assets/img/image-encoders-3/output/picard.png" ></td>
    <td><img src="https://imgflip.com/s/meme/Captain-Picard-Facepalm.jpg"></td>
  </tr>
  
  <tr>
    <td><img src="/assets/img/image-encoders-3/input/baby_yoda.jpg" ></td>
    <td><img src="/assets/img/image-encoders-3/output/baby_yoda.png" ></td>
    <td><img src="https://i.imgflip.com/4/8k0sa.jpg"></td>
  </tr>
  
  <tr>
    <td><img src="/assets/img/image-encoders-3/input/kermit.jpg" ></td>
    <td><img src="/assets/img/image-encoders-3/output/kermit.png" ></td>
    <td><img src="https://i.imgflip.com/1edh1k.jpg"></td>
  </tr>
  </tbody>
</table> 

## What have we learned today, children?

Christ knows. My head hurts. If CLIP had a head it might hurt too. I think looking at too many memes has damaged both of us. Quick conclusion: CLIP is good, bad, and downright confusing. Note it down in your copybooks. I need a beer and a re-evaluation of my life choices.
