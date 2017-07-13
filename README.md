# 简单的gulp自动化配置

***

> 2017年7月13日19:43:47

## HTML的处理

* 使用的插件：gulp-minify-html
* 检测的目录：front文件夹下面的html文件
* 文件的输出目录：dist/front文件夹下面
* 处理的机制：文件发生变化的时候，将文件压缩之后保存到目标路径，并且刷新浏览器

## CSS的处理

* 使用的插件：gulp-minify-css
* 检测的目录：front/style文件夹下面的css文件
* 文件的输出目录：dist/front/css文件夹下面
* 处理机制：文件发生变化的时候，将文件压缩之后保存到目标路径，并且刷新浏览器

## JS的处理

- 使用的插件：gulp-concat，gulp-jshint，gulp-uglify
- 检测的目录：front/js文件夹下面的js文件
- 文件的输出目录：dist/front/js文件夹下面
- 处理机制：文件发生变化的时候，将文件检查，合并，压缩之后保存到目标路径，并且刷新浏览器

## 图片的处理

- 使用的插件：无
- 检测的目录：front/img文件夹下面的图片文件
- 文件的输出目录：dist/front/img文件夹下面
- 处理机制：文件发生变化的时候，将文件保存到目标路径，并且刷新浏览器

## Sass和Less的编译处理

- 使用的插件：gulp-sass，gulp-less
- 检测的目录：front/style文件夹下面的sass和less文件
- 文件的输出目录：dist/front/css文件夹下面
- 处理机制：文件发生变化的时候，将文件编译，压缩保存到目标路径，并且刷新浏览器

## 浏览器的同步设置

- 使用的插件：browser-sync
- 检测的目录：检测所有编写的文件的状态
- 文件的输出目录：根据不同的文件进行不同的处理
- 处理机制：检测文件的变化，将文件的变化分配给不同的任务处理，并且之后刷新浏览器
