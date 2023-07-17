### win11

- 回到根目录 cd /
- 切换根目录 cd D
- 返回上一层 cd ..
- 删除文件夹 rimraf demo

### git

- git clone https://github.com/vuejs/devtools.git
- git --help
- 查看文件状态 git status
- 新增 git add .
- 提交 git commit -m "提交说明"
- 推送 git push
- 多人合作开发，其他开发人员提交了一次代码，我本地又有改动代码

```js
// 拉取远程分支并（有效rebase）合并
$ git pull --rebase origin master
// 推送到远程分支master
$ git push origin master
```

### npm yarn

- npm config ls -l
- yarn config list
- https://yarnpkg.com/en/docs/cli/run
- yarn config set registry https://registry.npm.taobao.org -g
- registry=https://registry.npmmirror.com
- npm config
