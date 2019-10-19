# Resources & References

A stash for helpful articles, references, documentation looked up along the way

## 11ty

* [11ty - config input directory](https://www.11ty.io/docs/config/#input-directory)
* [11ty - addPassthroughCopy](https://www.11ty.io/docs/copy/)
* [11ty - YAML Front Matter](https://www.11ty.io/docs/data-frontmatter/)
* [11ty - available data values](https://www.11ty.io/docs/data/)
* [11ty - permalinks](https://www.11ty.io/docs/permalinks/)
* [11ty - inline css](https://www.11ty.io/docs/quicktips/inline-css/)
* [11ty - 404 page](https://www.11ty.io/docs/quicktips/not-found/)
* [11ty - environment variables](https://www.11ty.io/docs/data-js/#example%3A-exposing-environment-variables)
* [11ty - filters](https://www.11ty.io/docs/filters/)
* [11ty - plugins](https://www.11ty.io/docs/plugins/)
* [11ty - frontmatter in .11ty.js files](https://www.11ty.io/docs/languages/javascript/#permalinks)
* [11ty - Debug 11ty with VS Code](https://github.com/11ty/eleventy/issues/331)

## Netlify

* [netlify - environment variables](https://www.netlify.com/docs/continuous-deployment/#environment-variables)
* [netlify - TOML](https://www.netlify.com/docs/netlify-toml-reference/)
* [netlify - Build](https://www.netlify.com/products/build/)
* [netlify - Dev](https://www.netlify.com/products/dev/)
* [netlify - Asset Optimization / Post Processing](https://www.netlify.com/docs/netlify-toml-reference/#post-processing)
* [netlify - Deploy Previews](https://www.netlify.com/docs/webhooks/#github-commit-statuses)
* [netlify - Build Hooks](https://www.netlify.com/docs/webhooks/#incoming-webhooks)

## Nunjucks

* [nunjucks - operators & logic](https://mozilla.github.io/nunjucks/templating.html#comparisons)
* [nunjucks - check if variable in string](https://github.com/mozilla/nunjucks/issues/676)
* [nunjucks - inline if expression](https://mozilla.github.io/nunjucks/templating.html#if-expression)
* [nunjucks - substring of string](https://stackoverflow.com/a/48427351/1366033)
* [nunjucks - iterating with `for`](https://mozilla.github.io/nunjucks/templating.html#for)

## A11y

* [a11y - language codes](https://www.w3schools.com/tags/ref_language_codes.asp)
* [a11y - link names](https://dequeuniversity.com/rules/axe/3.2/link-name)
* [a11y - semantic vs decorative icons](https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility)
* [a11y - aria-hidden](https://developer.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)

## Markdown

* [md - extended syntax - ids](https://www.markdownguide.org/extended-syntax/#heading-ids)
* [md - MarkdownLint](https://github.com/markdownlint/markdownlint) rule updates
  * [MD013](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md013---line-length) - Line Length too long
    * If folks want to put paragraphs in markdown, that's fine, just use an IDE that wraps lines
  * [MD025](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md025---multiple-top-level-headers-in-the-same-document) - Multiple Headers
    * False reading from building our markdown pages using templates like this `# {{title}}`
  * [MD033](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md033---inline-html) - Inline HTML
    * We need this for templating reasons
* [md - only allow limited subset of tags](https://github.com/markdown-it/markdown-it/issues/582)
* [md - escape backtick](https://meta.stackexchange.com/a/55443/209031)
* [md - preset zero rules](https://markdown-it.github.io/markdown-it/#MarkdownIt.new)

## JavaScript

* [Convet Object to array](https://stackoverflow.com/q/38824349/1366033)
* [Sort array alphabetically](https://stackoverflow.com/a/45544166/1366033)

## Node

* [npm - markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)
* [npm - run multiple scripts sequentially](https://stackoverflow.com/a/39172660/1366033)
* [node - `__dirname`](https://nodejs.org/docs/latest/api/globals.html#globals_dirname)

## VS Code

* [vs code - Workspace recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)
* [vs code - debug on windows and mac](https://stackoverflow.com/a/42471528/1366033)

## Images

* [fa - download](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself)
* [fa - sprites](https://fontawesome.com/how-to-use/on-the-web/advanced/svg-sprites)
* [svg omg - svg optimizer](https://jakearchibald.github.io/svgomg/)
* [svg - use xlink from other image](https://css-tricks.com/svg-use-external-source/)
* [squoosh - image optimizer](https://squoosh.app/)
* [sharp - image manipulation library](http://sharp.pixelplumbing.com)

## Github

* [Github - Community health guidelines](https://help.github.com/en/articles/creating-a-default-community-health-file-for-your-organization)
* [Github - Displaying a sponsor button in your repository](https://help.github.com/en/articles/displaying-a-sponsor-button-in-your-repository)

## Additional

* [html - meta tags](https://metatags.io/)
* [compatibility - box-shadow](https://caniuse.com/#feat=css-boxshadow)
* [twitter - embed tweets](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-javascript-factory-function)
* [twitter - style tweets](https://medium.com/@makerspirit/how-to-style-your-twitter-widget-styling-on-shadow-dom-a405c36edd10)
* [json schema - url format](https://github.com/json-schema-org/json-schema-spec/issues/233#issuecomment-279180514)
* [json schema - array of type](https://stackoverflow.com/a/51557536/1366033)

