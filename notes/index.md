---
layout: guide
title: About these notes
icon: 🗺️
---
# take this guide!

The garden's still in its early stages.

## all my plants

{% for item in collections.notes %}
{% unless item.url == "/notes/" %}
{% unless item.url == "/" %}
<p><a class="no-decor" href="{{ item.url }}">{{ item.date | date: "%e %b. %Y" | downcase }} - {{ item.data.title }}</a></p>
{% endunless %}
{% endunless %}
{% endfor %}