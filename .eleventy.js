const CleanCSS = require("clean-css");


module.exports = function(eleventyConfig) {

    // Copy the `assets/` directory (css, images, etc)
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");

    // add cssmin filter
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    return {
        dir: {
            input: "src",
        },
        passthroughFileCopy: true,
    };
};
