var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');


gulp.task('styles', styles);
function styles(done) {
    console.log("CSS Updated");
    return gulp.src('./site/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .on('error',function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    }).pipe(gulp.dest('./site/temp/styles'));
};

gulp.task('watch', function(){
    browserSync.init({
        notify:false,
        server: {
            baseDir: "site"
        }
    });
    watch('./site/index.html', function() {
        browserSync.reload();
    });

    watch('./site/assets/styles/**/*.css', function(){
        styles();
        cssInject();
    });
});

gulp.task('cssInject', cssInject);
function cssInject(){
    return gulp.src('./site/temp/styles/styles.css').pipe(browserSync.stream());
};
