---
aside: false
---

# 布局介绍

<br/>

**1. 页面级布局**

- UserLayout ------- 用户布局
- BlankLayout ------ 空白布局
- BasicLayout ------ 基础布局

**2. 基础布局 - Content 部分**

- PageFrame -------- iframe 布局
- RouteView -------- Route 布局
- PageView --------- Page 布局

## UserLayout

用户布局，属于页面级整体布局，它预设了用户布局样式，目前用于用户登录页面。

## BlankLayout

空白布局，属于页面级整体布局，它没有预设任何的样式，仅设有 \<RouterView/> 组件，一般在完全自定义页面时使用。

## BasicLayout

基础布局，属于页面级整体布局，它主要由 侧边栏(Layout.Sider) + 顶部导航栏(Layout.Header) + 内容区域(Layout.Content) 这几部分组成。

::: code-group

```markdown [功能板块]
- 顶部菜单导航
- 侧边菜单导航
- 内容区域路由
- 面包屑/多页签
- 个性化设置中心
```

```typescript [预设配置]
export type ThemeMode = "light" | "dark" | "realDark";
export type LayoutMode = "side" | "top" | "mix";
export type ContentWidth = "Fixed" | "Fluid";
export type ComponentSize = "small" | "middle" | "large" | undefined;

export default {
  themeWeak: false, // 弱色模式
  themeMode: "light" as ThemeMode, // 主题风格
  layoutMode: "side" as LayoutMode, // 整体布局方式
  contentWidth: "Fluid" as ContentWidth, // 内容区布局
  componentSize: "middle" as ComponentSize, // 组件尺寸
  multiTab: true, // 多标签页
  keepAlive: true, // 多标签缓存
  fixedHeader: true, // 固定顶部栏导航
  fixedSidebar: true, // 固定左侧菜单栏
  fixedHeaderTab: true, // 固定导航栏页签
  hideMixHeaderTab: true, // 隐藏混合导航页签
};
```

:::

## PageFrame

iframe 布局，属于基础布局中 Layout.Content 一部分，通过 \<iframe/> 标签为基础布局加载 **第三方页面** 提供支持和适配。[了解更多](/guide/routers#定义外部路由)

::: code-group

```typescript [范例 - 掘金首页]
import BasicLayout from "@/layout/BasicLayout";

export default {
  path: "/",
  name: "Basic",
  component: BasicLayout,
  children: [
    {
      name: "JueJin",
      path: "https://juejin.cn",
      component: "PageFrame",
      meta: {
        title: "掘金首页",
      },
    },
  ],
};
```

:::

## PageView

Page 布局，属于基础布局中 Layout.Content 一部分，通过 \<RouterView/> 组件为基础布局 Content 区域加载渲染 Vue 组件。同时该布局预设了容器样式，提供了 Layout.Content `动态宽高值` (这点在实现自适应高度非常好用)，我们一般也选择 BasicLayout + PageView 布局

::: code-group

```vue [范例 - 自适应高度]
<template>
  <section :style="{ height: appStore.layoutViewStyle.minHeight }">
    <!-- Render Height is appStore.layoutViewStyle.minHeight -->
    <div style="height: 100%;" />
  </section>
</template>

<script setup lang="ts">
import useAppStore from "@/store/app";
const appStore = useAppStore();
</script>
```

:::

## RouteView

Route 布局，属于基础布局中 Layout.Content 一部分，通过 \<RouterView /> 组件为基础布局 Content 区域加载渲染 Vue 组件。但是该布局没有任何样式 (很少会用到，我们一般选择 **PageView**)。
