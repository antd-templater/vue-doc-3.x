# 文字省略提示 - SEllipsis

基于 ATooltip 封装，支持实时计算内容是否超出父元素边界，是否文字省略和 Tooltip 提示

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
import Base from '@/library/ellipsis/Base.md'
import Title from '@/library/ellipsis/Title.md'
import Trigger from '@/library/ellipsis/Trigger.md'
</script>

## 演示

<div code-runner style="height: 393px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="基本用法">基本用法</h3>
  </div>
  <div style="padding: 1px;">
    <Base/>
  </div>
</div>

<div code-runner style="height: 393px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="自定义 title">自定义 title</h3>
  </div>
  <div style="padding: 1px;">
    <Title/>
  </div>
</div>

<div code-runner style="height: 393px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="打开方式 trigger">打开方式 trigger</h3>
  </div>
  <div style="padding: 1px;">
    <Trigger/>
  </div>
</div>

## API

### Props

| 参数                | 说明                                        | 类型           | 默认值 |
| :------------------ | :------------------------------------------ | :------------- | :----: |
| **open**            | 手动控制浮层                                | boolean        |   -    |
| **title**           | 提示文字内容                                | string \| slot |   -    |
| **color**           | 背景颜色                                    | string         |   -    |
| **trigger**         | 触发行为, `hover` \| `focus` \| `click` ... | string         | hover  |
| **inspect**         | 是否实时计算内容是否超出父元素边界          | boolean        |  true  |
| **tooltip**         | 是否启用                                    | boolean        |  true  |
| **ellipsis**        | 是否文字省略                                | boolean        | false  |
| **placement**       | 气泡框 `Tooltip` 位置                       | string         | 'top'  |
| **mouseEnterDelay** | 鼠标移入后延时多少才显示 Tooltip，单位：秒  | number         |  0.3   |
| **mouseLeaveDelay** | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒  | number         |  0.1   |

### Slots

| 插槽名      | 插槽说明     | 插槽参数 |
| :---------- | :----------- | :------- |
| **default** | 默认卡槽     | -        |
| **title**   | 提示文本卡槽 | -        |
| <br/>       |              |          |
