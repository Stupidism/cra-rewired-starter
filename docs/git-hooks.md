# Git Hooks

我们使用 git hooks 来保证每次的代码 commit 和 push 保持我们要求的代码风格

## commit-msg
在每次填写 commit message 之后, 完成 commit 之前, git hooks 会自动运行以下指令来校验格式, 通过后才允许 commit 完成
`commitlint -e $GIT_PARAMS`

## pre-push

在每次 push 之前, git hooks 会自动运行以下指令, 通过后才允许 push
`npm run lint && npm run flow && CI=true npm run test`

### lint

运行对整个项目的 lint, 这是防止一些没有被 lint-staged 检测到的部分, 与新提交的代码共同组成违反 rules 的情况.

### flow

运行一次 flow 对静态类型的 check

### test

运行一次 非 watch 状态的测试

## pre-commit

在每次 commit 之前, git hooks 会自动运行以下指令, 通过后才允许 commit
`npm run lint:staged`

### lint:staged
`lint:staged`会按照以下配置执行 lint

```json
{
  "lint-staged": {
    "{src,config}/**/*.{js,jsx,json}": [
      "npm run lint:prettier -- --write",
      "git add"
    ],
    "src/**/*.{css,less}": [
      "npm run lint:stylelint -- --fix",
      "git add"
    ]
  }
}
```
`lint-staged` 保证了只会对修改过的文件进行处理
`--write` 和 `--fix` 会自动 fix 简单的代码风格问题
`git add` 会自动把 fix 之后的改动加入此次 commit

注意: `git add` 会导致失去 partially commit file (只 commit 文件的部分改动)的能力

## partially commit file

如果想要保留 partially commit file 的能力, 就要去掉 `git add`, 只要修改一下 `lint-staged`配置, 但同时 commit 过程将会变得冗杂

### lint-staged

```json
{
  "lint-staged": {
    "{src,config}/**/*.{js,jsx,json}": "npm run lint:prettier -- --write",
    "src/**/*.{css,less}": "npm run lint:stylelint -- --fix"
  }
}
```

### commit

推荐的 commit 流程:

```
$ git add src/components/Form/Form.js
# 或者只添加部分 git add -p src/components/Form/Form.js
$ npm run lint:staged
$ git add src/components/Form/Form.js
# 或者只添加部分 git add -p src/components/Form/Form.js
$ git commit
# 自动运行 lint
# 在编辑器中填写 commit message
```

如果你对自己的代码很自信, 可以直接 commit

```
$ git add src/components/Form/Form.js
# 或者只添加部分 git add -p src/components/Form/Form.js
$ git commit
# code auto-linted
# commit message input in editor
```

这样的话, 如果你 commit 之前写的代码有要被 prettier 优化的部分, 在 commit 完了之后可能还会有 diff, 遇到这种情况你的 commit 流程可能会变成:

```bash
$ git add src/components/Form/Form.js
$ git commit
# code auto-linted
# commit message input in editor

$ git diff
# src/components/Form/Form.js
# - const a = {key: 'value'};
# + const a = { key: 'value' };

$ git add src/components/Form/Form.js
$ git commit --amend
```

或者在 partially commit 的时候:

```
$ git add -p src/components/Form/Form.js
# select lines you want to commit in editor
$ git commit
# code auto-linted
# commit message input in editor

$ git diff
# src/components/Form/Form.js
# - const a = {key: 'value'};
# + const a = { key: 'value' };

$ git add -p src/components/Form/Form.js
# select lines you want to commit in editor
$ git commit --amend
```

如果你使用的是桌面工具, 则可能的流程是

1.  选择要 commit 的部分
2.  输入 commit message
3.  点击 commit
4.  检查要 commit 的部分是否还有 diff, 有的话要再次选择这部分并且 ammend 这个 commit
    4.1 如果你的桌面工具没有 amend 功能(如 github desktop), 可以尝试使用编辑器中的 git commit 功能(如 webstorm 或者 atom)或者使用命令行(指令详情见上)


## exception

看到这里, 我相信你已经理解以上所有限制的意义且不会刻意违反:

如果遇到短时间无法修复又需要紧急 push 或者 commit 的, 可以使用 `git push/commit --no-verify`
