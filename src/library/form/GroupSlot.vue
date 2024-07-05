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
    >
      <template #s-header-group-1="{ className, group }">
        <div
          :class="className"
          style="display: flex; align-items: center;"
        >
          <div style="flex: 1 1 auto">
            {{ group.label }} {{ group.disabled ? '(已禁用)' : '(正常)' }}
          </div>

          <ASwitch
            v-model:checked="group.disabled"
            style="margin-right: 10px"
            unCheckedChildren="正常"
            checkedChildren="禁用"
          />
        </div>
      </template>

      <template #s-header-group-2="{ className, group }">
        <div
          :class="className"
          style="display: flex; align-items: center;"
        >
          <div style="flex: 1 1 auto">
            {{ group.label }} {{ group.readonly ? '(只读)' : '(正常)' }}
          </div>

          <ASwitch
            v-model:checked="group.readonly"
            style="margin-right: 10px"
            unCheckedChildren="正常"
            checkedChildren="只读"
          />
        </div>
      </template>
    </SForm>
  </div>
</template>

<script setup lang="ts">
const disabled = ref(false)
const readonly = ref(false)
const spinning = ref(false)

const labelCol = { style: { width: '68px' } }

const groups = formGroupsDefiner([
  {
    type: 'AGroup',
    slot: 'group-1', // s-header-[slotName]
    field: 'AGroup1',
    label: '输入选择框',
    disabled: ref(true),
    border: true,
  },
  {
    type: 'AInput',
    slot: '',
    field: 'gInput',
    label: '输入框',
    props: {
      allowClear: true,
      placeholder: '请输入文本内容',
    },
  },
  {
    type: 'AInputPassword',
    slot: '',
    field: 'gPassword',
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
    field: 'gNumber',
    label: '数字框',
    props: {
      placeholder: '请输入数字',
    },
  },
  {
    type: 'ACascader',
    slot: '',
    field: 'gCascader',
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
    field: 'gSelect',
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
    field: 'gTreeSelect',
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
    slot: 's-header-group-2', // s-header-*
    field: 'AGroup-2',
    label: '日期选择框',
    readonly: ref(true),
    border: true,
  },
  {
    type: 'AYearPicker',
    slot: '',
    field: 'gYearPicker',
    label: '选择年',
    props: {
      allowClear: true,
      format: 'YYYY年',
    },
  },
  {
    type: 'AMonthPicker',
    slot: '',
    field: 'gMonthPicker',
    label: '年月',
    props: {
      allowClear: true,
      format: 'YYYY年MM月',
    },
  },
  {
    type: 'ADatePicker',
    slot: '',
    field: 'gDatePicker',
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
    field: 'gQuarterPicker',
    label: '季度',
    props: {
      allowClear: true,
      format: 'YYYY年 Q季度',
    },
  },
  {
    type: 'ATimePicker',
    slot: '',
    field: 'gTimePicker',
    label: '时间',
    props: {
      allowClear: true,
      format: 'a h:mm',
      valueFormat: 'HH:mm',
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
  gInput: '这是一个输入框',
  gPassword: '123456',
  gCascader: ['ZheJiang', 'NingBo'],
  gYearPicker: '2024',
  gMonthPicker: '2024-06',
  gNumber: undefined,
})
</script>

<style lang="less" scoped>
.margin-container {
  margin-top: -25px;
  margin-bottom: -40px;
}
</style>
