<template>
  <div class="margin-container">
    <SForm
      v-model="model"
      :labelCol="labelCol"
      :disabled="disabled"
      :readonly="readonly"
      :spinning="spinning"
      :groups="groups"
      :grid="grid"
    />
  </div>
</template>

<script setup lang="ts">
const disabled = ref(false)
const readonly = ref(false)
const spinning = ref(false)

const labelCol = { style: { width: '68px' } }

const groups = formGroupsDefiner([
  // 第一个 AGroup
  {
    type: 'AGroup',
    slot: '',
    field: 'AGroup1',
    label: '输入选择框', // 当 slot 和 label 都为空时，则不渲染 GroupHeader,
    border: true, // 设置 GroupHeader border-bottom
  },
  {
    type: 'AInput',
    slot: '',
    field: 'input',
    label: '输入框',
    props: {
      placeholder: '请输入文本内容',
    },
  },
  {
    type: 'AInputPassword',
    slot: '',
    field: 'password',
    label: '密码框',
    props: {
      rows: 1,
      autoSize: true,
      placeholder: '请输入密码',
    },
  },
  {
    type: 'AInputNumber',
    slot: '',
    field: 'number',
    label: '数字框',
    props: {
      placeholder: '请输入数字',
    },
  },
  {
    type: 'ACascader',
    slot: '',
    field: 'cascader',
    label: '级联',
    props: {
      placeholder: '请选择',
      options: [
        {
          value: 'ZheJiang',
          label: 'ZheJiang',
          children: [
            {
              value: 'HangZhou',
              label: 'HangZhou',
            },
            {
              value: 'Ningbo',
              label: 'Ningbo',
            },
          ],
        },
      ],
    },
  },
  {
    type: 'ASelect',
    slot: '',
    field: 'select',
    label: '下拉框',
    props: {
      allowClear: true,
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
    type: 'ATreeSelect',
    slot: '',
    field: 'treeSelect',
    label: '树选择',
    props: {
      allowClear: true,
      showSearch: true,
      treeDefaultExpandAll: true,
      dropdownMatchSelectWidth: true,
      treeNodeFilterProp: 'label',
      placeholder: '请选择',
      dropdownStyle: {
        maxHeight: '300px',
      },
      treeData: [
        {
          label: 'A',
          value: 'a',
          children: [
            {
              label: 'A-1',
              value: 'a-1',
            },
            {
              label: 'A-2',
              value: 'a-2',
            },
          ],
        },
        {
          label: 'B',
          value: 'b',
          children: [
            {
              label: 'B-1',
              value: 'b-1',
            },
            {
              label: 'B-2',
              value: 'b-2',
            },
          ],
        },
      ],
    },
  },

  // 第二个 AGroup
  {
    type: 'AGroup',
    slot: '',
    field: 'AGroup-2',
    label: '日期选择框',
    border: true,
    grid: {},
  },
  {
    type: 'AYearPicker',
    slot: '',
    field: 'yearPicker',
    label: '选择年',
    props: {
      format: 'YYYY年',
    },
  },
  {
    type: 'AMonthPicker',
    slot: '',
    field: 'monthPicker',
    label: '年月',
    props: {
      format: 'YYYY年MM月',
    },
  },
  {
    type: 'ADatePicker',
    slot: '',
    field: 'datePicker',
    label: '年月日',
    props: {
      format: 'YYYY/MM/DD HH:mm',
      valueFormat: 'YYYY-M-D H:m',
      showTime: true,
    },
  },
  {
    type: 'AWeekPicker',
    slot: '',
    field: 'weekPicker',
    label: '第几周',
    props: {
      format: 'YYYY年 ww周',
    },
  },
  {
    type: 'AQuarterPicker',
    slot: '',
    field: 'quarterPicker',
    label: '季度',
    props: {
      format: 'YYYY年 Q季度',
    },
  },
  {
    type: 'ATimePicker',
    slot: '',
    field: 'timePicker',
    label: '时间',
    props: {
      format: 'a h:mm',
      valueFormat: 'HH:mm',
    },
  },
  {
    type: 'ARangePicker',
    slot: '',
    field: 'rangePicker',
    label: '日期组',
    props: {
      format: 'YYYY年MM月DD日',
    },
    grid: {
      md: 12,
    },
  },

  // 第三个 AGroup
  {
    type: 'AGroup',
    slot: '',
    field: 'AGroup3',
    label: '其他组件',
    border: true,
    grid: {
      md: 6, // 覆盖 Form grid (md:8)
    },
  },
  {
    type: 'ASlider',
    slot: '',
    field: 'slider',
    label: '滑条',
    grid: {
      md: 10, // 覆盖 AGroup grid (md:6)
    },
  },
  {
    type: 'ASwitch',
    slot: '',
    field: 'switch',
    label: '开关',
    props: {
      checkedValue: 'Y',
      unCheckedValue: 'N',
      checkedChildren: '开',
      unCheckedChildren: '关',
    },
  },
  {
    type: 'ARow',
    grid: {
      md: 12,
    },
  },
  {
    type: 'ACheckboxGroup',
    slot: '',
    field: 'checkbox',
    label: '多选',
    props: {
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Pear', value: 'pear' },
        { label: 'Orange', value: 'orange' },
      ],
    },
  },
  {
    type: 'ARow',
    grid: {
      md: 12,
    },
  },
  {
    type: 'ARadioGroup',
    slot: '',
    field: 'radio',
    label: '单选',
    props: {
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Pear', value: 'pear' },
        { label: 'Orange', value: 'orange' },
      ],
    },
  },

  // 第四个 AGroup
  {
    type: 'AGroup',
    slot: '',
    field: 'AGroup4',
    label: '表单实时数据',
    border: true,
  },
  {
    type: 'AInputTextarea',
    slot: '',
    field: 'textarea',
    label: '',
    props: {
      readonly: true,
      autoSize: true,
      bordered: false,
      placeholder: '请输入文本内容',
    },
    grid: {
      md: 16,
    },
  },
])

const grid = formGridDefiner({
  gutter: 12,
  xs: 24,
  sm: 12,
  md: 8,
})

const model: Ref<any> = ref({
  input: '这是一个输入框',
  password: '12345678',
  number: undefined,
  cascader: ['ZheJiang', 'NingBo'],
  treeSelect: 'a-1',
  yearPicker: '2024',
  monthPicker: '2024-06',
  datePicker: '2024-6-8 8:30',
  weekPicker: '2024-27',
  quarterPicker: '2024-3',
  timePicker: '09:35',
  rangePicker: ['2024-05-15', '2024-09-25'],
  slider: 35,
  switch: 'Y',
  checkbox: ['apple', 'pear'],
  radio: 'pear',
})

watchEffect(() => {
  const prints = []

  const models = {
    ...model.value,
    textarea: undefined,
  }

  for (const [key, value] of Object.entries(models)) {
    if (key !== 'textarea') {
      const stringer = (value: any) => typeof value === 'number' || typeof value === 'undefined' ? value : '"' + value + '"'
      const arrayer = (value: any[]) => '[' + value.map(v => '"' + v + '"').join(', ') + ']'
      const valuer = Array.isArray(value) ? arrayer(value) : stringer(value)
      prints.push(`    ${key}: ${valuer},`)
    }
  }

  model.value.textarea = `{\n${prints.join('\n')}\n}\n---------- model.value ----------`
})
</script>

<style lang="less" scoped>
.margin-container {
  margin-top: -25px;
  margin-bottom: -40px;
}
</style>
