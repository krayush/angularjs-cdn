(function(global) {
    global.ENV = global.ENV || 'development';
    // map tells the System loader where to look for things
    var map = {
        'app': 'src/app'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    };
    // List npm packages here
    var npmPackages = [
        '@angular',
        'rxjs'
    ];
    // Add package entries for angular packages
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];
    npmPackages.forEach(function (pkgName) {
        map[pkgName] = 'node_modules/' + pkgName;
    });
    ngPackageNames.forEach(function(pkgName) {
        map['@angular/' + pkgName] = 'node_modules/@angular/' + pkgName +
            '/bundles/' + pkgName + '.umd.js';
    });
    var config = {
        map: map,
        packages: packages
    };
    if(this.environment === "production") {
        System.defaultJSExtensions = true;
        config.bundles = {
            'build/js/app.bundle.js': ['app/main.js'],
            'build/js/events.bundle.js': ['app/components/events/events.module.js']
        };
    }
    System.config(config);
})(this);