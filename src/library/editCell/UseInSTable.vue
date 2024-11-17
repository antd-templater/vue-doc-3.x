<template>
  <STable
    ref="table"
    v-model:columns="columns"
    v-model:sources="sources"
    style="overflow: auto;"
    tableLayout="auto"
    :scroll="scroll"
  >
    <template #bodyerCell="{ column, record }">
      <template v-if="column.key === 'input'">
        <SEditCellInput
          v-model:text="record.input"
          v-model:status="cellState"
          empty="未输入"
          :opened="true"
          :allowClear="true"
          :cellStyle="cellStyle"
          @confirm="cellState = false"
        />
      </template>

      <template v-if="column.key === 'select'">
        <SEditCellSelect
          v-model:text="record.select"
          v-model:status="cellState"
          empty="未选择"
          :opened="true"
          :allowClear="true"
          :cellStyle="cellStyle"
          :options="selectOptions"
          @confirm="cellState = false"
        />
      </template>

      <template v-if="column.key === 'textarea'">
        <SEditCellTextarea
          v-model:text="record.textarea"
          v-model:status="cellState"
          empty="未输入"
          :opened="true"
          :allowClear="true"
          :cellStyle="cellStyle"
          @confirm="cellState = false"
        />
      </template>

      <template v-if="column.key === 'selectIcon'">
        <SEditCellSelectIcon
          v-model:text="record.selectIcon"
          v-model:status="cellState"
          empty="未选择"
          :opened="true"
          :allowClear="true"
          :cellStyle="cellStyle"
          @confirm="cellState = false"
        />
      </template>

      <template v-if="column.key === 'treeSelect'">
        <SEditCellTreeSelect
          v-model:text="record.treeSelect"
          v-model:status="cellState"
          empty="未选择"
          :opened="true"
          :allowClear="true"
          :showSearch="true"
          :cellStyle="cellStyle"
          :treeData="treeOptions"
          :fieldNames="fieldNames"
          treeNodeFilterProp="label"
          @confirm="cellState = false"
        />
      </template>

      <template v-if="column.key === 'datePicker'">
        <SEditCellDatePicker
          v-model:text="record.datePicker"
          v-model:status="cellState"
          :cellStyle="cellStyle"
          empty="无日期"
          :opened="true"
          :allowClear="true"
          format="YYYY-MM-DD"
          valueFormat="YYYY-MM-DD"
          @confirm="cellState = false"
        />
      </template>

      <template v-if="column.key === 'autoComplete'">
        <SEditCellAutoComplete
          v-model:text="record.autoComplete"
          v-model:status="cellState"
          :cellStyle="cellStyle"
          empty="无输入"
          :opened="true"
          :options="completeOptions"
          :filterOption="(value, option) => !!option?.label.startsWith(value.trim())"
          @confirm="cellState = false"
        />
      </template>
    </template>
  </STable>
</template>

<script setup lang="ts">
const table = ref(null as InstanceType<STable> | null)

const columns = tableColumnsDefiner([
  {
    title: 'SEditCellInput',
    dataIndex: 'input',
  },
  {
    title: 'SEditCellSelect',
    dataIndex: 'select',
  },
  {
    title: 'SEditCellTextarea',
    dataIndex: 'textarea',
  },
  {
    title: 'SEditCellSelectIcon',
    dataIndex: 'selectIcon',
  },
  {
    title: 'SEditCellTreeSelect',
    dataIndex: 'treeSelect',
  },
  {
    title: 'SEditCellDatePicker',
    dataIndex: 'datePicker',
  },
  {
    title: 'SEditCellAutoComplete',
    dataIndex: 'autoComplete',
  },
])

const sources = tableSourcesDefiner([
  {
    input: '输入值',
    select: 'alva',
    textarea: '输入文本',
    selectIcon: 'BellOutlined',
    treeSelect: 'jack',
    datePicker: '2024-06-01',
    autoComplete: 'Lucy',
  },
])

const scroll = tableScrollDefiner({
  x: 'max-content',
  y: 'auto',
})

/* AutoComplete */
const completeOptions = ref([
  {
    value: 'Alva',
    label: 'Alva',
  },
  {
    value: 'Jack',
    label: 'Jack',
  },
  {
    value: 'Lucy',
    label: 'Lucy',
  },
])

/* Select */
const selectOptions = ref([
  {
    value: 'alva',
    label: 'Alva',
  },
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
])

/* TreeSelect */
const treeOptions = ref([
  {
    value: 'A',
    label: 'A机构',
    children: [
      {
        value: 'alva',
        label: 'Alva',
      },
      {
        value: 'jack',
        label: 'Jack',
      },
    ],
  },
  {
    value: 'B',
    label: 'B机构',
    children: [
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'cris',
        label: 'Cris',
      },
    ],
  },
])

// when default is opended
const cellState = ref(true)

const cellStyle = ref({
  container: {
    display: 'inline-block',
    width: 'auto',
  },
  inputWrapper: {
    display: 'inline-block',
    paddingRight: '35px',
    minWidth: '180px',
  },
  textWrapper: {
    display: 'inline-block',
    paddingRight: '35px',
    width: 'auto',
  },
})

const fieldNames = {
  children: 'children',
  label: 'label',
  value: 'value',
}
</script>
