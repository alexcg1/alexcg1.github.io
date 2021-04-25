---
title: Some MediaWiki Tools
layout: post
tags: mediawiki
---

* [MediaWiki_Unembed](https://github.com/alexcg1/mediawiki_unembed) - Takes a MediaWiki file with other wiki pages embedded inside (via the \{\{:Embed\}\} tag) and unembeds them, resulting in a MediaWiki file with all the embedded content inline
* [MediaWiki2Book](https://github.com/alexcg1/mediawiki2book/): Uses Pandoc and some nice templates to convert a MediaWiki page to a good-looking PDF

Unfortunately I've had trouble with API access on the MediaWiki instance we're running, so you'll have to manually copy/paste your MediaWiki page's wikitext into a text document before runnng mediawiki2book
