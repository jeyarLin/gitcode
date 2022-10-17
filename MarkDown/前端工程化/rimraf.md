# rimraf
1、插件介绍

使用webpack build文件项目时每次都会生成一个dist目录，有时需要把dist目录里的所以旧文件全部删掉，除了可以使用rm -rf /dist/命令删除外，还可以使用rimraf /dist/命令；

rimraf 的作用：以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除；

2、安装

局部安装：npm install rimraf --save-dev

全局安装：npm install rimraf -g

- rimraf node_modules
- rimraf **/node_modules #批量删除多项目中node_modules文件夹