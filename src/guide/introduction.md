---
aside: false
---

# 快速上手

## 简介

**Antd-Templater** 是一个基于 TypeScript + Vue3.x + Pinia + Ant-Design-Vue4.x + Vite 等技术栈，为开发中大型后台管理系统而提供开箱即用的解决方案，支持动态主题(Design Token)、动态菜单配置、路由权限校验、数据持久化储存，同时也提供完备的 TypeScript + ESLint + Volar 格式化和规范。

- 轻量化: 仅预设基础访问页, 没有冗余 Demo 页 [<span style="font-size: 15px">(详情)</span>](../standard/develop_guide.html#目录结构)
- 多主题: 支持亮色风格、暗色风格、暗黑风格等
- 多布局: 侧边菜单、顶部菜单、混合菜单等导航
- 标签栏: 支持面包屑，支持多页签及其数据缓存
- 现数据: 由 `msw` + 预设的 mock data 提供

## 技术栈

本项目需要一定前端基础知识，以便能处理一些常见的问题。建议在开发前先了解以下内容，这会非常有帮助:

- [Vite 文档](https://cn.vitejs.dev/)
- [Vue3 API](https://cn.vuejs.org/api/)
- [Vue3 文档](https://cn.vuejs.org/)
- [Pinia 文档](https://pinia.vuejs.org/)
- [Vitest 文档](https://cn.vitest.dev/guide/)
- [Rollup 文档](https://rollupjs.org/introduction/)
- [TypeScript 文档](https://www.typescriptlang.org/zh/docs/)
- [Ant Design Vue 文档](https://antdv.com/docs/vue/introduce-cn)
- [Vue2 迁移到 Vue3 指南](https://v3-migration.vuejs.org/zh/)

## 开发环境

- Pnpm 版本: `>=7`
- Node 版本: `>=18.0.0`

## 如何使用?

::: code-group

<!--@include: ../repository.md-->

```bash [安装依赖]
  # Enter project
  cd Antd-Templater

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

## 游览器支持

<!--@include: ../_/guide/browsers.md-->
