<template>
  <div class="margin-container">
    <SForm
      v-model="model"
      :labelCol="labelCol"
      :disabled="disabled"
      :readonly="readonly"
      :spinning="spinning"
      :groups="groups"
      :rules="rules"
      :grid="grid"
    >
      <template #s-component-input="{ source, field, attrs }">
        <AInput
          v-model:value="source[field]"
          v-bind="attrs"
        >
          <template #addonAfter>
            <SettingOutlined />
          </template>
        </AInput>
      </template>

      <template #s-component-select="{ source, field, attrs }">
        <SIconSelect
          v-model:value="source[field]"
          v-bind="attrs"
          mode="tags"
        />
      </template>

      <template #s-component-date="{ source, field, attrs }">
        <ADatePicker
          v-model:value="source[field]"
          v-bind="attrs"
          :open="open"
          @change="open = false"
          @focus="open = true"
          @blur="open = false"
        >
          <template #suffixIcon>
            <BellOutlined />
          </template>
        </ADatePicker>
      </template>
    </SForm>
  </div>
</template>

<script setup lang="ts">
const disabled = ref(false)
const readonly = ref(false)
const spinning = ref(false)

// 年月日组件 弹窗
const open = ref(false)
const labelCol = { style: { width: '68px' } }

const groups = formGroupsDefiner([
  // 第一个 AGroup
  {
    type: 'AGroup',
    slot: '',
    field: 'AGroup1',
    label: '输入选择框',
    border: true,
  },
  {
    type: 'AInput',
    slot: 'input', // s-component-[slotname]
    field: 'sInput',
    label: '输入框',
    props: {
      allowClear: true,
      placeholder: '请输入文本内容',
    },
  },
  {
    type: 'AInputPassword',
    slot: '',
    field: 'sPassword',
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
    field: 'sNumber',
    label: '数字框',
    props: {
      placeholder: '请输入数字',
    },
  },
  {
    type: 'ACascader',
    slot: '',
    field: 'sCascader',
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
    slot: 's-component-select', // s-component-*
    field: 'sSelect',
    label: '下拉框',
    props: {
      allowClear: true,
      placeholder: '请选择',
    },
  },
  {
    type: 'ATreeSelect',
    slot: '',
    field: 'sTreeSelect',
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
  },
  {
    type: 'AYearPicker',
    slot: '',
    field: 'sYearPicker',
    label: '选择年',
    props: {
      allowClear: true,
      format: 'YYYY年',
    },
  },
  {
    type: 'AMonthPicker',
    slot: '',
    field: 'sMonthPicker',
    label: '年月',
    props: {
      allowClear: true,
      format: 'YYYY年MM月',
    },
  },
  {
    type: 'ADatePicker',
    slot: 's-component-date', // s-component-*
    field: 'sDatePicker',
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
    field: 'sQuarterPicker',
    label: '季度',
    props: {
      allowClear: true,
      format: 'YYYY年 Q季度',
    },
  },
  {
    type: 'ATimePicker',
    slot: '',
    field: 'sTimePicker',
    label: '时间',
    props: {
      allowClear: true,
      format: 'a h:mm',
      valueFormat: 'HH:mm',
    },
  },
])

const rules = formRulesDefiner({
  sInput: [{ required: true, message: '请输入内容' }],
  sSelect: [{ required: true, message: '请选择 Icon 图标' }],
  sDatePicker: [{ required: true, message: '请选择年月日' }],
})

const grid = formGridDefiner({
  gutter: 12,
  xs: 24,
  sm: 12,
  md: 8,
})

const model: Ref<any> = ref({
  sInput: '这是输入框',
  sPassword: '123456',
  sSelect: 'AimOutlined',
  sCascader: ['ZheJiang', 'NingBo'],
  sYearPicker: '2024',
  sMonthPicker: '2024-06',
  sNumber: 99,
})
</script>

<style lang="less" scoped>
.margin-container {
  margin-top: -25px;
  margin-bottom: -40px;
}
</style>
