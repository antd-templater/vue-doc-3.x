---
aside: false
---

# 组件概览

<br/>

**`v3.x 版本` => 适配支持 Ant Design Vue 3.x**  
**`v4.x 版本` => 适配支持 Ant Design Vue 4.x**

<div style="width: 100%; height: 1px;" />

| 组件        | 名称         | 描述                                                                                                 |
| :---------- | :----------- | ---------------------------------------------------------------------------------------------------- |
| SIcon       | 图标组件     | 支持 Props 中 type 字段，动态渲染 @ant-design/icons-vue 中图标，也支持 iconfont 配置                 |
| SIconSelect | 图标选择器   | 图标 Selection 下拉框，默认使用 @ant-design/icons-vue 中图标作为选项，也支持自定义选项               |
| SEditCell   | 单元格编辑框 | 表格 Cell 编辑框，支持 date-picker、input、select、textarea、tree-select、s-icon-select 等组件适配   |
| SEllipsis   | 文字省略提示 | 基于 ATooltip 的封装，支持实时计算内容是否超出父元素边界，是否需要文字省略和 Tooltip 提示            |
| STable      | 表格组件     | 不是 ATable 的封装，支持 列拉伸/拖拽/属性配置，单元格合并/卡槽定义，Checkbox/Radio、内置分页等功能   |
| SForm       | 表单组件     | 支持 Groups 配置渲染表单内容，也支持卡槽自定义组件。(Group: ARate、ARadio、AInput、ASwitch ...)      |
| STree       | 树形组件     | 基于 ATree 的封装，支持 link 模式 (子节点有一个被选中，该父节点在数据层也是选中的)，同时也扩展了 Api |
