---
title: "Image Encoders: BigTransfer vs CLIP"
splash_img_source: /assets/img/image-encoders/cover.jpg
tags: [python, neural search, Jina, deep learning, clip, images]
layout: post
---

I've been mucking around with building a [meme search engine](https://examples.jina.ai) using [Jina](https://github.com/jina-ai/jina/). To do so I'm testing a couple of different image encoders. 

- Big Transfer encoder from Google
- CLIP image encoder

In essence, these use a neural network to turn an image file into vector embeddings that can be compared for a similarity ("nearest neighbor") search. Which one is best (at least for memes)? Let's put them to the test. We'll index 10,000 memes and compare:

- Time it takes to index (in minutes) (note: this covers the running time of the whole Jina process, not just encoding)
- Size of the index (in megabytes)
- Quality of search results

### BigTransfer

```python
flow = (
    Flow()
    .add(
        uses="jinahub+docker://BigTransferEncoder",
        uses_with={"model_name": "Imagenet1k/R50x1", "model_path": "model"},
)
```

### CLIP

```python
flow = (
    Flow()
    .add(
        uses="jinahub+docker://CLIPImageEncoder",
)
```

<table>

<colgroup>
  <col span="1" style="width: 24%">
  <col span="1" style="width: 38%">
  <col span="1" style="width: 38%">
</colgroup>

<tbody>
  <tr>
    <th width>
      Model/query image
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
    <td>BigTransfer</td>
  </tr>
  <tr>
    <td>Index size<br>(via <code>du -hs workspace</code>)</td>
    <td>111 mb</td>
    <td>113 mb</td>
    <td>Too close to call</td>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders/inputs/doge.jpg" ></td>
    <td><img src="/assets/img/image-encoders/clip/doge.png"></td>
    <td><img src="/assets/img/image-encoders/bit/doge.png"></td>
    <td><h2>🤷</h2></td>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders/inputs/xx-everywhere.jpg" ></td>
    <td><img src="/assets/img/image-encoders/clip/xx-everywhere.png"></td>
    <td><img src="/assets/img/image-encoders/bit/xx-everywhere.png"></td>
    <td><h2>🤷</h2></td>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders/inputs/crying-woman.jpg" ></td>
    <td><img src="/assets/img/image-encoders/clip/crying-woman.png"></td>
    <td><img src="/assets/img/image-encoders/bit/crying-woman.png"></td>
    <td><h2>🤷</h2></td>
  </tr>
  <tr>
    <td><img src="/assets/img/image-encoders/inputs/sparta.jpg" ></td>
    <td><img src="/assets/img/image-encoders/clip/sparta.png"></td>
    <td><img src="/assets/img/image-encoders/bit/sparta.png"></td>
    <td>BigTransfer</td>
  </tr>
</tbody>
  
  
</table>

## So, what have we learned?

Not much really. 

- **Accuracy**: Both models perform almost the same in terms of quality, with BigTransfer edging out CLIP when it comes to catching the Sparta meme. 
- **Performance**: BigTransfer blows CLIP out of the water, taking less than half the time to index the dataset (and remember, that includes the time Jina takes to spin up).
- **Disk usage**: Not much in it. What's a couple of megs between friends?
- **Other resource usage:** I didn't measure memory/CPU usage this time round, but in my tests it felt like BigTransfer was a lot lighter. (Every time I used CLIP before my laptop would fall over without a swap file. That wasn't the case with BigTransfer.)

This is just how well they perform on a folder of memes though - and memes with similar templates are very similar to each other (otherwise they wouldn't really be memes, just random photos with some Impact font over the top). The models may perform very differently on a dataset of personal photos where variation would be greater.

Next time maybe I'll test the meme dataset but with by searching variations of the doge meme. There are plenty of variations and I haven't seen any of those in the dataset so far. So whichever model matches more closely with the classic Doge meme would be the winner.

## Testing notes

- I ran the tests on my Thinkpad X1 Carbon gen8 with a 10gb swapfile.
- I randomly chose 10,000 memes to index from the [imgflip dataset]() on Kaggle, using a random seed of `42`.
- All images were normalized to 96x96 resolution.
