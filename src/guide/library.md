---
aside: false
---

# Library-3.x 组件库

<br/>

**`v3.x 版本` => 适配支持 Ant Design Vue 3.x**  
**`v4.x 版本` => 适配支持 Ant Design Vue 4.x**

## 哪些组件?

| 组件        | 名称           | 描述                                                                                                 |                                |
| :---------- | :------------- | ---------------------------------------------------------------------------------------------------- | :----------------------------- |
| SIcon       | 图标组件       | 支持 Props 中 type 字段，动态渲染 @ant-design/icons-vue 中图标，也支持 iconfont 配置                 | [详情 ↗](/library/icon)        |
| SIconSelect | 图标选择器     | 图标 Selection 下拉框，默认使用 @ant-design/icons-vue 中图标作为选项，也支持自定义选项               | [详情 ↗](/library/icon_select) |
| SEditCell   | 单元格编辑框   | 表格 Cell 编辑框，支持 date-picker、input、select、textarea、tree-selec、s-icon-select 等组件适配    | [详情 ↗](/library/edit_cell)   |
| SEllipsis   | 文字省略和提示 | 基于 ATooltip 的封装，支持实时计算内容是否超出父元素边界，是否需要文字省略和 Tooltip 提示            | [详情 ↗](/library/ellipsis)    |
| SForm       | 表单组件       | 支持 Groups 配置渲染表单内容，也支持卡槽自定义组件。(Group: ARate、ARadio、AInput、ASwitch ...)      | [详情 ↗](/library/form)        |
| STree       | 树形组件       | 基于 ATree 的封装，支持 link 模式 (子节点有一个被选中，该父节点在数据层也是选中的)，同时也扩展了 Api | [详情 ↗](/library/tree)        |
| STable      | 表格组件       | 不是 ATable 的封装，支持 列拉伸/拖拽/属性配置，单元格合并/卡槽定义，Checkbox/Radio、内置分页等功能   | [详情 ↗](/library/table)       |

## 如何使用?

:::details 局部注册使用 {open}

::: code-group

```vue:line-numbers [SIcon 组件 (范例)]
<template>
  <section class="form-container">
    <SIcon type="StepBackwardOutlined" />
  </section>
</template>

<script setup lang="ts">
import { SIcon } from "@antd-templater/library-3.x";

defineOptions({
  name: "UsingSIcon",
  inheritAttrs: false
});
</script>
```

:::

:::details 全局注册使用

::: code-group

```typescript:line-numbers [1. 全局注册]
import App from "./App.vue";
import AntdComponentPlugin from "@antd-templater/library-3.x";

createApp(App)
  .use(AntdComponentPlugin)
  .mount("#app");
```

```vue:line-numbers [2. SIcon 组件 (范例)]
<template>
  <section class="form-container">
    <SIcon type="StepBackwardOutlined">
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: "UsingSIcon",
  inheritAttrs: false
});
</script>
```

:::
