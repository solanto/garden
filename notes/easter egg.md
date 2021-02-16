---
modified: 15 feb 2021
---

# Easter Egg

Easter eggs are a thing.

![a basket of easter eggs](https://upload.wikimedia.org/wikipedia/commons/archive/5/54/20070409184559%21Bg-easter-eggs.jpg)

```python
def _normalize_binary(raw, digits): # strip 0b header and pad left with zeroes
    format_string = "{:0>" + str(digits) + "}"
    return format_string.format(raw[2:])
```

```julia
# shift one letter
function shift(character::Char, offset::Int8)
    if isletter(character)
        return (character - 'a' + offset) % 26 + 'a'
    else
        return character
    end
end
```

```scss
.socials {
    $size: 1.7em;
    
    height: $size;

    a {
        height: inherit;
        text-decoration: none;
        margin: 0 ($size / 4);

        img {
            height: inherit;
        }
    }
}
```

look, some `inline` code
