---
aside: false
---

# 快速开始

基于 `Ant Design Vue` 部分组件的封装和扩展，提供更适配桌面端的高阶组件

## 安装

:::details => 适配支持 Ant Design Vue 4.x {open}

```bash
pnpm add @antd-templater/library-3.x@^4.3.8

```

:::

:::details => 适配支持 Ant Design Vue 3.x

```bash
pnpm add @antd-templater/library-3.x@^3.0.2

```

:::

## 如何使用

:::details 全局注册使用 {open}

::: code-group

```typescript:line-numbers [全局注册]
import App from "./App.vue"
import AntdComponentPlugin from "@antd-templater/library-3.x"

createApp(App)
  .use(AntdComponentPlugin)
  .mount("#app")
```

```vue:line-numbers [-> 范例 SForm]
<template>
  <section class="form-container">
    <SForm
      v-model="model"
      :groups="groups"
    />
  </section>
</template>

<script setup lang="ts">
import { formGroupsDefiner } from '@antd-templater/library-3.x'

defineOptions({
  name: 'TestForm',
  inheritAttrs: false,
})

const model: Ref<any> = ref({})
const groups = formGroupsDefiner([
  {
    type: 'AInput',
    slot: 'title',
    field: 'title',
    label: '名称',
    props: {
      placeholder: '请输入名称',
    },
  },
])
</script>
```

:::

:::details 自动按需导入使用

::: code-group

```typescript:line-numbers [自动导入]
/* in vite.config.ts */

import { defineConfig } from "vitest/config"
import { AntdLibraryResolver } from '@antd-templater/library-3.x/resolver' // [!code highlight]
import AutoComponents from "unplugin-vue-components/vite"

export default defineConfig(() => {
  return {
    plugins: [
      AutoComponents({
        resolvers: [
          AntdLibraryResolver(), // [!code highlight]
        ],
      }),
    ],
  }
})
```

```vue:line-numbers [-> 范例 SForm]
<template>
  <section class="form-container">
    <SForm
      v-model="model"
      :groups="groups"
    />
  </section>
</template>

<script setup lang="ts">
import { formGroupsDefiner } from '@antd-templater/library-3.x'

defineOptions({
  name: 'TestForm',
  inheritAttrs: false,
})

const model: Ref<any> = ref({})
const groups = formGroupsDefiner([
  {
    type: 'AInput',
    slot: 'title',
    field: 'title',
    label: '名称',
    props: {
      placeholder: '请输入名称',
    },
  },
])
</script>
```

:::

:::details 手动按需导入使用

::: code-group

```vue:line-numbers [范例 SForm]
<template>
  <section class="form-container">
    <SForm
      v-model="model"
      :groups="groups"
    />
  </section>
</template>

<script setup lang="ts">
import { SForm } from '@antd-templater/library-3.x' // [!code highlight]
import { formGroupsDefiner } from '@antd-templater/library-3.x' // [!code highlight]

defineOptions({
  name: 'TestForm',
  inheritAttrs: false,
})

const model: Ref<any> = ref({})
const groups = formGroupsDefiner([
  {
    type: 'AInput',
    slot: 'title',
    field: 'title',
    label: '名称',
    props: {
      placeholder: '请输入名称',
    },
  },
])
</script>
```

:::

## 提示和辅助 Definer

在 **SForm 范例** 中，我们为了在定义 `groups` 时有良好的 TS 支持和提示，手动导入并使用 `formGroupsDefiner` 辅助。但能否自动按需导入呢？答案是可以的，需要配置如下:

::: details ESlint => `@antd-templater/eslint-config`

```typescript
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";
import pluginVue from "eslint-plugin-vue";
import stylistic from "@stylistic/eslint-plugin";
import templater from "@antd-templater/eslint-config"; // [!code highlight]

const flatArray = (options) => {
  return !Array.isArray(options) ? [options] : options;
};

export default tseslint.config({
  extends: [
    ...flatArray(eslint.configs.recommended),
    ...flatArray(tseslint.configs.recommended),
    ...flatArray(stylistic.configs["recommended-flat"]),
    ...flatArray(pluginVue.configs["flat/recommended"]),
    ...flatArray(templater.configs["flat/recommended"]), // [!code highlight]
  ],
});
```

:::

::: details TypeScript => `@antd-templater/library-3.x/globals`

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "types": ["@antd-templater/library-3.x/globals"] // [!code highlight]
  }
}
```

:::

::: details unplugin-auto-import => `@antd-templater/library-3.x/resolver` (only v4.x+)

```typescript
/* Can automatically import Definder. eg: formGroupsDefiner */

import { defineConfig } from "vitest/config";
import { AntdLibraryResolver } from "@antd-templater/library-3.x/resolver"; // [!code highlight]
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig(() => {
  return {
    plugins: [
      AutoImport({
        resolvers: [AntdLibraryResolver()], // [!code highlight]
        eslintrc: {
          enabled: true,
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true,
        },
        dts: true,
      }),
    ],
  };
});
```

:::

## 提供哪些 Definer?

::: details `@antd-templater/library-3.x` (only v4.x+) {open}

::: code-group

```md [STable]
- tableSorterDefiner
- tableScrollDefiner
- tableStickyDefiner
- tableSourcesDefiner
- tableSummarysDefiner
- tableColumnsDefiner
- tablePaginateDefiner
- tableLoadDataDefiner
- tableResponserDefiner
- tableEmitSorterDefiner
- tableEmitSelectDefiner
- tableEmitExpandDefiner
- tableEmitPageChangeDefiner
- tableEmitPageSizeChangeDefiner
- tableCustomHeaderRowAttrsDefiner
- tableCustomBodyerRowAttrsDefiner
- tableCustomFooterRowAttrsDefiner
- tableCustomBodyerRowStatesDefiner
- tableCustomHeaderCellRenderDefiner
- tableCustomBodyerCellRenderDefiner
- tableCustomFooterCellRenderDefiner
```

```md [STree]
- treeDataDefiner
- treeLoadDataDefiner
- treeEmitCheckDefiner
- treeEmitSelectDefiner
- treeEmitExpandDefiner
- treeEmitChangeDefiner
- treeDropHandlerDefiner
- treeReplaceFieldsDefiner
```

```md [SForm]
- formValidator
- formGridDefiner
- formRulesDefiner
- formGroupsDefiner
```

```md [SIconSelect]
- iconOptionsDefiner
```

:::

## 浏览器兼容性

<!--@include: ../_/guide/browsers.md-->
