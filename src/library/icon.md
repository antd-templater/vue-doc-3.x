# 图标组件 - SIcon

动态渲染 `@ant-design/icons-vue` 图标组件，也支持渲染 iconfont 图标

<style lang="less" scoped>
[code-runner-title] {
  width: 100%;
  height: 0;
  position: relative;

  h3 {
    width: 100%;
    height: 0;
    margin: 0;
    padding: 0;
    border: none;
    overflow: hidden;
    position: absolute;
    top: 60px;
  }
}
</style>

<script setup lang="ts">
import Base from '@/library/icon/Base.md'
import Iconfont from '@/library/icon/Iconfont.md'
import TwoToneColor from '@/library/icon/TwoToneColor.md'
</script>

## 演示

<div code-runner style="height: 273px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="基本用法">基本用法</h3>
  </div>
  <div style="padding: 1px;">
    <Base/>
  </div>
</div>

<div code-runner style="height: 273px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="多色图标">多色图标</h3>
  </div>
  <div style="padding: 1px;">
    <TwoToneColor/>
  </div>
</div>

<div code-runner style="height: 273px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="支持 iconfont">支持 iconfont</h3>
  </div>
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
