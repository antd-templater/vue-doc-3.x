---
aside: false
---

# 路由配置

**Antd-Templater** 使用 Vue-Router4.x 作为单页面应用(SPA) 的官方路由，其配置主要有两方面:

- 动态路由配置  
  -> 菜单路由

- 静态路由配置  
  -> 基础路由  
  -> 菜单路由

## TS 类型定义

::: code-group

```typescript [菜单路由]
export interface MenuRoute {
  sort?: number; // 菜单排序
  id?: string; // 路由 id
  key?: string; // 路由 key
  name: string; // 路由名称
  path: string; // 路由路径
  parentId?: string; // 路由父 id
  component?: any; // 路由组件 (Component Name or () => import("Component") or Component 实例)
  redirect?: string; // 路由重定向
  children?: MenuRoute[]; // 子菜单路由
  meta?: {
    icon?: string; // 菜单 icon
    title?: string; // 菜单 标题
    target?: string; // 菜单 target eg: <a target="_blank" src="xxx"/>
    hideChildInMenu?: boolean | "Y" | "N"; // 隐藏子菜单 (不在 BasicLayout 菜单导航中显示)
    hideInMenu?: boolean | "Y" | "N"; // 隐藏菜单 (不在 BasicLayout 菜单导航中显示)
    allowCache?: boolean | "Y" | "N"; // 缓存菜单路由 (前提：multiTab -> true and keepAlive -> true)
  };
}
```

```typescript [基础路由]
export interface BaseRoute {
  id?: string; // 路由 id
  key?: string; // 路由 key
  name: string; // 路由名称
  path: string; // 路由路径
  alias?: string; // 路由别名
  redirect?: string; // 路由重定向
  query?: Record<string, any>; // 路由 query 参数
  params?: Record<string, any>; // 路由 params 参数
  children?: Array<BaseRoute>; // 嵌套子路由
  component?: any; // 路由组件 (Component Name or () => import("Component") or Component 实例)
  meta?: {
    icon?: string; // 菜单 icon
    title?: string; // 菜单 标题
    target?: string; // 菜单 target eg: <a target="_blank" src="xxx"/>
  };
}
```

:::

## 动态路由配置

后台管理系统往往需要对一些菜单路由做权限上的控制和分派，这就需要菜单路由的动态配置，进而分配给拥有不同角色的用户。

- 菜单路由 - 目录 (eg. src/views/system)

  <img alt="菜单路由 - 目录" src="/route-system.png" style="border: solid 1px #cccccc; border-radius: 4px;">

  ::: code-group

  ```json [表单数据]
  {
    "sort": 1000000,
    "path": "",
    "icon": "CodepenOutlined",
    "title": "系统管理",
    "redirect": "",
    "parentId": "0",
    "component": "PageView",
    "resourceId": "27245863256459422",
    "resourceName": "system", // -> 路由 name
    "resourceType": "m",
    "hideChildInMenu": "N",
    "hideInMenu": "N",
    "allowCache": "Y",
    "activity": "Y"
  }
  ```

  ```json [ --> 菜单路由]
  {
    "sort": 1000000,
    "name": "system",
    "path": "",
    "redirect": "",
    "component": "PageView",
    "meta": {
      "icon": "CodepenOutlined",
      "title": "系统管理",
      "hideChildInMenu": "N",
      "hideInMenu": "N",
      "allowCache": "Y"
    }
  }
  ```

  :::

<div style="margin-bottom: 38px;"/>

- 菜单路由 - 组件 (eg. src/views/system/OrganizeManage.vue)

  <img alt="菜单路由 - 组件" src="/route-organize.png" style="border: solid 1px #cccccc; border-radius: 4px;">

  ::: code-group

  ```json [表单数据]
  {
    "sort": 1000100,
    "path": "",
    "icon": "CodepenOutlined",
    "title": "组织管理",
    "redirect": "",
    "parentId": "27245863256459422",
    "component": "OrganizeManage",
    "resourceId": "1127282136000102507",
    "resourceName": "OrganizeManage", // -> 路由 name
    "resourceType": "m",
    "hideChildInMenu": "N",
    "hideInMenu": "N",
    "allowCache": "Y",
    "activity": "Y"
  }
  ```

  ```json [ --> 菜单路由]
  {
    "sort": 1000100,
    "name": "OrganizeManage",
    "path": "/system/OrganizeManage",
    "redirect": "",
    "component": "OrganizeManage",
    "meta": {
      "icon": "CodepenOutlined",
      "title": "组织管理",
      "hideChildInMenu": "N",
      "hideInMenu": "N",
      "allowCache": "Y"
    }
  }
  ```

  :::

