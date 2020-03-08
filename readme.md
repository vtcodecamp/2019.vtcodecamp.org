# VT Code Camp 2019 Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/60cb74ae-9fc1-46be-8ba9-54ee8c2269c5/deploy-status)](https://app.netlify.com/sites/vtcodecamp2019/deploys)

This is the repo for the VT Code Camp 2019 archive website.  The main VT Code Camp website repo is here: [vtcodecamp/www.vtcodecamp.org](https://github.com/vtcodecamp/www.vtcodecamp.org)

* **Production site**: `https://2019.vtcodecamp.com/`
* **Deploy Previews**: `https://deploy-preview-{PR#}--vtcodecamp2019.netlify.com/`
* **Branch Deploys**: `https://{branch-name}--vtcodecamp2019.netlify.com/`

## Built With

* [11ty/Eleventy](https://www.11ty.io) - static site generation
* [nunjucks](https://mozilla.github.io/nunjucks/) - templating
* [netlify](https://app.netlify.com/) - building / hosting
* [google fonts](https://fonts.google.com/?category=Monospace&selection.family=Inconsolata|PT+Sans|Ubuntu+Mono) - fonts
* [fontawesome icons](https://fontawesome.com/icons) - svg icons
* [unDraw](https://undraw.co/illustrations) -- illustrations

## Project Setup

* Install [Node.js & NPM](https://nodejs.org/en/download/)
* Run `npm install` in the project directory to install local dependencies
* Run `npm run serve` to run a local dev environment
* Access dev copy of the site at [localhost:8080](http://localhost:8080)

## NPM Scripts

```bash
npm run build             # runs `npx eleventy` to build the site
npm run serve             # builds site + serves `_site` directory
```

## File Structure

```bash
2019.vtcodecamp
├── _site/                # generated site output
├── .vscode/              # vs code editor configs
├── .netlify/             # netlify dev settings
├── node_modules/         # created by npm install
├── src
│   ├── _data             # data directory for 11ty (json + js)
│   │   ├── config.js     # environment settings
│   │   └── sponsor.js    # data driving sponsor section
│   ├── _includes         # template directory for 11ty
│   │   └── defaultLayout # parent template layout page
│   ├── assets            # static assets to build into site
│   │   └── sponsorLogos/ # sponsor logos
│   ├── [PageName].md     # any .md files will be built into html
│   ├── [PageName].njk    # any .njk files will be built into html
│   ├── favicon.ico       # favicon needs to be in root dir
│   └── index.njk         # home page
├── package.json          # lists npm modules, package, and scripts
├── .eleventy.js          # config information for 11ty
├── .gitignore            # ignored files in git
├── netlify.toml          # deploy settings for netlify
└── readme.md             # 🟊 [You Are Here]
```

## Contributing

Thanks for your interest in contributing! Please see the main repo [for info on contributing](https://github.com/vtcodecamp/www.vtcodecamp.org/blob/master/contributing.md).
