# git常用
- [参考](https://gitee.com/all-about-git)
### 分支
```
# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]
$ git branch --track lerna-demo origin/lerna-demo
```
### 远程同步
```
# 下载远程仓库的所有变动
# 比如，远程仓库添加了分支，需要更新
$ git fetch [remote]
$ git fetch origin
```


## 如何将远程仓库代码强制回滚到某个之前的提交。
- git log   （显示提交的log）
## 回退命令
- --mixed 重置工作区
- --soft 重置暂存区
- --hard 重置暂存区与工作区
- git reset --hard HEAD^ 回退到上个版本
- git reset --hard HEAD~3 回退到前3次提交之前，以此类推，回退到n次提交之前
- git reset --hard commit_id 退到/进到 指定commit的sha码

## 强推到远程仓库
- git push origin master --force
- ps：如果无法强推，可能是分支处于保护状态，先在后台取消该分支保护。

## git 回退到指定版本步骤：
- 把你想回退的版本的commit id和最新版本的commit id记下来
- 然后用命令git reset --hard 老版本的commit id
- 再git reset --mix 最新版本的commit id
- 再push 就ok了