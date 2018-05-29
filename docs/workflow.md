# Workflow

在多人协作方面, 我们采用一个比较简单的工作流, 没有具体的名字, 参照了这两篇博客总结出来: [real-life-git-workflow](http://luci.criosweb.ro/a-real-life-git-workflow-why-git-flow-does-not-work-for-us/) 和 [git-process-that-works](https://reallifeprogramming.com/git-process-that-works-say-no-to-gitflow-50bf2038ccf7).  

下面是几种常见的几种 workflow:

- git flow 适合定期版本发布的产品
- github flow 适合代码与在线版本同步持续发布的产品
- gitlab flow 适合持续发布但在线版本落后于代码的产品

关于三者的对比, 可以查看这篇[博客](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html);

## 原则

- 尽早反馈: 尽可能早地发现问题, 反馈问题
- 有迹可循: 一切行为应当在网络上留下记录, 任务有 task tracker (jira), 代码有在线托管(github), 有在线的持续集成(circleci)
- 各行其是: reviewer 不应当需要本地起环境, QA 不应该坐在开发背后测试, 运维也不应该知道太多的代码细节
- 开箱即用: 架构上的细节不应该暴露给开发者, 开发者只需要关心自己的代码

## 特点

- 功能驱动, 需求是开发的起点，先有需求再有功能分支（feature branch）或者补丁分支（fix branch）。完成开发后，该分支就合并到主分支，然后被删除。
- 只存在一个主分支master
- 每个分支有自己的测试服务器
- 分支先验收再合并

![workflow](./workflow.png)

这个图片本身也是有迹可循的: 可以再这里[编辑](https://creately.com/diagram/jhr2fza71/dSZPWtriIQXpRYynsPGagvTiVo%3D)

![branches](http://luci.criosweb.ro/wp-content/uploads/2016/04/release-strategy.png)

## 步骤

### Create Branch
假如你现在要开发一个新需求/修复一个 bug, 你可能需要运行以下指令来在本地创建一个新分支:

```bash
git pull --rebase --autostash
git checkout master
git checkout -b feature/add-example-feature
# 如果是修复 bug, 那就是 git checkout -b fix/typo-in-example-feature
```
或者使用简写

```bash
git up
gco master
gco -b feature/add-example-feature
```
注: `gco` 相当于 `git checkout`, 如果使用的是自定义命令行工具 [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh), 就可以使用这些简写.  
注: `git up` 相当于 `pull --rebase --autostash`, 出自一个小工具[git-up](https://github.com/aanand/git-up), 可以执行 `git config --global alias.up 'pull --rebase --autostash'` 来获得这个自定义指令.

### Commits
当你完成了一部分工作, 你可能需要先把一部分修改 commit 起来

此时, [git-hooks](./git-hooks.md) 和 [lint](./lint.md) 会先帮助你修改一些简单的代码风格问题.

### Push Branch
当你开发完成之后, 需要先确保当前分支同步了最新的 master 分支, 再同步到远端, 这样可以优先在本地解决冲突

```
git up
git rebase master
git push --set-upstream origin feature/add-example-feature
```

在 push 之前, [git-hooks](./git-hooks.md) 和 test 会确保你本地测试可以通过.

注: 很多时候不必要的冲突都是忘记前两步导致的

### Pull Request
当你想要把一个分支合并到主分支上时, 就需要用到 Pull Request 简称 PR  
这一步就完全在 github 上面操作了, 具体可以看 [github 文档](https://help.github.com/articles/about-pull-requests/), 要注意的几点:

- 创建 PR 的时候好好起名字, 复杂的 PR 在 comment 中多写一些说明, 需求/bug是什么, 怎么实现的, 额外改动了什么.
- 提前创建还没完成的 feature branch 的 PR, 在名字前面加上 `[WIP]` 表示 `work in progress`
- 合并分支时, 在线上点击按钮来合并, 这样哪怕是 fast-forward 也会多出一个 merge commit, 方便以后 revert
- 合并分支时, 不要 squash commits, 留下完整的修改历史, 方便以后追溯历史

### Code Review
Code Review 就是让另一个程序员审查的你的代码, 检查功能是否实现, 是否有 BUG, 具体代码是否可读, 有无过度设计或者可复用性过差, 并给出相关修改意见.  
代码审查能保持整体代码风格的一致性, 理想状况下, 所有人写出的代码都是一个风格, 互相能看懂别人的代码.  
这一步是强制要求的, Code Review 通不过的情况下, 我们不允许合并PR  

对 Reviewer 来说, 有以下几点需要注意的:

- 如果不了解需求, 先阅读 PR 的名字和说明, 理解需求
- 一定要检查功能是否实现, 可以本地检查, 也可以通过自动部署的线上版本检查
- 给出的 comment 尽量加在必须要修改的那一行, 这样代码修改之后, 这一行 comment 就会自动过期
- 给出的 comment 要有建设性意见, 只说不好, 不说怎么办, 不如不说
- review 时不要过于苛刻, 过于追求完美, 比较浪费时间

### Release
当你合并了PR 之后, master 分支的代码和生产环境线上的版本就不一致了, 在需要的时候会进行发布.
发布要利用`git tag`, 持续集成将把每个 tag 认为是一个要部署的版本


