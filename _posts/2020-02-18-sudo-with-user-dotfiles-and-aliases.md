---
title: "Using sudo with user dotfiles and aliases"
tags: [linux, unix, command line, terminal, shell, zsh, bash]
---

## The Problem

I'm a terminal junkie, and a heavy user of [Neovim](http://neovim.io). This leads to a couple of issues when I'm using sudo:

* I've got ```nvim``` aliased to ```vim``` in my aliases file (which I source from both .bashrc and .zshrc, so I have consistency). Sudo doesn't respect aliases by default, so opens up vanilla Vim
* When I ```sudo nvim``` it brings up Neovim, but just uses the boring default settings (since I don't have anything set up for the root user)

## What I Want

What I want: I type ```sudo vim``` and it opens up Neovim with my user settings

## The Solution

I've finally worked out a fix. In your .zshrc (or .bashrc or .whateverrc) file:

```
alias sudo='nocorrect sudo -E '
```

Now, when I type ```sudo vim foo.txt```, it brings up Neovim with my own settings!

## Breaking It Down

* ```nocorrect``` - required by zsh for autocorrect to work with sudo
* ```-E``` - tells sudo to respect the environment it's being started in (i.e. the environment with *my* dotfiles)
* The space at the end - passes aliases through to sudo

## Notes

* Maybe this only [[happened]] since I moved over to [zsh](https://en.wikipedia.org/wiki/Z_shell) from [bash](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29)? I can't remember to be honest
