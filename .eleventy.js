module.exports = function(eleventyConfig) {
    const environment = process.env.ELEVENTY_ENV;

    const markdownIt = require('markdown-it');
    const markdownItOptions = {
        html: true,
        linkify: true,
        typographer: true
    };
    
    const md = markdownIt(markdownItOptions)
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-attrs'))
    .use(require('markdown-it-implicit-figures'), {
        figcaption: true,
        link: true,
        dataType: true
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
            n += ":" + (tokens[idx].meta.subId + 1);
        }
      
        return n;
    };

    md.renderer.rules.table_open = md.renderer.rules.blockquote_open = (tokens, idx, options, env, self) => (
        `<figure>` + self.renderToken(tokens, idx, options)
    );

    md.renderer.rules.table_close = md.renderer.rules.blockquote_close = (tokens, idx, options, env, self) => (
        self.renderToken(tokens, idx, options) + `</figure>`
    );

    eleventyConfig.setLibrary("md", md);

    const pluginSass = require("eleventy-plugin-sass");
    let sassOptions;
    if (environment == "production") {
        sassOptions = {};
    } else {
        sassOptions = {
            sourcemaps: true
        };
    }
    eleventyConfig.addPlugin(pluginSass, sassOptions);

    const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
    eleventyConfig.addPlugin(syntaxHighlight, {
        alwaysWrapLineHighlights: true
    })

    const yaml = require("js-yaml");
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
    
    eleventyConfig.addFilter("markdownify", string => md.render(string));

    const pluginRss = require("@11ty/eleventy-plugin-rss");
    eleventyConfig.addPlugin(pluginRss);

    const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
    eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

    const typographyPlugin = require("@jamshop/eleventy-plugin-typography");
    eleventyConfig.addPlugin(typographyPlugin); 
    
    eleventyConfig.addCollection("notes", collection => collection.getFilteredByGlob(["notes/**/*.md", "index.md"]));
    
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("scripts");

    const moment = require("moment");
    eleventyConfig.addLiquidFilter("shortutc", date => {
        const utc = date.toUTCString();
        return moment.utc(utc).format("D MMM. YYYY");
    });

    const katex = require("katex");

    eleventyConfig.addPairedShortcode("math", latex => katex.renderToString(latex, {
        throwOnError: true,
    }));

    eleventyConfig.addPairedShortcode("mathd", latex => '<figure class="math">' + katex.renderToString(latex, {
        throwOnError: true,
        displayMode: true,
    }) + "</figure>");

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