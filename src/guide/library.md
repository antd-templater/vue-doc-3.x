---
aside: false
---

# Library-3.x 组件库

<br/>

基于 `Ant Design Vue` 部分组件的封装和扩展，提供更适配桌面端的高阶组件

- `v4.x 版本` => 适配支持 Ant Design Vue 4.x
- `v3.x 版本` => 适配支持 Ant Design Vue 3.x

## 如何安装?

:::details => 适配支持 Ant Design Vue 4.x {open}

```bash
pnpm add @antd-templater/library-3.x@^4.3.17
pnpm add @antd-templater/eslint-config@^1.0.6

```

:::

:::details => 适配支持 Ant Design Vue 3.x

```bash
pnpm add @antd-templater/library-3.x@^3.0.2

```

:::

## 哪些组件?

| 组件        | 名称         | 描述                                                                                                 |                                |
| :---------- | :----------- | ---------------------------------------------------------------------------------------------------- | :----------------------------- |
| SIcon       | 图标组件     | 支持 Props 中 type 字段，动态渲染 @ant-design/icons-vue 中图标，也支持 iconfont 配置                 | [详情 ↗](/library/icon)        |
| SIconSelect | 图标选择器   | 图标 Selection 下拉框，默认使用 @ant-design/icons-vue 中图标作为选项，也支持自定义选项               | [详情 ↗](/library/icon_select) |
| SEditCell   | 单元格编辑框 | 表格 Cell 编辑框，支持 date-picker、input、select、textarea、tree-selec、s-icon-select 等组件适配    | [详情 ↗](/library/edit_cell)   |
| SEllipsis   | 文字省略提示 | 基于 ATooltip 的封装，支持实时计算内容是否超出父元素边界，是否需要文字省略和 Tooltip 提示            | [详情 ↗](/library/ellipsis)    |
| STable      | 表格组件     | 不是 ATable 的封装，支持 列拉伸/拖拽/属性配置，单元格合并/卡槽定义，Checkbox/Radio、内置分页等功能   | [详情 ↗](/library/table)       |
| SForm       | 表单组件     | 支持 Groups 配置渲染表单内容，也支持卡槽自定义组件。(Group: ARate、ARadio、AInput、ASwitch ...)      | [详情 ↗](/library/form)        |
| STree       | 树形组件     | 借助 ATree 的 checkStrictly="true" 特性，重新实现了 `勾选/选中/展开/异步加载` 等逻辑，并扩展了其 API | [详情 ↗](/library/tree)        |

## 如何使用?

:::details 全局注册使用 {open}

::: code-group

```typescript:line-numbers [1. 全局注册]
import App from "./App.vue"
import AntdComponentPlugin from "@antd-templater/library-3.x"

createApp(App)
  .use(AntdComponentPlugin)
  .mount("#app")
```

```typescript:line-numbers [2. Vite配置]
import { defineConfig } from 'vitest/config'
import { AntdLibraryResolver } from '@antd-templater/library-3.x/resolver' // [!code highlight]
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      AutoImport({
        resolvers: [
          AntdLibraryResolver(), // [!code highlight]
        ],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
        dts: true,
      }),
    ],
  }
})
```

```typescript:line-numbers [3. TS配置]
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "types": [
      "@antd-templater/library-3.x/globals", // [!code highlight]
      "vite/client"
    ]
  }
}
```

```typescript:line-numbers [4. ESLint配置]
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import templater from '@antd-templater/eslint-config' // [!code highlight]

const flatArray = options => {
  return !Array.isArray(options)
    ? [options]
    : options
}

export default tseslint.config(
  {
    extends: [
      ...flatArray(eslint.configs.recommended),
      ...flatArray(tseslint.configs.recommended),
      ...flatArray(stylistic.configs['recommended-flat']),
      ...flatArray(pluginVue.configs['flat/recommended']),
      ...flatArray(templater.configs['flat/recommended']), // [!code highlight]
    ],
  },
)
```

```vue:line-numbers [5. SIcon 组件 (范例)]
<template>
  <section class="form-container">
    <SIcon type="StepBackwardOutlined">
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: "UsingSIcon",
  inheritAttrs: false
})
</script>
```

:::

:::details 局部注册使用

::: code-group

```vue:line-numbers [SIcon 组件 (范例)]
<template>
  <section class="form-container">
    <SIcon type="StepBackwardOutlined" />
  </section>
</template>

<script setup lang="ts">
import { SIcon } from "@antd-templater/library-3.x"

defineOptions({
  name: "UsingSIcon",
  inheritAttrs: false
})
</script>
```

:::
