---
title: thermal wind, actually simplified
date: 2021-09-30
styles: katex
---

## preface

I'm just an undergrad taking [AS.270.378 Present & Future Climate](https://e-catalogue.jhu.edu/course-descriptions/earth___planetary_sciences/#:~:text=AS.270.378.%C2%A0%C2%A0Present%20and%20Future%20Climate). But, on a whim, I tapped on a [3Blue1Brown interview with Dr. Tai-Danae Bradley](https://youtu.be/pvRY3r-b0QI)—and Dr. Bradley's [internet origin](https://www.math3ma.com/) story inspired me. Why *not* put this on the internet?

Now I remember what digital gardening is about. Whether my garden is totally factually correct, naively oversimplified, or somewhere in between: putting what I think and learn out there for passersby, starting a conversation, is what matters most.

# thermal wind, actually simplified

Thermal wind balance is a relationship that defines [vertical wind shear](https://cliffmass.blogspot.com/2017/05/wind-shear-when-atmospheric-seems-to-be.html)—the change in wind speed versus height—given some info like horizontal temperature imbalance.

This one took me a good six articles and three YouTube videos to finally understand. [Creighton Professor Jon Schrage's video](https://youtu.be/oFjdvoTIZpw) finally got me there, causing me to let out an audible *OH* while sitting in public. It's way simpler than it had seemed to me.

## baby steps: geostrophic flow

Before anything, we can't get anywhere without understanding [geostrophic flow](https://en.wikipedia.org/wiki/Geostrophic_current). Air in Earth's atmosphere is often pushed around by two major movers: pressure gradients and the Coriolis effect (or Coriolis ["force,"](https://en.wikipedia.org/wiki/Fictitious_force) as observed from our perspective on Earth's rotating surface). In a pressure gradient, air tends to move from high pressure to low pressure. Subject to the Coriolis effect, currents tend to "bend" rightward in the Northern Hemisphere and leftward in the Southern Hemisphere.

Sometimes, the Coriolis effect is perfectly countered by a pressure gradient. This is the essence of geostrophic flow. The current flows along the countours of the pressure gradient—along isobars—instead of across the gradient.

![[Ncswart](https://commons.wikimedia.org/wiki/File:Geostrophic_current.pdf), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Geostrophic_current.pdf/page1-593px-Geostrophic_current.pdf.jpg)

Geostrophic flows are stable, and currents tend to fall into geostrophic flow when conditions are available. Take, for example, some initial [southerly](https://en.wikipedia.org/wiki/Wind_direction#:~:text=Wind%20direction%20is%20reported%20by%20the%20direction%20from%20which%20it%20originates.%20For%20example%2C%20a%20north%20or%20northerly%20wind%20blows%20from%20the%20north%20to%20the%20south) wind in the Northern Hemisphere. This wind accelerates northward due to a pressure gradient force. Meanwhile, the Coriolis effect twists that flow eastward. Eventually, the pressure gradient force cancels the Coriolis effect, and the final wind direction settles along an isobar.

![](/assets/geostrophic-flow.jpg)

## the final boss

### a formal definition

This is the definition I learned for thermal wind balance in [zonal](https://en.wikipedia.org/wiki/Zonal_and_meridional_flow) winds.

{% mathd %}
\frac{\partial u}{\partial ( \ln (p) )}=-\frac{R}{f}\frac{\partial T}{\partial y}
{% endmathd %}

So, in terms a little closer to English: the wind speed gradient along the natural logarithm of pressure is just the temperature gradient perpendicular to the wind, scaled by some appropriate Coriolis effect and gas law factors. Decreasing pressure is synonymous with increasing altitude, so we can just view pressure as an expression of height.

![remember! *y* refers to a horizontal direction here, while *p* is an expression of height](/assets/t-vs-u-gradients.jpg)

### a practical examination

Why would some temperature gradient cause a perpendicular wind? And why would that wind (theoretically) get faster with height?

To explain the direction, let's return to the idea of a geostrophic flow. If a temperature gradient attracts air northward in the Northern Hemisphere, the final flow will be eastward—just like in our geostrophic flow example!

Finally, we'll tackle the heart of the relationship: the height-dependent change in speed, or vertical shear, itself. Recall that a change in wind speed per change in natural log of pressure is proportional to a change in temperature per change in perpendicular position.

{% mathd %}
\frac{\partial u}{\partial ( \ln (p) )} \propto \frac{\partial T}{\partial y}
{% endmathd %}

This is an enigmatic restatement of a phenomenon we're already familiar with: temperature and pressure are related! Professor Schrage's analogy illustrates the nuanced effects of this simple relationship very well (video highly recommended!).

Imagine stacked [parcels of air](https://glossary.ametsoc.org/wiki/Air_parcel) in a cold region versus in a hot region. The air "layers" in the cold region are going to be thinner with less temperature-induced pressure, while the layers in the hot region are going to be thicker with more temperature-induced pressure. It's like stacking pancakes versus birthday cakes—the cold layers' horizontal "boundaries," or isobars, are close together; the hot region's isobars are far apart. The top of pancake number one and birthday cake number one may both be relatively low down to the ground, but the distance between each subsequent set of boundaries will grow with height.

![](/assets/increasing-pressure-gradient.jpg)

We can call the change in pressure, or pressure gradient, from the cold region to the hot region {% math %}\nabla p{% endmath %}; we observe that the grade is steeper aloft than afoot, so that {% math %}\nabla p_3 > \nabla p_2 > \nabla p_1{% endmath %}.

Remember how pressure gradients love pushing air around? As pressure imbalance increases with height, winds blow faster higher up—even if the Coriolis effect twists them sideways in the end!

![](/assets/p-gradients-wind-shear.jpg)

