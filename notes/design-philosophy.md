---
title: design philosophy
date: 2021-02-20
modified: 2021-03-06
---

# design philosophy

Studying civil engineering, I know that accessible infrastructure is key. It would overblow my intentions for this website to call it infrastructure, but accessibility is important to me. I value the people I communicate to, and why not communicate in ways mesh with those around me? Spending time on websites like [XXIIVV](https://wiki.xxiivv.com/site/home.html) and [ƒdisk](https://fdisk.space/) has taught me a few new ways to approach that, and I'd like to implement some rendition of those techniques moving forward.

## some guidelines (for me)

The document does not serve its styles and scripts; the document serves the reader.

HTML is structured intuitively. It does not rely on CSS to shuffle elements around against the document’s flow. Common image elements have sane dimensions, and [vector graphics](https://en.wikipedia.org/wiki/Vector_graphics#Operation) are used where possible.

Scripted elements load when it makes sense. JavaScript hot-swaps static parts of the document for scripted elements. This avoids stray HTML components sitting in the document when JavaScript is unavailable.

Important content uses well-supported browser features.[^1] Flourishes can deviate, as long as they don’t interfere with the content.

This all guarantees text-only access to the site.[^2]<sup>,</sup>[^3]

[^1]: This does not mean I will be kind to [Internet Explorer](https://www.zdnet.com/article/microsoft-security-chief-ie-is-not-a-browser-so-stop-using-it-as-your-default/) users. Please get a better browser.
[^2]: Want to test this on a normal browser? Click [textify](https://results-v3-secure.w3dt.net/anon/016dFCsXWMCIV4NARMQR636623)! You can view other webpages in text-only mode using [textbrowser](https://w3dt.net/tools/textbrowser) in your browser or by installing a local text-only browser like [elinks](http://elinks.or.cz/index.html).

[^3]: As of  early March, 2021, this has one big catch: images! I switched to [eleventy-plugin-lazyimages](https://github.com/liamfiddler/eleventy-plugin-lazyimages) to improve loading times on pages with images, but it doesn't support scriptless browsers just yet. It should [very soon](https://github.com/liamfiddler/eleventy-plugin-lazyimages/pull/43), though!
