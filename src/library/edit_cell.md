# 单元格编辑框 - SEditCell

适配 auto-complete、date-picker、input、select、textarea、tree-select、s-icon-select 等组件

-> SEditCellInput  
-> SEditCellSelect  
-> SEditCellTextarea  
-> SEditCellSelectIcon  
-> SEditCellTreeSelect  
-> SEditCellDatePicker  
-> SEditCellAutoComplete

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
import Input from '@/library/editCell/Input.md'
import Select from '@/library/editCell/Select.md'
import Textarea from '@/library/editCell/Textarea.md'
import SelectIcon from '@/library/editCell/SelectIcon.md'
import TreeSelect from '@/library/editCell/TreeSelect.md'
import DatePicker from '@/library/editCell/DatePicker.md'
import AutoComplete from '@/library/editCell/AutoComplete.md'
import UseInSTable from '@/library/editCell/UseInSTable.md'
</script>

## 演示

<div code-runner style="height: 373px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="Input 输入框">Input 输入框</h3>
  </div>
  <div style="padding: 1px;">
    <Input/>
  </div>
</div>

<div code-runner style="height: 373px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="Select 选择框">Select 选择框</h3>
  </div>
  <div style="padding: 1px;">
    <Select/>
  </div>
</div>

<div code-runner style="height: 374px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="Textarea 文本框">Textarea 文本框</h3>
  </div>
  <div style="padding: 1px;">
    <Textarea/>
  </div>
</div>

<div code-runner style="height: 373px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="SelectIcon 选择框">SelectIcon 选择框</h3>
  </div>
  <div style="padding: 1px;">
    <SelectIcon/>
  </div>
</div>

<div code-runner style="height: 373px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="TreeSelect 选择框">TreeSelect 选择框</h3>
  </div>
  <div style="padding: 1px;">
    <TreeSelect/>
  </div>
</div>

<div code-runner style="height: 373px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="DatePicker 日期选择框">DatePicker 日期选择框</h3>
  </div>
  <div style="padding: 1px;">
    <DatePicker/>
  </div>
</div>

<div code-runner style="height: 373px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="AutoComplete 输入框">AutoComplete 输入框</h3>
  </div>
  <div style="padding: 1px;">
    <AutoComplete/>
  </div>
</div>

<div code-runner style="height: 379px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="With STable 表格单元格编辑">With STable 表格单元格编辑</h3>
  </div>
  <div style="padding: 1px;">
    <UseInSTable/>
  </div>
</div>

## API

### Props

#### SEditCell (通用)

| 参数                 | 说明                                            | 类型    |               默认值               |
| :------------------- | :---------------------------------------------- | :------ | :--------------------------------: |
| **text (v-model)**   | 输入值                                          | string  |                 -                  |
| **empty**            | 输入值 `text` 为空时，文本模式下的显示内容      | string  |                 -                  |
| **edit**             | 是否显示 `edit` icon                            | boolean |                true                |
| **check**            | 是否显示 `check` icon                           | boolean |                true                |
| **synced**           | 当输入值 `text` 值更改时，是否同步更新          | boolean |               false                |
| **opened**           | 默认打开 **编辑模式** 状态                      | boolean |               false                |
| **status (v-model)** | 监听状态，当值从 true -> false 时，关闭编辑模式 | boolean |               false                |
| **tooltip**          | 是否启用 `SEllipsis`                            | object  | \{ enable: true, ellipsis: false } |
| **disabled**         | 是否禁用                                        | boolean |               false                |
| **allowClear**       | 是否允许清除                                    | boolean |               false                |
| **placeholder**      | 输入框/选择框 提示文本                          | string  |                 -                  |
| **cellStyle**        | 单元框各部分样式 (详见下方 `cellStyle` 选项)    | object  |                 -                  |

#### SEditCellSelect

| 参数                 | 说明                                          | 类型                                           |           默认值           |
| :------------------- | :-------------------------------------------- | :--------------------------------------------- | :------------------------: |
| **options**          | Options 选项数据                              | Array\<{value, label, [disabled, key, title]}> |             []             |
| **showArrow**        | 是否显示下拉小箭头                            | boolean                                        |            true            |
| **showSearch**       | 配置是否可搜索                                | boolean                                        |            true            |
| **fieldNames**       | 自定义节点 label、value、options 的字段       | object                                         | \{ label, value, options } |
| **optionFilterProp** | 搜索时过滤对应的 option 属性，不支持 children | string                                         |             -              |

#### SEditCellTextarea

