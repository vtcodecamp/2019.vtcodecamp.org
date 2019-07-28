const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {

    // Copy the `assets/` directory (css, images, etc)
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");

    // add cssmin filter
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addFilter("RootURL", function(value) {
        return value.replace('/src','');
    });

    let markdownIt = require("markdown-it");
    let options = {
      html: true,
      breaks: true,
      linkify: true
    };
    
    eleventyConfig.setLibrary("md", markdownIt(options));

    /* Markdown */
	let markdownItAnchor = require("markdown-it-anchor");
	let opts = {
		permalink: true,
		slugify: function(s) {
            // strip special chars
            let newStr = s.replace(/[^a-z ]/gi,'').trim();
            // take first 4 words and separate with "-""
            newStr = newStr.split(" ").slice(0,4).join("-");
			return newStr;
		},
		permalinkClass: "direct-link",
		permalinkSymbol: "#",
		level: [1,2,3,4]
	};

    eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor, opts));
    
    return {
        dir: {
            input: "src",
        },
        passthroughFileCopy: true,

        // By default markdown files are pre-processing with liquid template engine
        // https://www.11ty.io/docs/config/#default-template-engine-for-markdown-files
        markdownTemplateEngine: "njk",
    };
};
