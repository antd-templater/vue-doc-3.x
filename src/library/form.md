# 表单组件 - SForm

通过 Groups 配置渲染表单内容，当然也支持卡槽自定义组件。 (目前 Groups 已支持的表单组件如下)

ARate、  
ASlider、  
ASwitch、  
ASelect、ATreeSelect、  
ACascader、AAutoComplete、  
ARadioGroup、ACheckboxGroup、  
ADatePicker、AYearPicker、AMonthPicker、  
AQuarterPicker、AWeekPicker、ATimePicker、ARangePicker、  
AInput、AInputSearch、AInputNumber、AInputPassword、AInputTextarea

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
import Base from '@/library/form/Base.md'
import Group from '@/library/form/Group.md'
import Check from '@/library/form/Check.md'
import GroupSlot from '@/library/form/GroupSlot.md'
import ComponentSlot from '@/library/form/ComponentSlot.md'
</script>

## 演示

<div code-runner style="height: 398px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="基本用法">基本用法</h3>
  </div>
  <div style="padding: 1px;">
    <Base/>
  </div>
</div>

<div code-runner style="height: 1315px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表单分组">表单分组</h3>
  </div>
  <div style="padding: 1px;">
    <Group/>
  </div>
</div>

<div code-runner style="height: 603px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表单校验">表单校验</h3>
  </div>
  <div style="padding: 1px;">
    <Check/>
  </div>
</div>

<div code-runner style="height: 531px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="自定义分组">自定义分组</h3>
  </div>
  <div style="padding: 1px;">
    <GroupSlot/>
  </div>
</div>

<div code-runner style="height: 607px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="自定义组件">自定义组件</h3>
  </div>
  <div style="padding: 1px;">
    <ComponentSlot/>
  </div>
</div>

## API

### Props

#### SForm Props

