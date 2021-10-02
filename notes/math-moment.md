---
date: 2021-10-01
title: modeling mathematical moment
styles: katex
---

# modeling mathematical moment

When I learned about moments in probability, I was determined to find some connection to the [moment](https://en.wikipedia.org/wiki/Moment_(physics)) I learned about in physics. As it turns out, the moment of a distribution can be very practical info!

Formally, we define the {% math %}n{% endmath %}th moment about center {% math %}c{% endmath %} of a distribution {% math %}f(x){% endmath %} as:

{% mathd %}
\int_{-\infty}^\infty (x-c)^n f(x) dx
{% endmathd %}

But this didn't click for me until I visualized {% math %}f{% endmath %} as a distribution of forces, and I thought of good ol' torque. Here's an interactive demo!

<figure>
    <iframe
        src="https://www.desmos.com/calculator/eggalijckq"
        width="500"
        height="500"
        style="
            width: 100%;
            height: 80vh;
        "
        frameborder=0
    ></iframe>
</figure>
