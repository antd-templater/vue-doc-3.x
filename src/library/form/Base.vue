<template>
  <SForm
    v-model="model"
    :layout="layout"
    :labelCol="labelCol"
    :disabled="disabled"
    :readonly="readonly"
    :spinning="spinning"
    :groups="groups"
    :grid="grid"
  />
</template>

<script setup lang="ts">
const disabled = ref(false)
const readonly = ref(false)
const spinning = ref(false)

// 注: 定义 Props 外的 Attrs，将作用在 SForm 组件中 AForm 组件上
const labelCol = { style: { width: '65px' } }
const layout = ref('horizontal')

// 定义 Groups
const groups = formGroupsDefiner([
  {
    type: 'AInput',
    slot: '',
    field: 'bInput',
    label: '输入框',
    props: {
      placeholder: '请输入文本内容',
    },
  },
  {
    type: 'ASelect',
    slot: '',
    field: 'bSelect',
    label: '下拉框',
    props: {
      placeholder: '请选择',
      options: [
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ],
    },
  },
  {
    type: 'ADatePicker',
    slot: '',
    field: 'bDatePicker',
    label: '年月日',
    props: {
      format: 'YYYY/MM/DD HH:mm',
      valueFormat: 'YYYY-M-D H:m',
      showTime: true,
    },
  },
  {
    type: 'ASlider',
    slot: '',
    field: 'bSlider',
    label: '滑条',
  },
  {
    type: 'ASwitch',
    slot: '',
    field: 'bSwitch',
    label: '开关',
    props: {
      checkedValue: 'Y',
      unCheckedValue: 'N',
      checkedChildren: '开',
      unCheckedChildren: '关',
    },
  },
])

// 定义 Grid
const grid = formGridDefiner({
  gutter: 30,
  xs: 24,
  sm: 12,
  md: 8,
})

// 定义 Model, 可以事先不在 model 声明字段
const model: Ref<any> = ref({
  bInput: '这是一个输入框',
  bSelect: 'jack',
  bDatePicker: '2024-6-8 8:30',
  bSlider: 35,
  bSwitch: 'Y',
})
</script>
