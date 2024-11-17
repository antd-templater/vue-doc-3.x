<template>
  <ASpace
    :size="15"
    :wrap="true"
    style="margin: 0"
    direction="vertical"
  >
    <SEditCellTreeSelect
      empty="无"
      :text="value1"
      :allowClear="true"
      :showSearch="true"
      :cellStyle="cellStyle"
      :fieldNames="fieldNames"
      :treeData="presetOptions"
      treeNodeFilterProp="label"
      @confirm="(proxy) => value1 = proxy.value"
    />

    <SEditCellTreeSelect
      empty="无"
      :text="value2"
      :allowClear="true"
      :showSearch="true"
      :cellStyle="cellStyle"
      :fieldNames="fieldNames"
      :treeData="presetOptions"
      treeNodeFilterProp="label"
      @confirm="(proxy) => value2 = proxy.value"
    />

    <SEditCellTreeSelect
      empty="无"
      :text="value3"
      :opened="true"
      :allowClear="true"
      :showSearch="true"
      :cellStyle="cellStyle"
      :fieldNames="fieldNames"
      :treeData="presetOptions"
      treeNodeFilterProp="label"
      @confirm="(proxy) => value3 = proxy.value"
    />
  </ASpace>
</template>

<script setup lang="ts">
const value1 = ref<any>('')
const value2 = ref<any>('alva')
const value3 = ref<any>('lucy')

const presetOptions = ref([
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

const fieldNames = ref({
  children: 'children',
  label: 'label',
  value: 'value',
})

const cellStyle = ref({
  inputWrapper: {
    display: 'inline-block',
    paddingRight: '30px',
    width: '180px',
  },
  textWrapper: {
    display: 'inline-block',
    paddingRight: '32px',
    width: 'auto',
  },
})
</script>
