---
date: 2021-08-21
title: lin(gu)ear spaces
styles: katex

---
# lin(gu)ear spaces

My first linear algebra course—done! Though, I wish it were that simple; my experience was far from smooth. It wore me out fast to think in terms of matrices and write unending proofs in far-from-ideal, pandemic circumstances. Nonetheless, it feels like the concepts I learned in linear algebra are everywhere now. Maybe it's [frequency bias](https://en.wikipedia.org/wiki/Frequency_illusion), but now I'm using [Julia](https://julialang.org/) to squash huge datasets into pretty matrices, and I'm even seeing math in the linguistics I hold so dearly.

I was listening to episode seventeen, ["Vowel Gymnastics,"](https://lingthusiasm.com/post/170920044226/lingthusiasm-episode-16-vowel-gymnastics-open) of [_Lingthusiasm_](/notes/consumption-list) with Gretchen McCulloch and Lauren Gawne, where they talk about how vowels define accents. McCulloch and Gawne explain how linguists typically use a trapezoid (_trapezium_) to model the continuum of all the possible vowel sounds humans can make.

![the Southern California vowel trapezium shows, for example, æ articulated at the low front of the mouth and o articulated at the mid back of the mouth; diagram is [“California English vowel chart”](https://commons.wikimedia.org/wiki/File:California_English_vowel_chart.svg) by [Moxfyre](https://commons.wikimedia.org/wiki/User:Moxfyre) and [Peter238](https://commons.wikimedia.org/wiki/User_talk:Peter238) under [CC BY-SA](https://creativecommons.org/licenses/by-sa/3.0/)](https://upload.wikimedia.org/wikipedia/commons/0/08/California_English_vowel_chart.svg)

McCulloch jokes about how she just can't pronounce Gawne's last name the way Gawne does herself:

> I don’t think I can reconfigure my vowel space, what I need is how can I map your name onto my vowel space, because I’m not going to acquire an Australian accent just so I can say your name.

McCulloch remaps Gawne’s vowel space onto her own space[^1] on-the-fly, interpreting the sounds Gawne makes in speech in a way that fits her own model of speech.

![if we take Southern Californian English as a baseline: i tends to be raised Australian accents while ɪ, u,  and o tend to be lowered and retracted (moved backward); attribution: [^2]](/assets/socal-aus-vowel-shifts.svg)

Spaces... mapping... this sounds awfully like Wednesday morning math class. We can view the vowel remapping process as a function; we input Gawne’s accent to produce McCulloch’s accent as an output. It’s difficult to assign dimensions to sounds, but McCulloch explains that two dimensions are generally enough for vowels:

> There is an abstract picture, and you can visualise it in your mouth in three-dimensional space. It doesn’t really matter it’s really mostly two-dimensional, because there’s not much of a difference in terms of what you do on the left side of your mouth or the right side of your mouth, you’re going to produce the same vowels. That’s not something that languages do, that people do.

Since this function acts over the entire continuous vowel space, the function effectively squishes and contorts the locations of vowels defined by Gawne’s trapezium so that they conform to the locations defined by her own trapezium.

![if each of McCulloch’s vowels were a point on a color space, mixing around that color space (almost like a colorful soup) according to the transformation function yields Gawne’s vowels; attribution: [^2]](/assets/vowel-space-transformation.gif)

We call this a nonlinear transformation {% math %}S \rightarrow S{% endmath %} where {% math %}S{% endmath %} is the vowel space within the trapezium model. The function maps points in the space to  different points in the same space; we stay in {% math %}S{% endmath %} throughout. If we represent the horizontal and vertical positions of vowels with real quantities, like position in the 2D diagrams above, the transformation maps a subspace of 2D space ({% math %}\mathbb{R}^2{% endmath %}) onto that same chunk of 2D space[^3]. This makes the function similar to a function {% math %}\mathbb{R}^2 \rightarrow \mathbb{R}^2{% endmath %}.

Although this is a very meta, abstract way to represent what’s going on in our brains when we listen to people with accents different from our own, this does make one thing clear: we could feasibly represent that intuitive accent conversion mathematically, if we wanted. Since this transformation isn’t linear (thanks to uneven squishing), it could be approximated using a machine learning model. Because the transformation is only over two dimensions, an approximate function wouldn’t be difficult to compute, in theory.

Sometimes, math hurts my head. Sometimes, I see its intersections with subjects I love, and I remember it’s not so bad.

[^1]: Trapeziums depict relatively imprecise representations of any group of speakers’ vowels. As well, I used a Southern Californian trapezium, while McCulloch is from Canada, making my diagrams slightly inaccurate to her speech in specific. These diagrams are really meant to be illustrative examples, not reflections of McCulloch or Gawne’s speech.
[^2]: Diagram made from [“Australian English vowel chart”](https://commons.wikimedia.org/wiki/File:Australian_English_vowel_chart.svg) by [MrKEBAB](https://commons.wikimedia.org/wiki/User_talk:Mr_KEBAB), and [“California English vowel chart”](https://commons.wikimedia.org/wiki/File:California_English_vowel_chart.svg) by [Moxfyre](https://commons.wikimedia.org/wiki/User:Moxfyre) and [Peter238](https://commons.wikimedia.org/wiki/User_talk:Peter238), both under [CC BY-SA](https://creativecommons.org/licenses/by-sa/3.0/)
[^3]: Here’s some reading on [arrow notation](https://en.wikipedia.org/wiki/Function_(mathematics)#Arrow_notation) and [real coordinate spaces](https://en.wikipedia.org/wiki/Real_coordinate_space).
