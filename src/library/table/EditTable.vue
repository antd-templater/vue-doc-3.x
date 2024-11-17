<template>
  <STable
    ref="table"
    v-model:columns="columns"
    v-model:sources="sources"
    tableLayout="auto"
    :scroll="scroll"
  >
    <template #bodyerCell="{ column, record }">
      <template v-if="column.key === 'input'">
        <SEditCellInput
          v-model:text="record.input"
          empty="未输入"
          :edit="edit"
          :check="check"
          :opened="opened"
          :allowClear="true"
          :cellStyle="cellStyle"
        />
      </template>

      <template v-if="column.key === 'select'">
        <SEditCellSelect
          v-model:text="record.select"
          empty="未选择"
          :edit="edit"
          :check="check"
          :opened="opened"
          :allowClear="true"
          :cellStyle="cellStyle"
          :options="selectOptions"
        />
      </template>

      <template v-if="column.key === 'textarea'">
        <SEditCellTextarea
          v-model:text="record.textarea"
          empty="未输入"
          :edit="edit"
          :check="check"
          :opened="opened"
          :allowClear="true"
          :cellStyle="cellStyle"
        />
      </template>

      <template v-if="column.key === 'action'">
        <AButton
          type="link"
          @click="opened = !opened"
        >
          <template #icon>
            <EditOutlined v-if="!opened" />
            <CheckOutlined v-if="opened" />
          </template>
        </AButton>
      </template>
    </template>
  </STable>
</template>

<script setup lang="ts">
const table = ref(null as InstanceType<STable> | null)

const columns = tableColumnsDefiner([
  {
    title: '输入框',
    dataIndex: 'input',
  },
  {
    title: '选择框',
    dataIndex: 'select',
  },
  {
    title: '文本框',
    dataIndex: 'textarea',
  },
  {
    title: '操作',
    dataIndex: 'action',
    align: 'center',
    width: 80,
  },
])

const sources = tableSourcesDefiner([
  {
    input: '输入值',
    select: 'alva',
    textarea: '输入文本',
  },
])

const scroll = tableScrollDefiner({
  x: 'max-content',
  y: 'auto',
})

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

const cellStyle = ref({
  container: {
    display: 'inline-block',
    width: 'auto',
  },
  inputWrapper: {
    display: 'inline-block',
    paddingRight: '0',
    width: '150px',
  },
  textWrapper: {
    display: 'inline-block',
    paddingRight: '0',
    width: '150px',
  },
})

const opened = ref(false)
const check = ref(false)
const edit = ref(false)
</script>
