---
aside: false
---

# Environment 环境变量

在前端项目中，我们通常使用 **.env.xxx** 文件来配置运行在不同环境下的变量定义。

| 文件                       | 描述                                | 脚本                       |
| :------------------------- | :---------------------------------- | :------------------------- |
| **.env**                   | 通用环境 (可以上传 远端 git 库)     |                            |
| **.env.development**       | 本地环境 (可以上传 远端 git 库)     | pnpm run dev               |
| **.env.production**        | 正式环境 (可以上传 远端 git 库)     | pnpm run build             |
| **.env.test**              | 测试环境 (可以上传 远端 git 库)     | pnpm run build --mode test |
| -                          | -                                   | -                          |
| **.env.local**             | 通用环境 (仅本地启用，无法上传共享) |                            |
| **.env.development.local** | 本地环境 (仅本地启用，无法上传共享) | pnpm run dev               |
| **.env.production.local**  | 正式环境 (仅本地启用，无法上传共享) | pnpm run build             |
| **.env.test.local**        | 测试环境 (仅本地启用，无法上传共享) | pnpm run build --mode test |

## 预设变量

- `VITE_APP_TEST_ENV` --> 测试环境: test env
- `VITE_APP_API_BASE` --> 接口基础路径: api base
- `VITE_APP_PAGE_BASE` --> 页面资源基础路径: page base
- `VITE_APP_ROUTER_BASE` --> 路由器基础路径: router base
- `VITE_APP_ROUTER_HASH` --> 路由 hash 模式: WebHashHistory
- `VITE_APP_HIDDEN_SETTINGS` --> 隐藏应用设置中心: hidden layout settings

## 类型定义

::: details TS 类型定义 {open}

::: code-group

```typescript [ImportMeta.d.ts]
/**
 * import.meta
 */
declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/**
 * import.meta.env
 */
declare interface ImportMetaEnv {
  readonly VITE_APP_TEST_ENV: string;
  readonly VITE_APP_API_BASE: string;
  readonly VITE_APP_PAGE_BASE: string;
  readonly VITE_APP_ROUTER_BASE: string;
  readonly VITE_APP_ROUTER_HASH: string;
  readonly VITE_APP_HIDDEN_SETTINGS: string;
}
```

```typescript [presetEnvironment.ts]
/**
 * @AppDevEnv vite 内置属性 --- 开发环境
 * @AppProdEnv vite 内置属性 --- 正式环境
 * @AppTestEnv vite 自定义属性 --- 测试环境
 * @AppApiBase vite 自定义属性 --- 接口基础路径: api base
 * @AppPageBase vite 自定义属性 --- 页面资源基础路径: page base
 * @AppRouterBase vite 自定义属性 --- 路由器基础路径: router base
 * @AppRouterUseHash vite 自定义属性 --- 路由 hash 模式: WebHashHistory
 * @AppHiddenSettings vite 自定义属性 --- 隐藏应用设置中心: hidden layout settings
 */
const AppDevEnv = bool(import.meta.env.DEV);
const AppProdEnv = bool(import.meta.env.PROD);
const AppTestEnv = bool(import.meta.env.VITE_APP_TEST_ENV || "");
const AppApiBase = format(import.meta.env.VITE_APP_API_BASE || "");
const AppPageBase = format(import.meta.env.VITE_APP_PAGE_BASE || "");
const AppRouterBase = format(import.meta.env.VITE_APP_ROUTER_BASE || "");
const AppRouterUseHash = bool(import.meta.env.VITE_APP_ROUTER_HASH || "");
const AppHiddenSettings = bool(import.meta.env.VITE_APP_HIDDEN_SETTINGS || "");

export default {
  AppDevEnv,
  AppProdEnv,
  AppTestEnv,
  AppApiBase,
  AppPageBase,
  AppRouterBase,
  AppRouterUseHash,
  AppHiddenSettings,
};
```

:::

## 如何使用

::: details 在 src 开发中引用 --> 例 src/router.ts 定义路由器

```typescript:line-numbers
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import { createWebHashHistory } from "vue-router";
import { AppRouterBase, AppRouterUseHash } from "@/configure/presetEnvironment"; // [!code highlight]
import { baseRoutes } from "@/router.constant";
import useAppStore from "@/store/app";

export default createRouter({
  routes: baseRoutes as any,

  history: AppRouterUseHash // [!code highlight]
    ? createWebHashHistory(AppRouterBase) // [!code highlight]
    : createWebHistory(AppRouterBase), // [!code highlight]

  scrollBehavior: (to, _, position) => {
    const app = useAppStore();
    const multiTab = app.multiTab;
    const keepAlive = app.keepAlive;
    const isAllowCache = to.meta.allowCache !== false;

    return !multiTab || !keepAlive || !isAllowCache || !position
      ? { top: 0, left: 0 }
      : position;
  },
});
```

:::

::: details 在 vite 配置中使用 --> 例 vite.config.ts 定义 base 选项

```typescript:line-numbers
import { loadEnv } from "vite";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  const cwd = process.cwd(); // [!code highlight]
  const env = loadEnv(mode, cwd); // [!code highlight]
  const base = env.VITE_APP_PAGE_BASE || "/"; // [!code highlight]

  return {
    root: cwd,
    base: base,

    plugins: [
      VueJsx(),
      Vue({
        script: {
          defineModel: true,
          propsDestructure: true
        },
      }),
    ],
  };
});
```

:::

::: details **当 项目部署到 `/previews/vue3.x` 路径下时，可配置如下**

- VITE_APP_PAGE_BASE = /previews/vue3.x
- VITE_APP_ROUTER_BASE = /previews/vue3.x

:::
