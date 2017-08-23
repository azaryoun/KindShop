// Module Loader

(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // our application files
        '@angular': 'js/@angular', // angular2 packages
        'rxjs': 'js/rxjs', // Rxjs package
        '@angular/material': 'js/@angular/material/bundles/material.umd.js',
        '@angular/animations': 'js/@angular/animations/bundles/animations.umd.js',
        '@angular/animations/browser': 'js/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser/animations': 'js/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        'hammerjs': 'js/hammer.js',

    };
    // packages tells the System loader which filename and/or extensions to
    //look for by default (when none are specified)
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }
    };
    // configure @angular packages
    var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'upgrade',
    'forms',
    'router',
    'AppRouting'


    ];
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName +
            '.umd.js', defaultExtension: 'js'
        };
    };
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    }
    System.config(config);
})(this);