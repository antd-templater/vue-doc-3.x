<template>
  <ASpace
    :size="15"
    :wrap="true"
    style="margin: 0"
    direction="vertical"
  >
    <SEditCellDatePicker
      empty="无日期"
      :text="value1"
      :allowClear="true"
      :cellStyle="cellStyle"
      format="YYYY-MM-DD"
      valueFormat="YYYY-MM-DD"
      @confirm="(proxy) => value1 = proxy.value"
    />

    <SEditCellDatePicker
      empty="无日期"
      :text="value2"
      :allowClear="true"
      :cellStyle="cellStyle"
      format="YYYY-MM-DD"
      valueFormat="YYYY-MM-DD"
      @confirm="(proxy) => value2 = proxy.value"
    />

    <SEditCellDatePicker
      empty="无日期"
      :text="value3"
      :opened="true"
      :allowClear="true"
      :cellStyle="cellStyle"
      format="YYYY-MM-DD"
      valueFormat="YYYY-MM-DD"
      @confirm="(proxy) => value3= proxy.value"
    />
  </ASpace>
</template>

<script setup lang="ts">
const value1 = ref('')
const value2 = ref('2024-05-31')
const value3 = ref('2024-06-01')

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