| 参数         | 说明                                                              | 类型              | 默认值 |
| :----------- | :---------------------------------------------------------------- | :---------------- | :----: |
| **autoSize** | 自适应内容高度，可设置 boolean 或对象 \{ minRows: 2, maxRows: 6 } | boolean \| object |   -    |

#### SEditCellSelectIcon

| 参数                 | 说明                                    | 类型                |           默认值           |
| :------------------- | :-------------------------------------- | :------------------ | :------------------------: |
| **iconStyle**        | 设置 `SIcon` style                      | string <br/> object |             -              |
| **iconClass**        | 设置 `SIcon` class                      | string <br/> object |             -              |
| **iconPrefix**       | 设置 `SIcon` 的 iconfont icon 标识符    | string              |             -              |
| **iconfontUrl**      | 设置 `SIcon` 的 iconfont url 地址       | string              |             -              |
| **optionFilterProp** | 搜索时过滤对应 option 属性              | string              |             -              |
| **optionLabelProp**  | 回填到选择框的 Option 的属性值          | string              |             -              |
| **fieldNames**       | 自定义节点 label、value、options 的字段 | object              | \{ label, value, options } |
| **showSearch**       | 配置是否可搜索                          | boolean             |            true            |
| **showArrow**        | 是否显示下拉小箭头                      | boolean             |            true            |

#### SEditCellTreeSelect

| 参数                     | 说明                                    | 类型                             |           默认值           |
| :----------------------- | :-------------------------------------- | :------------------------------- | :------------------------: |
| **treeData**             | treeNodes 数据                          | Array\<{value, label, children}> |             []             |
| **showArrow**            | 是否显示下拉小箭头                      | boolean                          |            true            |
| **showSearch**           | 配置是否可搜索                          | boolean                          |            true            |
| **fieldNames**           | 自定义节点 label、value、options 的字段 | object                           | \{ label, value, options } |
| **treeNodeFilterProp**   | 输入项过滤对应的 treeNode 属性          | string                           |          'value'           |
| **treeDefaultExpandAll** | 默认展开所有节点                        | boolean                          |            true            |

#### SEditCellDatePicker

| 参数              | 说明             | 类型                                                                     | 默认值 |
| :---------------- | :--------------- | :----------------------------------------------------------------------- | :----: |
| **mode**          | 日期面板的状态   | time \| date \| month \| year \| decade                                  |   -    |
| **picker**        | 设置选择器类型   | date \| week \| month \| quarter \| year                                 |   -    |
| **format**        | 设置日期格式     | [formatType](https://www.antdv.com/components/date-picker-cn#formattype) |  true  |
| **showTime**      | 增加时间选择功能 | object \| boolean                                                        |   -    |
| **valueFormat**   | 绑定值的格式     | string [具体格式](https://day.js.org/docs/zh-CN/display/format)          |   -    |
| **inputReadOnly** | 设置输入框为只读 | boolean                                                                  | false  |

#### SEditCellAutoComplete

| 参数             | 说明               | 类型                                               | 默认值 |
| :--------------- | :----------------- | :------------------------------------------------- | :----: |
| **options**      | Options 选项数据   | Array\<{ value, label }>                           |   []   |
| **filterOption** | 根据输入项进行筛选 | boolean \| (inputValue: string, option) => boolean |   -    |

#### 关于 cellStyle 选项

| 参数             | 说明                            | 类型   | 默认值 |
| :--------------- | :------------------------------ | :----- | :----: |
| **container**    | 设置 容器部分 样式              | object |   -    |
| **check**        | 设置 check icon 样式            | object |   -    |
| **edit**         | 设置 edit icon 样式             | object |   -    |
| **inputWrapper** | 设置 输入框/选择框 wrapper 样式 | object |   -    |
| **input**        | 设置 输入框/选择框 样式         | object |   -    |
| **textWrapper**  | 设置 文本模式 样式              | object |   -    |

### Emits

#### SEditCell (通用)

| 事件        | 说明                                     | 类型                                        |
| :---------- | :--------------------------------------- | :------------------------------------------ |
| **edit**    | 打开 编辑模式 时                         | (editable: boolean; value: string;) => void |
| **blur**    | 输入框/选择框 失去焦点时                 | (editable: boolean; value: string;) => void |
| **focus**   | 输入框/选择框 获取焦点时                 | (editable: boolean; value: string;) => void |
| **change**  | 输入框/选择框 值变化时                   | (editable: boolean; value: string;) => void |
| **confirm** | 输入框/选择框 确认提交 (点击 check 图标) | (editable: boolean; value: string;) => void |