## 静态路由配置

除了动态路由配置，也会预设一些无需权限的基础路由，比如常见的 `用户登录页`、`用户注册页` 等。

- 基础路由 (非 BasicLayout - 子路由)

  ```typescript
  /* file -> src/router.constant.ts */

  import UserLayout from '@/layout/UserLayout'
  import defaultRouter from '@/configure/defaultRouter'
  import type { Route } from '@/router/generate-typing'

  interface defineRoute extends Route { sort?: number; }

  export const baseRoutes: defineRoute[] = defaultRouter.constantRoutes // 基础路由
  export const menuRoutes: defineRoute[] = defaultRouter.rootRoute.children // 菜单路由

  // 范例
  baseRoutes.push(
    {
      path: '/auth',
      redirect: '/auth/Login',
      component: UserLayout,
      children: [
        {
          path: 'Login',
          name: 'Login',
          component: () => import(`@/views/auth/Login.vue`),
          meta: { title: '系统登录' }
        }
      ]
    }
  )
  ```

<div style="margin-bottom: 38px;"/>

- 菜单路由 (是 BasicLayout - 子路由)

  ```typescript
  /* file -> src/router.constant.ts */

  import defaultRouter from '@/configure/defaultRouter'
  import type { Route } from '@/router/generate-typing'

  interface defineRoute extends Route { sort?: number; }

  export const baseRoutes: defineRoute[] = defaultRouter.constantRoutes // 基础路由
  export const menuRoutes: defineRoute[] = defaultRouter.rootRoute.children // 菜单路由

  // 范例
  menuRoutes.push({
    sort: 1010000,
    name: 'CustomComponent',
    path: '/custom/CustomComponent', // -> @/views/custom/CustomComponent.vue
    meta: {
      icon: 'CodepenOutlined',
      title: '自定义标题',
      hideInMenu: "Y", // 不在菜单导航栏中显示
    }
  })
  ```

## 定义外部路由

外部路由即可以加载 **第三方页面** 的路由，在上个章节中提到 **Ant-Templater** 支持在基础布局 (BasicLayout) 中 PageFrame 加载第三方页面。

<img alt="掘金" src="/route-juejin.png" style="border: solid 1px #cccccc; border-radius: 4px;">

<div style="margin-bottom: 38px;"/>

- **Ant-Templater** 已经预设了 外部路由 `externalRoute`, 可以在 Vue 组件中任意调用。

  ::: code-group

  ```typescript [外部路由 - 已预设]
  /* file -> src/configure/defaultRouter.ts */

  export const externalRoute = {
    key: "ExternalLink",
    name: "ExternalLink",
    path: "/external/link/:path(.*)?",
    component: PageFrame,
    meta: {
      title: "外部链接",
      match: "external",
      external: "",
      componentName: "ExternalLink",
      hideChildInMenu: true,
      hideInMenu: true,
      allowCache: true // 实践中，发现 iframe 并不能做到 路由缓存
    }
  };
  ```

  ```vue [如何在 Vue 组件中使用?]
  <template>
    <div class="section-container">
      <!-- Render Content -->
    </div>
  </template>

  <script setup lang="ts">
  import { useRouter } from "vue-router";
  const router = useRouter();

  // 新建标签页，前往加载 -> 掘金首页
  router.push({
    path: "/external/link",
    query: {
      title: "掘金首页",
      from: "https://juejin.cn"
    }
  });
  </script>
  ```

  :::

<div style="margin-bottom: 38px;"/>

- 有时候我们希望 `外部路由` 在菜单导航栏中显示，并实现 新建标签页 -> 加载第三方页面，则需要配置路由, 可参考如下

  ```typescript
  /* file -> src/router.constant.ts */

  import defaultRouter from '@/configure/defaultRouter'
  import type { Route } from '@/router/generate-typing'

  interface defineRoute extends Route { sort?: number; }

  export const baseRoutes: defineRoute[] = defaultRouter.constantRoutes // 基础路由
  export const menuRoutes: defineRoute[] = defaultRouter.rootRoute.children // 菜单路由

  // 范例: 菜单导航栏 -> 点击 -> 新建标签页 -> 掘金首页
  menuRoutes.push({
    sort: 1010000,
    name: '掘金',
    path: 'https://juejin.cn',
    component: 'PageFrame',
    meta: {
      icon: 'CodepenOutlined',
      title: '掘金首页'
    }
  })
  ```
