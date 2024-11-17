<template>
  <ASpace
    :size="15"
    :wrap="true"
    style="margin: 0"
    direction="vertical"
  >
    <SEditCellSelect
      empty="无"
      :text="value1"
      :allowClear="true"
      :cellStyle="cellStyle"
      :options="presetOptions"
      @confirm="(proxy) => value1 = proxy.value"
    />

    <SEditCellSelect
      empty="无"
      :text="value2"
      :allowClear="true"
      :cellStyle="cellStyle"
      :options="presetOptions"
      @confirm="(proxy) => value2 = proxy.value"
    />

    <SEditCellSelect
      empty="无"
      :text="value3"
      :opened="true"
      :allowClear="true"
      :cellStyle="cellStyle"
      :options="presetOptions"
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
