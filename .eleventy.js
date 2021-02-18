module.exports = function(eleventyConfig) {
    
    const markdownIt = require('markdown-it');
    const markdownItOptions = {
        html: true,
        linkify: true
    };
    
    const md = markdownIt(markdownItOptions)
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-attrs'))
    .use(require('markdown-it-implicit-figures'), {
        figcaption: true,
        link: true
    })
    .use(require('markdown-it-for-inline'), 'url_new_win', 'link_open', function(tokens, idx) {
        const [attrName, href] = tokens[idx].attrs.find(attr => attr[0] === 'href');
        if (href && !href.startsWith('/') && !href.startsWith('#')) {
            tokens[idx].attrPush(['class', 'external']);
            tokens[idx].attrPush(['target', '_blank']);
            tokens[idx].attrPush(['rel', 'noopener noreferrer']);
        }
    })
    .use(function(md) {
        // Recognize Mediawiki links ([[text]])
        md.linkify.add("[[", {
            validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
            normalize: match => {
                const parts = match.raw.slice(2,-2).split("|");
                parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
                match.text = (parts[1] || parts[0]).trim();
                match.url = `/notes/${parts[0].trim()}/`;
            }
        })
    })

    md.renderer.rules.footnote_caption = (tokens, idx) => {
        let n = Number(tokens[idx].meta.id + 1).toString();
      
        if (tokens[idx].meta.subId > 0) {
          n += ":" + tokens[idx].meta.subId;
        }
      
        return n;
      };

    const pluginSass = require("eleventy-plugin-sass");
    eleventyConfig.addPlugin(pluginSass);

    const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
    eleventyConfig.addPlugin(syntaxHighlight, {
        alwaysWrapLineHighlights: true
    })

    const yaml = require("js-yaml");
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
    
    eleventyConfig.addFilter("markdownify", string => {
        return md.render(string)
    })

    const pluginRss = require("@11ty/eleventy-plugin-rss");
    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.setLibrary('md', md);
    
    eleventyConfig.addCollection("notes", function (collection) {
        return collection.getFilteredByGlob(["notes/**/*.md", "index.md"]);
    });
    
    eleventyConfig.addPassthroughCopy('assets');

    return {
        useGitIgnore: false,
        dir: {
            input: "./",
            output: "_site",
            layouts: "layouts",
            includes: "includes",
            data: "data"
        },
        passthroughFileCopy: true
    }
}