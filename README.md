# Angular 2 Starter    
Angular 2 starter kit with ability to 
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
For generating a build directory with all the app files bundled, run:
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
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.
