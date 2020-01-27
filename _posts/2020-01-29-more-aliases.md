---
title: More Aliases
---
Here are a few more of my shell aliases for anyone who's interested. This is a follow-up to my [shell clipboard aliases post](/shell-clipboard-aliases).

## Listing Files

I use [exa](https://github.com/ogham/exa) instead of [ls](https://www.lifewire.com/uses-of-linux-ls-command-4054227)

```
alias ls='exa'
alias ll='ls -l'
alias la='ls -a'
alias l='ls'
```

## Showing files

I use [bat](https://github.com/sharkdp/bat) instead of [cat](https://linux.die.net/man/1/cat) or [less](https://linux.die.net/man/1/less). It provides syntax highlighting and better Markdown support

```
alias cat='bat'
alias less='bat'
```

## Opening Files

Most files have a default opener. This command just opens them with that program.

```
alias o='xdg-open'
```

## Grep colors

Adds syntax highlighting to [grep](https://linux.die.net/man/1/grep)

```
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'
```

I should probably switch these over to [ripgrep](https://github.com/BurntSushi/ripgrep) since it's recursive and much faster.

## Neovim

I've recently switched to [Neovim](https://neovim.io/) instead of [Vim](https://www.vim.org/) for my editing needs.

```
alias vi='nvim'
alias vim='nvim'
```

## Prettier Mount

Prettifies the [mount](https://linux.die.net/man/8/mount) output into columns

```
alias mount='mount | column -t'
```
