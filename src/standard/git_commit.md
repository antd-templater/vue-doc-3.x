---
aside: false
---

# Git Commit 规范介绍

## 社区流行的 commit 规范

目前社区流行的 commit 规范（来自于 Angular 团队的 commit 规范）

```bash
  # Commit Message 的三个部分：Header，Body 和 Footer, 注意两两之前空行间隔
  <type>(<scope>): <subject>
  <BLANK LINE>
  <body>
  <BLANK LINE>
  <footer>

  # Commit Message 之 Header 部分
  type（必需）--- 用于说明 commit 的类别
    a. init: 初始化
    b. feat: 新增feature
    c. fix: 修复bug
    d. docs: 仅仅修改了文档，如readme.md
    e. style: 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑
    f. refactor: 代码重构，没有新增功能或修复bug
    g. perf: 优化相关，如提升性能、用户体验等
    h. test: 测试用例，包括单元测试、集成测试
    i. chore: 改变构建流程、或者增加依赖库、工具等
    j. revert: 版本回滚
    k. merge：代码合并
    l. sync：同步分支

  scope（可选）--- 用于说明 commit 影响范围，可以通过 src 名下文件夹定义，例如
    a. all or *
    b. api
    c. components
    d. utils
    e. views
    f. ...

  subject（必需）--- commit 内容的简短描述，不超过70个字符


  # Commit Message 之 Body 部分（可选）
  a. 对本次 commit 修改内容的具体描述, 可以分为多行
  b. 描述为什么修改, 做了什么样的修改, 以及开发的思路等等


  # Commit Message 之 footer 部分（可选，仅处理 不兼容 或 关闭 Issue使用）
  a. 处理当前代码与上个版本不兼容, 以 BREAKING CHANGE: 开头进行详细描述
  b. 当前 commit 关闭 issue，如 Closes #123, #245, #992
```

## 社区 Git Commit Message 示范

基于社区流行的 commit Message 示范

```bash
  # Commit Message - Header + Body
  init: Vue3.x 开发规范首次提交

  a. 包含了项目指南、注释规范、Vue 规范、Git规范
  b. 目前支持了 Vue3.x, 兼容 Vue2.x


  # Commit Message - 仅 Header
  docs(README.md): Vue3.x 开发规范完善 VSCode 开发等
```
