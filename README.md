# angularjs-cdn
Angular 2 boilerplate with ability to 
* start a local CDN server, 
* generate custom fonts using webfont,
* generate bundles for production environment using SystemJS
* use SCSS for styling

### What's included?
* [npm](https://www.npmjs.com/) for package manager
* [TypeScript](http://www.typescriptlang.org/) for the base language
* [Typings](https://github.com/typings/typings) for TypeScript definition manager
* [Gulp](http://gulpjs.com/) for workflow
* [Browsersync](https://www.browsersync.io/) for development server & reload capability
* [SystemJS](https://github.com/systemjs/systemjs) for module loader
* [SystemJS Builder](https://github.com/systemjs/builder)


### Prerequisites
You need to have [Node.js and npm](https://nodejs.org/en/)
- Support Node v4 - latest
- Support npm v3 - latest
[Global Gulp CLI](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)


### Installation
Install Dependency Checker (Optional)
```bash
npm install -g depcheck
```
Install Gulp client
```bash
npm install --global gulp-cli
```
Go to the starter directory and install the packages:
```bash
npm install
```

### Generate Build
For generating a build directory with all the app files bundled, run this command.  
Note: The build directory is neither under watch and nor is any file updated in build directory on any change.
Run npm run build for refreshing the build directory completely
```bash
npm run build
```

### Generating only dev build
Previous command will generate both dev and prod build. You can create only dev build by running:
```bash
npm run build-dev
```

### Start
Let's start up the local CDN server, run:
```bash
npm start
```
and done! The browser will popup and you can start to see your app!  
Every changes to the files (ts/scss/html) will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

### External SCSS files
For adding external scss files to main.css, add them to 
```directory
 /
   |- src/assets/styles/main.scss
```

### External CSS files
For adding external css files to library.css, add them to externalCSS array under and generate build
```directory
 /
   |- config/config.js
```

### Adding a icon
For adding a new icon, just add the equivalent svg file to below path and generate build 
```directory
 /
   |- src/assets/custom-icons
```

### Using Debug mode
To enable debug mode: add this json config in localStorage.
* remoteServerUrl: is where the ajax requests hit in case you wish to set it/override it.  
* remoteCDNUrl: is where the requests for js/css/html goes in case you wish to set it/override it.
```json
{
  "bootConfig": {
    "debug": true,
    "remoteCDNUrl": "http://localhost:3000/build/",
    "remoteServerUrl": "http://test.com:8080"
  }
}
```

### externalAssets.json
This file is the first file fetched by index.html and it contains the list of assets.<br/>

For jsAssets, all the dev section will be compiled to get lib.js in build.  
For cssAssets, generate all bundles via gulp and just mention paths here.<br/>

Note: To exclude any file from build, just add #buildRemove  
Note: Don't delete this file as otherwise no static resources will load.
```json 
{
  "jsAssets": {
    "dev": [
      "node_modules/jquery/dist/jquery.js",
      "src/systemjs.conf.js#buildRemove"
    ],
    "production": [
      "build/assets/lib.js",
      "build/assets/app.js"
    ]
  },
  "cssAssets": {
    "production": [
      "build/assets/bundle.css"
    ],
    "dev": [
      "src/assets/styles/main.css"
    ]
  }
}
```

### Adding external fonts
For adding external fonts, add them to externalFonts array under
```directory
 /
   |- config/config.js
```