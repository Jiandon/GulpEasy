/**
 * Created by Administrator on 2017年7月12日 0012.
 */

// 构建gulp自动化
var gulp = require("gulp");

// 自动加载gulp插件，使用gulp-load-plugins插件，并且马上运行
var plugins = require('gulp-load-plugins')();

// js文件的处理的操作
gulp.task('js',function () {
    gulp.src('font/js/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter())
        .pipe(plugins.concat('all.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/font/js'))
        .pipe(reload({
            stream: true
        }));
});

// css文件的处理
gulp.task('css',function () {
    gulp.src('font/style/*.css')
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('dist/font/css'))
        .pipe(reload({
          stream: true
        }));
});

// 编译less和sass
gulp.task('less',function () {
   gulp.src('font/style/*.less')
       .pipe(plugins.less())
       .pipe(plugins.minifyCss())
       .pipe(gulp.dest('dist/font/css'))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('sass',function () {
    gulp.src('font/style/*sass')
        .pipe(plugins.sass())
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('dist/font/css'))
        .pipe(reload({
            stream: true
        }));
});

// html文件的处理
gulp.task('html',function () {
    gulp.src('font/*.html')
        .pipe(plugins.minifyHtml())
        .pipe(gulp.dest('dist/font'))
        .pipe(reload({
            stream: true
        }));
});

// 图片的处理
gulp.task('images',function () {
    gulp.src('font/img/*.*')
        .pipe(gulp.dest('dist/font/img'))
        .pipe(reload({
            stream: true
        }));
});

// 浏览器同步显示的设置
var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task("serve",function () {
    browserSync({
        server:{
            baseDir:["dist"]
        }
    },function(err,bs) {
        console.log(bs.options.getIn(["url","local"]));
    });

    // watch检测文件的比变化
    gulp.watch("font/style/*.less",['less']);
    gulp.watch("font/style/*.sass",['sass']);
    gulp.watch("font/style/*.css",['css']);
    gulp.watch("font/js/*.js",['js']);
    gulp.watch("font/img/*.*",['images']);
    gulp.watch("font/*.html",['html']);
});

