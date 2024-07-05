# 图标选择器 - SIconSelect

基于 `SIcon` 和 `ASelect` 封装，默认使用 `@ant-design/icons-vue` 图标，也支持自定义选项

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
import Base from '@/library/iconSelect/Base.md'
import Custom from '@/library/iconSelect/Custom.md'
import Iconfont from '@/library/iconSelect/Iconfont.md'
</script>

## 演示

<div code-runner style="height: 428px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="基本用法">基本用法</h3>
  </div>
  <div style="padding: 1px;">
    <Base/>
  </div>
</div>

<div code-runner style="height: 428px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="支持 iconfont">支持 iconfont</h3>
  </div>
  <div style="padding: 1px;">
    <Iconfont/>
  </div>
</div>

<div code-runner style="height: 428px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="自定义 Icons">自定义 Icons</h3>
  </div>
  <div style="padding: 1px;">
    <Custom/>
  </div>
</div>

## API

### Props

| 参数                 | 说明                                       | 类型                                              | 默认值 |
| :------------------- | :----------------------------------------- | :------------------------------------------------ | :----: |
| **style**            | 设置 组件 style                            | string <br/> object                               |   -    |
| **class**            | 设置 组件 class                            | string <br/> object                               |   -    |
| **iconStyle**        | 设置 `SIcon` style                         | string <br/> object                               |   -    |
| **iconClass**        | 设置 `SIcon` class                         | string <br/> object                               |   -    |
| **iconPrefix**       | 设置 `SIcon` 的 iconfont icon 标识符       | string                                            |   -    |
| **iconfontUrl**      | 设置 `SIcon` 的 iconfont url 地址          | string                                            |   -    |
| **optionFilterProp** | 搜索时过滤对应 option 属性                 | string                                            |   -    |
| **optionLabelProp**  | 回填到选择框的 Option 的属性值             | string                                            |   -    |
| **placeholder**      | 选择框默认提示文字                         | string                                            |   -    |
| **showSearch**       | 配置是否可搜索                             | boolean                                           |  true  |
| **allowClear**       | 支持清除                                   | boolean                                           |  true  |
| **showArrow**        | 是否显示下拉小箭头                         | boolean                                           |  true  |
| **multiple**         | 是否设置为多选 (即 value 值类型为 Array)   | boolean                                           | false  |
| **disabled**         | 是否禁用                                   | boolean                                           | false  |
| **options**          | Options 数据 默认使用 `icons-vue` 图标选项 | SIconSelectOption[]                               |   -    |
| **value (v-model)**  | 指定当前选中的条目                         | string <br/> number <br/> string[] <br/> number[] |   -    |
| **mode**             | 设置模式为多选或标签                       | 'multiple' <br/> 'tags'                           |   -    |
| **size**             | 组件大小                                   | 'large' <br/> 'middle' <br/> 'small'              |   -    |

### Emits

| 事件       | 说明                                | 类型                                       |
| :--------- | :---------------------------------- | :----------------------------------------- |
| **change** | 选中 option，或 input 的 value 变更 | (value: any, option: any \| any[]) => void |
| **search** | 文本框值变化时                      | (value: string) => void                    |
| **blur**   | 失去焦点时                          | (event: Event) => void                     |
| <br/>      |                                     |                                            |
| <br/>      |                                     |                                            |

### Definer

| 定义                   | 说明                                                      |
| :--------------------- | :-------------------------------------------------------- |
| **iconOptionsDefiner** | 辅助定义 Props `options` 选项，提供 TypeScript 提示和校验 |
| <br/>                  |                                                           |
| <br/>                  |                                                           |
