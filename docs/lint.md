# Lint

我们使用 prettier 和 stylelint 来保证代码风格的一致性.

## 常用指令

- `npm run lint`: lint 整个 `src/` 内的 js 和 less 文件
  - `npm run lint:fix`: 自动 fix 简单的代码风格问题

- `npm run lint:staged`: lint 所有 staged(即被 `git add` 了, 在`git status`中显示 `to be commited`且为绿色的) 的 js 和 less 文件 

- `npm run lint:js`: lint 整个 `src/` 内的 js 文件, `npm run lint` 就是调用的这个指令
  - `npm run lint:js -- -- --write`: 类推可知
  - `npm run lint:css`: 类推可知
  - `npm run lint:css -- -- --fix`: 类推可知

- `npm run lint:prettier "path/**/*/to/file.js"`: lint 指定的文件或者匹配此正则的文件
  - `npm run lint:prettier "path/**/*/to/file" -- --write`: 类推可知
  - `npm run lint:stylelint "path/**/*/to/file.less"`: 类推可知
  - `npm run lint:stylelint "path/**/*/to/file.less" -- --fix`: 类推可知