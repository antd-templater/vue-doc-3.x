---
aside: false
---

# TypeScript 全局定义

什么是全局定义，即在项目中一处声明，任何 TS 文件中无需 import 导入即可使用。**Ant-Templater** 出于规范考虑，拟定了如下两类:

- 全局定义 - 项目级类型
- 全局定义 - 业务数据模型

## 项目级类型

-> 定义在 **./src/declare** 目录下，例如:

::: code-group

```typescript [ImportMeta.d.ts]
/* 扩展了 ImportMeta (新增了 .env 环境变量) */

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

```typescript [Global.d.ts]
/* 扩展了 Vue/JSX、Window 等 API */

import type { NativeElements, ReservedProps, VNode } from "vue";

declare global {
  namespace JSX {
    export interface Element extends VNode {}
    export interface IntrinsicElements extends NativeElements {
      [name: string]: any;
    }
    export interface IntrinsicAttributes extends ReservedProps {}
  }
}

declare global {
  interface Window {
    [api: string]: any;
  }
}
```

```typescript [Axios.d.ts]
/* 扩展了 Axios Sorter/Request/Response 类型 */

/**
 * 请求参数 - 排序
 */
declare type AxiosSorter = {
  field: string;
  value: string;
};

/**
 * 请求参数
 */
declare type AxiosRequestResult<T = any> = {
  action?: string;
  params?: T;
  sorter?: AxiosSorter[] | AxiosSorter;
  pageSize?: number;
  pageNo?: number;
};

/**
 * 响应数据
 */
declare type AxiosResponseResult<T = any> = {
  result: T;
  code: string | number | null | undefined;
  message: string | null | undefined;
};
```

```typescript [Pinia.d.ts]
/* 扩展了 Pinia 类型定义 (because the bug: TypeScript5.0+ moduleResolution bundler breaks types import) */

declare module "pinia-plugin-persist" {
  import { PiniaPluginContext } from "pinia";

  declare type Store = PiniaPluginContext["store"];

  export interface PersistStrategy {
    key?: string;
    paths?: string[];
    storage?: Storage;
  }

  export interface PersistOptions {
    strategies?: PersistStrategy[];
    enabled: true;
  }

  declare module "pinia" {
    interface DefineStoreOptionsBase {
      persist?: PersistOptions;
    }
  }

  export declare const updateStorage: (
    strategy: PersistStrategy,
    store: Store
  ) => void;
  declare const _default: ({ options, store }: PiniaPluginContext) => void;
  export default _default;
}
```

:::

## 业务数据模型

-> 定义在 **./src/model** 目录下，例如:

::: code-group

```typescript [User.d.ts]
/**
 * User Info
 */
declare interface UserInfo {
  userNo?: string | null;
  userName?: string | null;
  mobilePhone?: string | null;
  avatar?: string | null;
  postName?: string | null;
  role?: UserRole | null;
  orgId?: string | null;
  orgName?: string | null;
  deptName?: string | null;
  deptId?: string | null;
  dataFlag?: string | null;
  activity?: string | null;
}

/**
 * User Role
 */
declare interface UserRole {
  permissionList: Array<string>;
  permissions: Array<{
    roleId: string;
    permissionId: string;
    actionEntitySet: Array<{ action: string; describe: string }>;
    actionList: Array<string>;
  }>;
}
```

```typescript [Tree.d.ts]
/**
 * Value Children Tree
 */
declare type KeyValueChildrenTree = {
  key: string | number;
  value: string | number;
  children?: KeyValueChildrenTree;
};

declare type TextValueChildrenTree = {
  text: string | number;
  value: string | number;
  children?: TextValueChildrenTree;
};

declare type LabelValueChildrenTree = {
  label: string | number;
  value: string | number;
  children?: LabelValueChildrenTree;
};

declare type TitleValueChildrenTree = {
  title: string | number;
  value: string | number;
  children?: TitleValueChildrenTree;
};
```

:::
