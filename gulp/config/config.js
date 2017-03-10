var envConfig = require('../utils/env');

module.exports = function () {
    var root = '',
        src = root + 'src/',
        config = root + 'config/',
        app = src + 'app/',
        assets = src + 'assets/',
        assetsPath = {
            styles: assets + 'styles/',
            images: assets + 'images/',
            fonts: assets + 'fonts/',
            customIcons: assets + 'custom-icons/'
        },
        index = src + 'index.html',
        tsFiles = [
            app + '**/!(*.spec)+(.ts)'
        ],
        lazyLoadModules = [{
            bundleName: 'events.bundle.js',
            entryPoint: 'components/events/events.module.js'
        }],
        externalFonts = {
            'font-awesome': 'node_modules/font-awesome/fonts/*.*'
        },
        build = {
            path: 'build/',
            app: 'build/app/',
            fonts: 'build/assets/fonts/',
            assetPath: 'build/assets/',
            assets: {
                lib: {
                    js: 'lib.js',
                    css: 'lib.css'
                }
            }
        };

    var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            mangle: true,
            runtime: false,
            globalDefs: {
                DEBUG: false,
                ENV: 'production'
            }
        }
    };
    var gulpConfig = {
        root: root,
        config: config,
        src: src,
        app: app,
        externalFonts: externalFonts,
        assets: assets,
        index: index,
        build: build,
        assetsPath: assetsPath,
        lazyLoadModules: lazyLoadModules,
        tsFiles: tsFiles,
        systemJs: systemJs
    };
    if (envConfig.ENV === envConfig.ENVS.DEV) {
        var historyApiFallback = require('connect-history-api-fallback');
        var browserSync = {
            dev: {
                port: 3000,
                injectChanges: false,
                server: {
                    baseDir: './src/',
                    middleware: [historyApiFallback()],
                    routes: {
                        "/node_modules": "node_modules",
                        "/src": "src",
                        "/build": "build",
                        "/externalResources": "externalResources"
                    }
                },
                files: [
                    src + "index.html",
                    src + "systemjs.conf.js",
                    assetsPath.styles + "main.css",
                    app + "**/*.css",
                    app + "**/*.html"
                ]
            },
            prod: {
                port: 3001,
                server: {
                    baseDir: './' + build.path,
                    middleware: [historyApiFallback()]
                }
            }
        };
        gulpConfig.browserSync = browserSync;
    }
    return gulpConfig;
};