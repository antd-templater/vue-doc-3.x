<template>
  <div class="margin-container">
    <ASpace
      :size="15"
      :wrap="true"
      style="margin: 0"
      direction="vertical"
    >
      <ASpace :size="15">
        <AButton @click="form?.validateFields()">
          表单校验
        </AButton>

        <AButton @click="form?.resetFields()">
          表单重置
        </AButton>
      </ASpace>

      <SForm
        ref="form"
        v-model="model"
        :labelCol="labelCol"
        :disabled="disabled"
        :readonly="readonly"
        :spinning="spinning"
        :groups="groups"
        :rules="rules"
        :grid="grid"
      />
    </ASpace>
  </div>
</template>

<script setup lang="ts">
const disabled = ref(false)
const readonly = ref(false)
const spinning = ref(false)

const form = ref(null as InstanceType<SForm> | null)
const labelCol = { style: { width: '68px' } }

const groups = formGroupsDefiner([
  {
    type: 'AGroup',
    slot: '',
    field: 'AGroup1',
    label: '输入选择框',
    border: true,
  },
  {
    type: 'AInput',
    slot: '',
    field: 'cInput',
    label: '输入框',
    props: {
      allowClear: true,
      placeholder: '请输入文本内容',
    },
  },
  {
    type: 'AInputPassword',
    slot: '',
    field: 'cPassword',
    label: '密码框',
    props: {
      rows: 1,
      autoSize: true,
      allowClear: true,
      placeholder: '请输入密码',
    },
  },
  {
    type: 'AInputNumber',
    slot: '',
    field: 'cNumber',
    label: '数字框',
    props: {
      placeholder: '请输入数字',
    },
    rules: [{ required: true, message: '数字不可为空' }], // 覆盖 props.rules
  },
  {
    type: 'ACascader',
    slot: '',
    field: 'cCascader',
    label: '级联',
    props: {
      allowClear: true,
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
    field: 'cSelect',
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
    rules: [{ required: true, message: '请选择一个成员' }], // 覆盖 props.rules
  },
  {
    type: 'ATreeSelect',
    slot: '',
    field: 'cTreeSelect',
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
    field: 'cYearPicker',
    label: '选择年',
    props: {
      allowClear: true,
      format: 'YYYY年',
    },
    rules: [{ required: true, message: '请选择年份' }],
  },
  {
    type: 'AMonthPicker',
    slot: '',
    field: 'cMonthPicker',
    label: '年月',
    props: {
      allowClear: true,
      format: 'YYYY年MM月',
    },
  },
  {
    type: 'ADatePicker',
    slot: '',
    field: 'cDatePicker',
    label: '年月日',
    props: {
      allowClear: true,
      format: 'YYYY/MM/DD',
      valueFormat: 'YYYY-MM-DD',
    },
  },
  {
    type: 'AQuarterPicker',
    slot: '',
    field: 'cQuarterPicker',
    label: '季度',
    props: {
      allowClear: true,
      format: 'YYYY年 Q季度',
    },
  },
  {
    type: 'ATimePicker',
    slot: '',
    field: 'cTimePicker',
    label: '时间',
    props: {
      allowClear: true,
      format: 'a h:mm',
      valueFormat: 'HH:mm',
    },
  },
])

const rules = formRulesDefiner({
  cInput: [{ required: true, message: '请输入内容' }],
  cNumber: [{ required: true, message: '请输入数字' }], // 被覆盖
  cCascader: [{ required: true, message: '请选择省市' }],
  cSelect: [{ required: true, message: '请选择' }], // 被覆盖
  cTreeSelect: [{ required: true, message: '请选择' }],
  cMonthPicker: [{ required: true, message: '请选择年月' }],
  cDatePicker: [{ required: true, message: '请选择年月日' }],
  cQuarterPicker: [{ required: true, message: '请选择季度' }],
  cTimePicker: [{ required: true, message: '请选择时间' }],
  cPassword: formValidator.password({
    message: '请输入用户密码',
    validator: '用户密码过短',
    pattern: /.{8,}/,
    required: true,
  }),
})

const grid = formGridDefiner({
  gutter: 12,
  xs: 24,
  sm: 12,
  md: 8,
})

const model: Ref<any> = ref({
  cInput: '这是一个输入框',
  cPassword: '123456',
  cCascader: ['ZheJiang', 'NingBo'],
  cYearPicker: '2024',
  cMonthPicker: '2024-06',
  cNumber: undefined,
})
</script>

<style lang="less" scoped>
.margin-container {
  margin-bottom: -40px;
}
</style>
