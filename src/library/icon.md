# 图标组件 - SIcon

动态渲染 `@ant-design/icons-vue` 图标组件，也支持渲染 iconfont 图标

<style lang="less" scoped>
h3[hide] {
  width: 100%;
  height: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border: none;
}

h3 + table {
  display: table;
  width: 100%;
}

h3 + table tr {
  background-color: var(--vp-c-bg) !important;
}
</style>

<script setup lang="ts">
  import Base from '@/library/icon/Base.md'
  import Iconfont from '@/library/icon/Iconfont.md'
  import TwoToneColor from '@/library/icon/TwoToneColor.md'
</script>

## 演示

<div style="min-height: 268px">
  <h3 id="基本用法" hide>基本用法</h3>
  <div style="padding: 1px;">
    <Base/>
  </div>
</div>

<div style="min-height: 268px">
  <h3 id="多色图标" hide>多色图标</h3>
  <div style="padding: 1px;">
    <TwoToneColor/>
  </div>
</div>

<div style="min-height: 268px">
  <h3 id="支持 iconfont" hide>支持 iconfont</h3>
  <div style="padding: 1px;">
    <Iconfont/>
  </div>
</div>

## API

### Props

| 参数             | 说明                                      | 类型    | 默认值 |
| :--------------- | :---------------------------------------- | :------ | :----: |
| **type**         | 根据类型渲染 `@ant-design/icons-vue` 图标 | string  |   -    |
| **spin**         | 是否有旋转动画                            | boolean | false  |
| **rotate**       | 图标旋转角度                              | number  |   -    |
| **iconPrefix**   | iconfont icon 标识符                      | string  |   -    |
| **iconfontUrl**  | iconfont url 地址                         | string  |   -    |
| **twoToneColor** | 仅适用双色图标, 设置图标主要颜色          | string  |   -    |
