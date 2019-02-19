<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.jsdelivr.net/gh/angular-material-extensions/freelancer-theme/assets/angular-material-extensions-logo.svg">
</p>

# @angular-material-extensions/freelancer-theme - Open Source Angular Material Theme as SPA for freelancers based on [Start Bootstrap Theme](https://github.com/BlackrockDigital/startbootstrap-freelancer)

[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/freelancer-theme)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![codecov](https://codecov.io/gh/angular-material-extensions/freelancer-theme/branch/master/graph/badge.svg)](https://codecov.io/gh/angular-material-extensions/freelancer-theme)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/freelancer-theme/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/freelancer-theme)
[![dependency Status](https://david-dm.org/angular-material-extensions/freelancer-theme/status.svg)](https://david-dm.org/angular-material-extensions/freelancer-theme)
[![devDependency Status](https://david-dm.org/angular-material-extensions/freelancer-theme/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/freelancer-theme#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/freelancer-theme.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/freelancer-theme.svg?style=flat-square)](https://github.com/angular-material-extensions/freelancer-theme/blob/master/LICENSE)

<p align="center">
  <img alt="@angular-material-extensions/freelancer-theme screenshot" style="text-align: center;"
   src="https://cdn.jsdelivr.net/gh/angular-material-extensions/freelancer-theme/assets/MDPI_SCREEN.png">
</p>

## Built by and for developers :heart:

Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/freelancer-theme/issues)

If did you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions)
by starring :star: and sharing it :loudspeaker:

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Documentation](#documentation)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

## [Demo](https://angular-material-extensions.github.io/freelancer-theme)

View all the directives and components in action at [https://angular-material-extensions.github.io/freelancer-theme](https://angular-material-extensions.github.io/freelancer-theme)

<a name="features"/>

# Features

:heavy_check_mark: | SPA  
 :heavy_check_mark: | Easy to setup  
 :heavy_check_mark: | Fully Customizable via `config.ts`  
 :heavy_check_mark: | Built with Angular V7  
 :heavy_check_mark: | Material Design  
 :heavy_check_mark: | SEO friendly with angular universal

<a name="getting-started"/>

# Getting started

1. Star this project then clone or fork the repository

```sh
git clone https://github.com/angular-material-extensions/freelancer-theme.git
```

2. Go to the project folder and install the dependencies:

```sh
cd freelancer-theme && npm install
```

3. Adapt the configuration file `config.ts` to suit your profile (see the below and usage section)

4. Launch development server, and open `localhost:4200` in your browser:

```sh
npm start
```

<a name="project-structure"/>

# Project structure

```
dist/                        web app production build
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- config.ts/                CONFIGURE THE SPA ON YOUR OWN HERE
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

<a name="usage"/>

# Usage

1. Open the `config.ts` file and adjust the properties to suit your profile

```ts
export const DEFAULT_CONFIG: Config = {
  title: 'Angular Material Freenlancer Theme',
  description: 'Web Developer - Graphic Artist - User Experience Designer',
  url: 'https://github.com/angular-material-extensions/freelancer-theme',
  domain: 'github.com',
  projects: projects,
  about: {
    section1:
      'This Freelancer Theme is a free material theme created by angular material extensions based on Start' +
      ' Bootstrap.The download includes the complete source files including HTML, CSS, and JavaScript as well as ' +
      'optional LESS stylesheets for easy customization.',
    section2:
      'Whether you are a student looking to showcase your work, a' +
      ' professional looking to attract clients, or a graphic artist looking to share your projects, this template ' +
      'is the perfect starting point!'
  },
  social: {
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/ngAnthonyy',
    github: 'https://github.com/AnthonyNahas',
    linkedin: 'https://www.linkedin.com/in/anthony-nahas-926245119/'
  },
  address: {
    country: 'Germany',
    state: 'Niedersachen',
    city: 'Göttingen',
    street: 'meine Strasse',
    zip: '1234'
  }
};
```

2. Open `package.json` and replace `freelance-theme` with either your favourite or repository name

3. Change or remove the Track ID of Google Analytics in the `index.html` file and adjust the meta tags for SEO purposes

4. Build or prerender the SPA
   a. Normal production build via `npm run build:prod`
   b. Prerendered production build via `npm run build:prerender`

5. Deploy the `dist` directory to your favorite hosting service like github pages, firebase hosting, heroku...

per default this project uses github pages to host the app. This can be achieved via `npm run deploy:demo`

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Task                                            | Description                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `npm start`                                     | Run development server on `http://localhost:4200/`                                                               |
| `npm run serve:sw`                              | Run test server on `http://localhost:4200/` with service worker enabled                                          |
| `npm run build [-- --configuration=production]` | Lint code and build web app for production (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/` folder |
| `npm test`                                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode                                         |
| `npm run test:ci`                               | Lint code and run unit tests once for continuous integration                                                     |
| `npm run e2e`                                   | Run e2e tests using [Protractor](http://www.protractortest.org)                                                  |
| `npm run lint`                                  | Lint code                                                                                                        |
| `npm run translations:extract`                  | Extract strings from code and templates to `src/app/translations/template.json`                                  |
| `npm run docs`                                  | Display project documentation                                                                                    |
| `npm run prettier`                              | Automatically format all `.ts`, `.js` & `.scss` files                                                            |

When building the application, you can specify the target configuration using the additional flag
`--configuration <name>` (do not forget to prepend `--` to pass arguments to npm scripts).

The default build configuration is `prod`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

## Code scaffolding

Run `npm run generate -- component <name>` to generate a new component. You can also use
`npm run generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`,
you can also use the command `ng generate` directly.

## Additional tools

Tasks are mostly based on the `angular-cli` tool. Use `ng help` to get more help or go check out the
[Angular-CLI README](https://github.com/angular/angular-cli).

## Code formatting

All `.ts`, `.js` & `.scss` files in this project are formatted automatically using [Prettier](https://prettier.io),
and enforced via the `test:ci` script.

A pre-commit git hook has been configured on this project to automatically format staged files, using
(pretty-quick)[https://github.com/azz/pretty-quick], so you don't have to care for it.

You can also force code formatting by running the command `npm run prettier`.

# What's in the box

The app template is based on [HTML5](http://whatwg.org/html), [TypeScript](http://www.typescriptlang.org) and
[Sass](http://sass-lang.com). The translation files use the common [JSON](http://www.json.org) format.

#### Tools

Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and
[NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:

- Optimized build and bundling process with [Webpack](https://webpack.github.io)
- [Development server](https://webpack.github.io/docs/webpack-dev-server.html) with backend proxy and live reload
- Cross-browser CSS with [autoprefixer](https://github.com/postcss/autoprefixer) and
  [browserslist](https://github.com/ai/browserslist)
- Asset revisioning for [better cache management](https://webpack.github.io/docs/long-term-caching.html)
- Unit tests using [Jasmine](http://jasmine.github.io) and [Karma](https://karma-runner.github.io)
- End-to-end tests using [Protractor](https://github.com/angular/protractor)
- Static code analysis: [TSLint](https://github.com/palantir/tslint), [Codelyzer](https://github.com/mgechev/codelyzer),
  [Stylelint](http://stylelint.io) and [HTMLHint](http://htmlhint.com/)
- Local knowledgebase server using [Hads](https://github.com/sinedied/hads)
- Automatic code formatting with [Prettier](https://prettier.io)

#### Libraries

- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Angular Flex Layout](https://github.com/angular/flex-layout)
- [Material Icons](https://material.io/icons/)
- [RxJS](http://reactivex.io/rxjs)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)

#### Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
- [Unit tests](docs/coding-guides/unit-tests.md)
- [End-to-end tests](docs/coding-guides/e2e-tests.md)

#### Other documentation

- [I18n guide](docs/i18n.md)
- [Working behind a corporate proxy](docs/corporate-proxy.md)
- [Updating dependencies and tools](docs/updating.md)
- [Using a backend proxy for development](docs/backend-proxy.md)
- [Browser routing](docs/routing.md)

<a name="other-angular-libraries"/>

## Other Angular Libraries and Projects

- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

<a name="support"/>

## Support

- Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
- or open an appropriate [issue](https://github.com/angular-material-extensions/freelancer-theme/issues)
- let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)

Built by and for developers :heart: we will help you :punch:

## License

Copyright (c) 2019 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)
