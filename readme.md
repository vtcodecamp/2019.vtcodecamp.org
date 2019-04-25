# VT Code Camp 2019 Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/ef1b18a7-e5fd-4cb6-aa6e-f37a9a87369b/deploy-status)](https://app.netlify.com/sites/vt-code/deploys)

Currently deployed to https://vt-code.netlify.com/

## Built With

* [11ty/Eleventy](https://www.11ty.io) - static site generation
* [nunjucks](https://mozilla.github.io/nunjucks/) - templating
* [netlify](https://app.netlify.com/) - building / hosting
* [google fonts](https://fonts.google.com/?category=Monospace&selection.family=Inconsolata|PT+Sans|Ubuntu+Mono)
* [fontawesome icons](https://fontawesome.com/icons)

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

## Resources

* [11ty - Config Input Directory](https://www.11ty.io/docs/config/#input-directory)
* [11ty - addPassthroughCopy](https://www.11ty.io/docs/copy/)
* [11ty - YAML Front Matter](https://www.11ty.io/docs/data-frontmatter/)
* [11ty - available data values](https://www.11ty.io/docs/data/)
* [11ty - permalinks](https://www.11ty.io/docs/permalinks/)
* [11ty - inline css](https://www.11ty.io/docs/quicktips/inline-css/)
* [11ty - 404 page](https://www.11ty.io/docs/quicktips/not-found/)
* [netlify - TOML](https://www.netlify.com/docs/netlify-toml-reference/)
* [netlify - Build](https://www.netlify.com/products/build/)
* [netlify - Dev](https://www.netlify.com/products/dev/)
* [netlify - Deploy Previews](https://www.netlify.com/docs/webhooks/#github-commit-statuses)
* [vs code - Workspace recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)
* [nunjucks - check if variable in string](https://github.com/mozilla/nunjucks/issues/676)
* [nunjucks - inline if expression](https://mozilla.github.io/nunjucks/templating.html#if-expression)
* [a11y - language codes](https://www.w3schools.com/tags/ref_language_codes.asp)
* [a11y - link names](https://dequeuniversity.com/rules/axe/3.2/link-name)
* [a11y - semantic vs decorative icons](https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility)
* [compatability - box-shadow](https://caniuse.com/#feat=css-boxshadow)