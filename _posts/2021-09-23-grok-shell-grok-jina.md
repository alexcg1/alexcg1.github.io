---
title: "Grok the Linux shell, grok Jina"
splash_img_source: /assets/img/jina-is-bash/cover.png
tags: [python, neural search, Jina, deep learning, Linux, bash, shell]
layout: post
---

I've been working with [Jina](https://github.com/jina-ai/jina/) Flows and Executors a lot recently. I've really been enjoying it, and now I'm starting to really grok why.

Coding in Jina is very much like using a bash shell. (Or zsh. Or korn. Or take your pick)

## Using the shell

In the shell you work with:

- Commands: `sed`, `grep`, `head`, `rm`
- Pipes: `|`, `>`, `&>`
- Package managers: `apt`, `yum`, `pamac`

You use a package manager to install a command (if it isn't already built-in). Then you can run commands and chain them together. For example, let's say you installed Jina and want to add it to your `requirements.txt`:

```shell
yay -S ripgrep # yay is apt for Arch Linux
pip freeze | rg "jina" >> requirements.txt
```

I'm using `ripgrep`/`rg` instead of `grep` to illustrate the package management bit. (It's like `grep` but way faster.)

Or something I do quite often: Run a Jina search, grab the resulting JSON, format it nicely, and yank it onto my clipboard (`yy` is a simple alias I'll put at the end of this post.)

```shell
curl --request POST -d '{"top_k":100,"mode":"search","data":["aliens and monsters"]}' -H 'Content-Type: application/json' 'http://0.0.0.0:45678/search' | jq | yy
```

## Using Jina

These concepts are reflected in Jina's design pattern:

- A [Document](https://docs.jina.ai/fundamentals/document/) is just like a file on your filesystem.
- An [Executor](https://docs.jina.ai/fundamentals/executor/) is a command. Just as `grep` is a tool that does one thing and does it well, so too are [`TransformerTorchEncoder`](https://hub.jina.ai/executor/u9pqs8eb), [`CLIPImageEncoder`](https://hub.jina.ai/executor/0hnlmu3q), [`SimpleIndexer`](https://hub.jina.ai/executor/zb38xlt4), etc.
- A [Flow](https://docs.jina.ai/fundamentals/flow/) pipes the output of one command to another via `.add()`: `Flow().add(CLIPImageEncoder).add(SimpleIndexer)`.
- [Hub](https://hub.jina.ai) is like a package manager. Instead of having to *write* `TransformerTorchEncoder` yourself, you simply download (or pull) it: `Flow().add("jinahub+docker://CLIPImageEncoder")`.

## An example

Let's say I'm a hopeless romantic (you know I am). If I were going to index every one of Shakespeare's lines that said "love" I'd do it like this in bash:

<span style="font-size: 80%">I mean I have them all memorized, but y'know</span>

```shell
for filename in /shakespeare/*.txt; do
  cat filename | grep "love" >> love_lines.txt # (Yes, I could use grep directly but I wanna show off piping mom)
done
```

<span style="font-size: 80%">Christ, I hate coding in bash.</span>

And (more or less) like this in Jina:

```python
# Create a doc for each of Shakey baby's works
docs = DocumentArray(from_files("shakespeare/*.txt"))

# Create simple Flow
flow = Flow()
       .add(uses="jinahub+docker://Sentencizer")              # break down into sentences
       .add(uses="jinahub+docker://TransformerTorchEncoder")  # encode into vectors
       .add(uses="jinahub+docker://SimpleIndexer")            # build index
       
# Index the Documents
flow.index(input=docs)

# Create a query Document
query_doc = Document(text="love")

# Run the search Flow and store matches
matches = flow.search(return_results=True)

# See the matches
print(matches)
```

I skipped the imports and maybe a few bits of config you may want to add, but you get the idea:

- `Sentencizer`, `TransformerTorchEncoder`, and `SimpleIndexer` are the commands. They do one thing and do it (hopefully) well.
- By prefixing them with `jinahub+docker://` we install them with the "package manager".
- Chaining them with `.add` is just like using `|` to pass the output of shell commands from one to another.

## What's the difference then?

- `grep` would miss any mention of `loving`, `romance`, `heart`, etc. `TransformerTorchEncoder` would see the connection.
- Jina can search *any* kind of data, not just text streams. PDFs, [amino acids](https://github.com/georgeamccarthy/protein_search), [memes](http://examples.jina.ai/memes), you name it. I could index frames of *Titanic* and get back pictures of Jack and Rose.
- Jina means writing more lines of code, at least for a simple thing like our example. But for real-world use-cases where you want scaling, client-server architecture, containerization, etc et bloody cetera, Jina's your jam.

## `yy` and `pp`

Okay, I promised I'd explain `yy`. If you use Vim, you may get the reference. I use these aliases to shuttle data between my clipboard and command line:

- `ls | yy` - pipes the output of `ls` to the clipboard.
- ``git clone `pp` `` - clones a git repo with the URL I just copied from my browser. (Those backticks pass the output of `pp` directly to the command via shell magic)

Here are the aliases, along with `gcpp` which I use a lot:

```shell
alias pp='xclip -o -selection clipboard'
alias yy='xclip -selection clipboard'
alias gcpp='git clone `xclip -o -selection clipboard`'
```
