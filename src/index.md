---
layout: home

hero:
  name: "Antd Templater"
  text: "后台管理系统模版"
  tagline: 基于 Vue3 + Ant Design Vue 组件库开发

  actions:
    - theme: brand
      text: 在线演示
      link: /redirect?antd-templater.${domain}.io/preview/vue3.x
      target: _blank

    - theme: alt
      text: 文档说明
      link: /guide/introduction

    - theme: alt
      text: 源码仓库
      link: /redirect?${domain}.com/antd-templater/vue-template-3.x
      target: _blank

  image:
    light:
      style: "max-width: 75%; max-height: none;"
      src: index.light.svg
      alt: antd-templater

    dark:
      style: "max-width: 75%; max-height: none;"
      src: index.dark.svg
      alt: antd-templater

features:
  - title: 特性
    details: "轻量化: 仅预设基础访问页, 没有冗余 Demo 页<br/>多主题: 支持亮色风格、暗色风格、暗黑风格等<br/>多布局: 侧边菜单、顶部菜单、混合菜单等导航<br>标签栏: 支持面包屑，支持多页签及其数据缓存<br/>现数据 - 由 `msw` + 预设的 mock data 提供<br/>"

  - title: '组件库 <a href="./library/quick.html" style="color: #bd34fe;">更多</a>'
    details: "SForm: 根据配置选项渲染各表单组件<br/>SEditCell: 单元格编辑 (输入框、下拉框等)<br/>STable: 多功能表格组件 (并非 ATable 的封装)<br/>STree: 对 ATree 封装, 扩展 link 模式和新 API <br/>SIcon: 根据 type 渲染 Icon, 也支持 iconfont<br/>"

  - title: '开发规范 <a href="./standard/develop_guide.html" style="color: #bd34fe;">详情</a>'
    details: "a. 提供 项目指南 (目录结构、依赖管理)<br/>b. 提供 Vue 组件规范 和 Vue 组件范式<br/>c. 提供 Git 分支规范、Git Commit 规范<br/>d. 提供 Git Commit 校验工具和辅助工具<br/>e. 提供 VSCode 推荐使用的插件和配置项<br/>"
---

## 快速使用

::: code-group

<!--@include: ./repository.md-->

```bash [安装依赖]
  # Enter project
  cd Antd-Template-Vue

  # Install denpendencies
  pnpm install

```

```bash [本地启动]
  # Start develop server
  pnpm dev

```

```bash [本地构建]
  # Run build create dist
  pnpm build

  # Start server and preview
  pnpm preview

```

:::
