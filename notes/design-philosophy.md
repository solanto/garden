---
title: design philosophy
scripts: textify-demo
---

# design philosophy

Studying civil engineering, I know that accessible infrastructure is key. It would overblow my intentions for this website to call it infrastructure, but accessibility is important to me. I value the people I communicate to, and why not communicate in ways mesh with those around me? Spending time on websites like [XXIIVV](https://wiki.xxiivv.com/site/home.html) and [ƒdisk](https://fdisk.space/) has taught me a few new ways to approach that, and I'd like to implement some rendition of those techniques moving forward.

## some guidelines (for me)

The document does not serve its styles and scripts; the document serves the reader.

HTML is structured intuitively. It does not rely on CSS to shuffle elements around against the document’s flow. Common image elements have sane dimensions, and [vector graphics](https://en.wikipedia.org/wiki/Vector_graphics#Operation) are used where possible.

Scripted elements load when it makes sense. JavaScript hot-swaps static parts of the document for scripted elements. This avoids stray HTML components sitting in the document when JavaScript is unavailable.

Important content uses well-supported browser features.[^1] Flourishes can deviate, as long as they don’t interfere with the content.

This all guarantees text-only access to the site.[^2]

[^1]: This does not mean I will be kind to [Internet Explorer](https://www.zdnet.com/article/microsoft-security-chief-ie-is-not-a-browser-so-stop-using-it-as-your-default/) users. Please get a better browser.
[^2]: Want to test this on a normal browser? Click <a href="javascript:(function()%7B(()%3D%3E%7Blet%20w%3Dwindow.open(%22%22)%3Bfetch(window.location.href).then(r%3D%3Er.text().then(t%3D%3Ew.document.body.outerHTML%3Dt.replace(RegExp(%60%3Clink(.%7C%5Cn)*%3F%3E%7C%3Cscript(.%7C%5Cn)*%3F%3E(.%7C%5Cn)*%3F%3C%5C%2Fscript%3E%60%2C%22g%22)%2C%22%22).replace(RegExp(%60((src%7Chref)%3D%22)%5C%2F%3F((%3F!http).*%3F)%22%60%2C%22g%22)%2C%22%241%22%2Bwindow.location.origin%2B'%2F%243%22')))%7D)()%7D)()">textify</a>! If you're on a desktop computer, bring the tool wherever you go by dragging it into your bookmarks bar. It should work on most pages.
