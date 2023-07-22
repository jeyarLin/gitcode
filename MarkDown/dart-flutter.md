https://www.oracle.com/java/technologies/downloads/#java8-windows 版本太低了，不推荐
https://www.oracle.com/java/technologies/downloads/#jdk17-windows
https://developer.android.google.cn/studio

## java JDK 安装

- 系统变量配置 JAVA_HOME C:\Program Files\Java\jdk-17
- 系统变量配置 path ;%JAVA_HOME%\bin 置顶

## android studio 安装

- plugins 安装 dart flutter
- 重启 android studio

## flutter 安装

- 系统变量配置 path D:\installSoft\flutter_windows_3.10.6-stable\flutter\bin
- 系统变量配置 新建
- PUB_HOSTED_URL=https://pub.flutter-io.cn
- FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
- cmd:flutter doctor
- cmd:flutter doctor --android-licenses 原因：jdk 版本太低，用 17 版本

- 安装 https://visualstudio.microsoft.com/downloads/.
- visualstudio c++ 桌面端 安装

## android studio sync jar 报错

- 解决 android studio 同步 sync 速度慢的问题
- maven2 === files-2.1
- C:\Users\zhuzi710\.gradle\caches\modules-2\files-2.1\org.jetbrains.kotlin\kotlin-compiler-embeddable\1.7.10\随机生成的缓存文件夹名称
- 把里面的 pom 文件删除，替换成 kotlin-compiler-embeddable-1.7.10.jar，重新 sync 一下或者重启 as，搞定
- https://repo.maven.apache.org/maven2/org/jetbrains/kotlin/kotlin-compiler-embeddable/1.7.10/kotlin-compiler-embeddable-1.7.10.jar
- https://repo.maven.apache.org/maven2/org/jetbrains/kotlin/kotlin-compiler-embeddable/1.7.10/kotlin-compiler-embeddable-1.7.10-sources.jar
- https://repo.maven.apache.org/maven2/org/bouncycastle/bcprov-jdk15on/1.67/bcprov-jdk15on-1.67-sources.jar
- https://repo.maven.apache.org/maven2/it/unimi/dsi/fastutil/8.4.0/fastutil-8.4.0-sources.jar (1.06 MB / 8.9 MB)
- https://repo.maven.apache.org/maven2/xerces/xercesImpl/2.12.0/xercesImpl-2.12.0-sources.jar (419.65 kB / 2.11 MB)

## 安卓真机调试 USB 调试

- 这里以 Redmi note 11 pro 为例子，系统 android 13，MIUI 14.0.5
- 设置->我的设备->全部参数与信息->快速连按 MIUI 版本就会显示已经打开了开发者模式
- 设置->搜索开发者选项->我们开启开发者选项和开启 USB 调试即可（还有 USB 调试（安全设置）可以打开）
- 另外 miui 系统设置了 usb 安装限制，需要开启 usb 安装（这要勾选否则 appium 日志会报错误）
