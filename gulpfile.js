

var gulp = require('gulp'),
gp_clean = require('gulp-clean'),
gp_concat = require('gulp-concat'),
gp_sourcemaps = require('gulp-sourcemaps'),
gp_typescript = require('gulp-typescript'),
gp_uglify = require('gulp-uglify');
htmlclean = require('gulp-htmlclean');
newer = require('gulp-newer'),
imagemin = require('gulp-imagemin'),
gp_less = require('gulp-less'),
cleanCSS = require('gulp-clean-css');

/// Define paths
var srcPaths = {
    app: ['Scripts/app/main.ts', 'Scripts/app/**/*.ts'],
    js: [
        'Scripts/js/**/*.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/typescript/lib/typescript.js',
        'node_modules/moment/moment.js',
        'node_modules/hammerjs/hammer.js'
        
    ],
    js_angular: [
    'node_modules/@angular/**'
    ],
    js_rxjs: [
    'node_modules/rxjs/**'
    ],
    html: [
    'Scripts/app/**/*.html'
    ],
    image: [
        'Scripts/images/**/*.png', 'Scripts/images/**/*.svg'
    ],
    index: [
        'Scripts/'
    ]
    ,
    less: [
        'Scripts/less/**/*.less'
    ]

};

var destPaths = {
    app: 'wwwroot/app/',
    js: 'wwwroot/js',
    js_angular: 'wwwroot/js/@angular/',
    js_rxjs: 'wwwroot/js/rxjs/',
    html: 'wwwroot/html/',
    image: 'wwwroot/images/',
    index: 'wwwroot/',
    css: 'wwwroot/css/'
};


//pipe and mininfy index.html
gulp.task('index', function () {

    var page = gulp.src(srcPaths.index + 'index.html')
     .pipe(gulp.dest(destPaths.index));
    page = page.pipe(htmlclean());
    return page.pipe(gulp.dest(destPaths.index));

});


//pipe and mininfy systemjs.config.js
gulp.task('systemjs', function () {


    return gulp.src(srcPaths.index + 'systemjs.config.js')
     .pipe(gp_uglify({ mangle: false }))
     .pipe(gulp.dest(destPaths.index));


});

//pipe and compile to .js and mininfy .ts files
gulp.task('app', function () {

    return gulp.src(srcPaths.app)
   .pipe(gp_sourcemaps.init())
   .pipe(gp_typescript(require('./tsconfig.json').compilerOptions))
   .pipe(gp_uglify({ mangle: false }))
   .pipe(gp_sourcemaps.write('/'))
   .pipe(gulp.dest(destPaths.app));
});



//pipe node_modules .js files
gulp.task('js', function () {
    gulp.src(srcPaths.js_angular)
    .pipe(gulp.dest(destPaths.js_angular));
    gulp.src(srcPaths.js_rxjs)
    .pipe(gulp.dest(destPaths.js_rxjs));


    return gulp.src(srcPaths.js)
    // .pipe(gp_uglify({ mangle: false })) // disable uglify

    // .pipe(gp_concat('all-js.min.js')) // disable concat
.pipe(gulp.dest(destPaths.js));
});


// HTML processing
gulp.task('html', function () {
    var page = gulp.src(srcPaths.html)
        .pipe(gulp.dest(destPaths.html));

    page = page.pipe(htmlclean());

    return page.pipe(gulp.dest(destPaths.html));
});


// Process all LESS files and output the resulting CSS in wwwroot/css
gulp.task('less', function () {
    return gulp.src(srcPaths.less)
    .pipe(gp_less())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest(destPaths.css));


});

// image processing
gulp.task('image', function () {
    var page = gulp.src(srcPaths.image)
       .pipe(gulp.dest(destPaths.image));

    //page = page.pipe(imagemin({ optimizationLevel: 5 }));

    return page.pipe(gulp.dest(destPaths.image));


});

//erases wwwroot folder in destination
gulp.task('destination_clean', function () {
    return gulp.src(destPaths.index + "*", { read: false })
    .pipe(gp_clean({ force: true }));
});


// Watch specified files and define what to do upon file changes
gulp.task('watch', function () {
    gulp.watch([srcPaths.html], { ignoreInitial: false }, ['html']);
    gulp.watch([srcPaths.app], { ignoreInitial: false }, ['app']);
    gulp.watch([srcPaths.index + 'index.html'], { ignoreInitial: false }, ['index']);
    gulp.watch([srcPaths.index + 'systemjs.config.js'], { ignoreInitial: false }, ['systemjs']);
});
// Global cleanup taskt


gulp.task('main', ['index', 'systemjs', 'app', 'js', 'image', 'html', 'less', 'watch']);


