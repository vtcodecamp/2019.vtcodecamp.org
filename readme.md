# VT Code Camp 2019 Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/ef1b18a7-e5fd-4cb6-aa6e-f37a9a87369b/deploy-status)](https://app.netlify.com/sites/vtcodecamp2019/deploys)

* **Production site**: `https://www.vtcodecamp.com/`
* **Deploy Previews**: `https://deploy-preview-{PR#}--vtcodecamp2019.netlify.com/`
* **Branch Deploys**: `https://{branch-name}--vtcodecamp2019.netlify.com/`


## Built With

* [11ty/Eleventy](https://www.11ty.io) - static site generation
* [nunjucks](https://mozilla.github.io/nunjucks/) - templating
* [netlify](https://app.netlify.com/) - building / hosting
* [google fonts](https://fonts.google.com/?category=Monospace&selection.family=Inconsolata|PT+Sans|Ubuntu+Mono) - fonts
* [fontawesome icons](https://fontawesome.com/icons) - svg icons
* [unDraw](https://undraw.co/illustrations) -- illustrations

## File Structure

```bash
2019.vtcodecamp
├── node_modules/         # created by npm install
├── .vscode/              # vs code editor configs
├── _site/                # built site output
├── src
│   ├── _data             # data directory for 11ty (json + js)
│   ├── _includes         # template directory for 11ty
│   ├── assets            # static assests to build into site
│   │   ├── images.jpg
│   │   └── styles.css
│   ├── pages.md          # any pages will be built into html
│   └── index.md
├── package.json          # lists npm modules, package, and scripts
├── .eleventy.js          # config information for 11ty
├── .gitignore            # ignored files in git
├── netlify.toml          # deploy settings for netlify
└── readme.md
```

## Project Setup

* Install Node.js & NPM
* Run `npm install` in the project directory to install local dependencies
* Run `npm run serve` to run a local dev environment
* Access dev copy of the site at [localhost:8080](http://localhost:8080)

## NPM Scripts

```bash
npm run build   # runs `npx eleventy` to build the site
npm run serve   # builds site + serves `_site` dirrectory
```

## Resources & References

* [11ty - config input directory](https://www.11ty.io/docs/config/#input-directory)
* [11ty - addPassthroughCopy](https://www.11ty.io/docs/copy/)
* [11ty - YAML Front Matter](https://www.11ty.io/docs/data-frontmatter/)
* [11ty - available data values](https://www.11ty.io/docs/data/)
* [11ty - permalinks](https://www.11ty.io/docs/permalinks/)
* [11ty - inline css](https://www.11ty.io/docs/quicktips/inline-css/)
* [11ty - 404 page](https://www.11ty.io/docs/quicktips/not-found/)
* [11ty - environment variables](https://www.11ty.io/docs/data-js/#example%3A-exposing-environment-variables)
* [11ty - filters](https://www.11ty.io/docs/filters/)
* [netlify - environment variables](https://www.netlify.com/docs/continuous-deployment/#environment-variables)
* [netlify - TOML](https://www.netlify.com/docs/netlify-toml-reference/)
* [netlify - Build](https://www.netlify.com/products/build/)
* [netlify - Dev](https://www.netlify.com/products/dev/)
* [netlify - Deploy Previews](https://www.netlify.com/docs/webhooks/#github-commit-statuses)
* [vs code - Workspace recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)
* [nunjucks - operators & logic](https://mozilla.github.io/nunjucks/templating.html#comparisons)
* [nunjucks - check if variable in string](https://github.com/mozilla/nunjucks/issues/676)
* [nunjucks - inline if expression](https://mozilla.github.io/nunjucks/templating.html#if-expression)
* [nunjucks - substring of string](https://stackoverflow.com/a/48427351/1366033)
* [a11y - language codes](https://www.w3schools.com/tags/ref_language_codes.asp)
* [a11y - link names](https://dequeuniversity.com/rules/axe/3.2/link-name)
* [a11y - semantic vs decorative icons](https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility)
* [a11y - aria-hidden](https://developer.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)
* [html - metatags](https://metatags.io/)
* [compatability - box-shadow](https://caniuse.com/#feat=css-boxshadow)
* [fa - download](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself)
* [fa - sprites](https://fontawesome.com/how-to-use/on-the-web/advanced/svg-sprites)
* [svg omg - svg optimizer](https://jakearchibald.github.io/svgomg/)
* [squoosh - image optimizer](https://squoosh.app/)
* [twitter - embed tweets](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-javascript-factory-function)
* [twitter - style tweets](https://medium.com/@makerspirit/how-to-style-your-twitter-widget-styling-on-shadow-dom-a405c36edd10)
* [json schema - url format](https://github.com/json-schema-org/json-schema-spec/issues/233#issuecomment-279180514)
* [json schema - array of type](https://stackoverflow.com/a/51557536/1366033)
