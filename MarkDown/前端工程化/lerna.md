# lerna vue-cli
- [参考二](https://juejin.cn/post/7144903788473057310)
- [参考三，重点](https://juejin.cn/post/7143466363837743117#heading-17)
- [参考](https://juejin.cn/post/6844903954329894920)
- [参考完整](https://juejin.cn/post/6844904194999058440)
```js
npm install lerna -g
mkdir lerna-demo
cd d:/lerna-demo
lerna init
```
>执行成功后，目录下将会生成这样的目录结构。

```js
 - packages(目录)
 - lerna.json(配置文件)
 - package.json(工程描述文件)
```

## 添加一个测试package
>默认情况下，package是放在`packages`目录下的。

```js
// 方式一 
// 进入packages目录
cd d:/lerna-demo/packages
// 创建一个packge目录
mkdir module-1
// 进入module-1 package目录
cd module-1
// 初始化一个package
npm init -y

// 方式二
lerna create module-1
```
>执行完毕，工程下的目录结构如下

```js
--packages
	--module-1
		package.json
--lerna.json
--package.json

```
