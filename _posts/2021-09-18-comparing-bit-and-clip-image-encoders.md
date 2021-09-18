---
title: BigTransfer Encoder vs CLIP Image Encoder
splash_img_source: /assets/img/one-line/cover.png
tags: [python, neural search, Jina, deep learning, clip, images]
layout: post
---

I've been mucking around with building a [meme search engine](https://examples.jina.ai) using [Jina](https://github.com/jina-ai/jina/). To do so I'm testing a couple of different image encoders. 

- Big Transfer encoder from Google
- CLIP image encoder

In essence, these turn an image file into vector embeddings that a neural network can understand. Which one is best (at least for memes)? Let's put them to the test. We'll index 10,000 memes and compare:

- Time it takes to index (in minutes) (note: this covers the running time of the whole Jina process, not just encoding)
- Size of the index (in megabytes)
- Quality of search results

<table>
  <tr>
    <th>
      Model
    </th>
    <th>
      CLIP
    </th>
    <th>
      BigTransfer
    </th>
    <th>
      Winner
    </th>
  </tr>
  <tr>
    <td>Time to index<br>(via <code>time python app.py index</code>)</td>
    <td>3:24</td>
    <td>1:33</td>
  </tr>
  <tr>
    <td>Index size<br>(via <code>du -hs workspace</code>)</td>
    <td>111 mb</td>
    <td>113 mb</td>
    <td><h3>🤷</h3></td>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders/inputs/doge.jpg" style="height: 256px"></td>
    <td><img src="/assets/img/image-encoders/clip/doge.png"></td>
    <td><img src="/assets/img/image-encoders/bit/doge.png"></td>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders/inputs/xx-everywhere.jpg" style="height: 256px"></td>
    <td><img src="/assets/img/image-encoders/clip/xx-everywhere.png"></td>
    <td><img src="/assets/img/image-encoders/bit/xx-everywhere.png"></td>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders/inputs/crying-woman.jpg" style="height: 256px"></td>
    <td><img src="/assets/img/image-encoders/clip/crying-woman.png"></td>
    <td><img src="/assets/img/image-encoders/bit/crying-woman.png"></td>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders/inputs/sparta.jpg" style="height: 256px"></td>
    <td><img src="/assets/img/image-encoders/clip/sparta.png"></td>
    <td><img src="/assets/img/image-encoders/bit/sparta.png"></td>
  </tr>
  
  
</table>

## Testing notes

- I ran the tests on my Thinkpad X1 Carbon gen8 with a 10gb swapfile.
- I randomly chose 10,000 memes to index from the [imgflip dataset]() on Kaggle, using a random seed of `42`.
- All images were normalized to 96x96 resolution.