| 参数                | 说明                                                                                                               | 类型              | 默认值 |
| :------------------ | :----------------------------------------------------------------------------------------------------------------- | :---------------- | :----: |
| **rules**           | 表单各组件验证规则，可以被组件的 **rlues** 覆盖其定义                                                              | object            |   -    |
| **grid**            | 表单各组件的布局，可以在 **props.groups** 里重新定义                                                               | SFormGrid         |   -    |
| **border**          | 是否设置 `SFormGroupHeader` 的 bottom 边框                                                                         | string \| boolean |   -    |
| **groups**          | 表单各组件配置选项, 有 **[[Component]](#sform-component)**、 **[AGroup](#sform-agroup)**、 **[ARow](#sform-arow)** | Array\<object>    |   []   |
| **model (v-model)** | 表单表单数据对象                                                                                                   | object            |   -    |
| **disabled**        | 是否将表单设置禁用                                                                                                 | boolean           | false  |
| **readonly**        | 是否将表单设置只读 (本质还是禁用，只是消除了禁用样式影响)                                                          | boolean           | false  |
| **spinning**        | 是否显示表单 loading                                                                                               | boolean           | false  |

#### SForm [Component]

| 参数         | 说明                                                                                          | 类型               | 默认值 |
| :----------- | :-------------------------------------------------------------------------------------------- | :----------------- | :----: |
| **type**     | 表单组件 类型，例：**AInput**、**APassword**                                                  | SFormType          |   -    |
| **slot**     | 表单组件 自定义，例如 `slot='input'`, 在 `SForm` 中 **\<template #s-component-input>** 自定义 | string             |   -    |
| **label**    | 表单组件 **label**                                                                            | string             |   -    |
| **field**    | 表单组件 绑定的字段                                                                           | string \| string[] |   -    |
| **grid**     | 表单组件 布局大小 (24 栅格)                                                                   | SFormGrid          |   -    |
| **layer**    | 表单组件 所应用的 **FormItem** 的 **props**                                                   | object             |   {}   |
| **rules**    | 表单组件 验证规则, 可覆盖 **props.rules**                                                     | object             |   -    |
| **props**    | 表单组件 **props** 定义                                                                       | object             |   {}   |
| **slots**    | 表单组件 **slots** 定义，例. 在 **AInputSearch** 中定义 **enterButton** 卡槽                  | object             |   {}   |
| **default**  | 表单组件 数据为空时的默认值 (**input** -> 传输给表单, **output** -> 从表单获取)               | object             |   -    |
| **transfer** | 表单组件 数据预处理 (**input** -> 传输给表单, **output** -> 从表单获取)                       | object             |   -    |
| **readonly** | 表单组件 是否只读                                                                             | boolean            | false  |
| **disabled** | 表单组件 是否禁用                                                                             | boolean            | false  |
| **render**   | 表单组件 是否渲染                                                                             | boolean            |  true  |
| **show**     | 表单组件 是否显示                                                                             | boolean            |  true  |

#### SForm AGroup

| 参数         | 说明                                                                                       | 类型              |  默认值  |
| :----------- | :----------------------------------------------------------------------------------------- | :---------------- | :------: |
| **type**     | 类型                                                                                       | 'AGroup'          | 'AGroup' |
| **slot**     | 表单分组 自定义，例如 `slot='title'`, 在 `SForm` 中 **\<template #s-header-title>** 自定义 | string            |    -     |
| **label**    | 表单分组 标题                                                                              | string            |    -     |
| **border**   | 设置表单分组 `GroupHeader` 的 bottom 边框                                                  | string \| boolean |    {}    |
| **grid**     | 表单分组下 所属组件 布局大小 (24 栅格)                                                     | SFormGrid         |    -     |
| **readonly** | 表单分组下 所属组件 是否只读                                                               | boolean           |  false   |
| **disabled** | 表单分组下 所属组件 是否禁用                                                               | boolean           |  false   |
| **render**   | 表单分组下 所属组件 是否渲染                                                               | boolean           |   true   |
| **show**     | 表单分组下 所属组件 是否显示                                                               | boolean           |   true   |

#### SForm ARow

| 参数         | 说明                                   | 类型      | 默认值 |
| :----------- | :------------------------------------- | :-------- | :----: |
| **type**     | 类型                                   | 'ARow'    | 'ARow' |
| **grid**     | **ARow** 所属各组件 布局大小 (24 栅格) | SFormGrid |   -    |
| **readonly** | **ARow** 所属各组件 是否只读           | boolean   | false  |
| **disabled** | **ARow** 所属下各组件 是否禁用         | boolean   | false  |
| **render**   | **ARow** 所属下各组件 是否渲染         | boolean   |  true  |
| **show**     | **ARow** 所属下各组件 是否显示         | boolean   |  true  |

### Slots

| 插槽名             | 插槽说明                    | 插槽参数                                                         |
| :----------------- | :-------------------------- | :--------------------------------------------------------------- |
| **before**         | 定义 **SForm** 表单之前内容 |                                                                  |
| **after**          | 定义 **SForm** 表单之后内容 |
| **s-header-\***    | 定义 **SForm** 分组内容     | className, group, disabled, readonly                             |
| **s-component-\*** | 定义 **SForm** 某组件内容   | col, row, group, attrs, slots, disabled, readonly, source, field |

### Expose

| 属性/方法名        | 说明描述                                                                    | 类型                                                                |
| :----------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------ |
| **resetFields**    | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                  | (name?: NamePath) => any                                            |
| **clearValidate**  | 移除表单项的校验结果。传入待移除的表单项的 name 属性或者 name 组成的数组    | (name?: NamePath) => any                                            |
| **getFieldsValue** | 获取表单数据，不建议使用。更推荐 **v-model**，直接通过 **model.value** 获取 | (nameList?: InternalNamePath[] \| true) => any                      |
| **scrollToField**  | 滚动到对应字段位置                                                          | (name: NamePath, options?: any) => any                              |
| **validateFields** | 触发表单验证                                                                | (nameList?: NamePath[] \| string, options?: ValidateOptions) => any |
| **validate**       | 触发表单验证                                                                | (nameList?: NamePath[] \| string, options?: ValidateOptions) => any |

### Definer

| 定义                  | 说明                                                                              |
| :-------------------- | :-------------------------------------------------------------------------------- |
| **formValidator**     | 预设了表单某组件校验规则，例 **password** 规则。 详见 **[Validator](#validator)** |
| **formGridDefiner**   | 定义 **Props.grid** 时的 TypeScript 提示和校验                                    |
| **formRulesDefiner**  | 定义 **Props.rules** 时的 TypeScript 提示和校验                                   |
| **formGroupsDefiner** | 定义 **Props.groups** 时的 TypeScript 提示和校验                                  |

### Validator

目前只预设了 密码(password) 和 数字(number) 校验规则。 当然你也可以自定义校验规则 => [详情](/redirect?${domain}.com//antd-templater/library-3.x/blob/main/src/core/S-Form/form.helper.ts)

::: code-group

```typescript [范例 - 校验密码]
const rules = formRulesDefiner({
  password: formValidator.password({
    message: "请输入用户密码",
    validator: "用户密码过短",
    pattern: /.{8,}/,
    required: true,
  }),
});
```

```typescript [范例 - 校验数字]
const rules = formRulesDefiner({
  number: formValidator.number({
    message: "请输入数字",
    validator: "请输入正确的数字",
    required: true,
  }),
});
```

:::
