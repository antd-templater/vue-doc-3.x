<template>
  <ASpace
    :size="15"
    :wrap="true"
    style="margin: 0"
    direction="vertical"
  >
    <SEditCellAutoComplete
      empty="无输入"
      :text="value1"
      :options="options"
      :cellStyle="cellStyle"
      :filterOption="(value, option) => !!option?.label.startsWith(value.trim())"
      @confirm="(proxy) => value1 = proxy.value"
    />

    <SEditCellAutoComplete
      empty="无输入"
      :text="value2"
      :options="options"
      :cellStyle="cellStyle"
      :filterOption="(value, option) => !!option?.label.startsWith(value.trim())"
      @confirm="(proxy) => value2 = proxy.value"
    />

    <SEditCellAutoComplete
      empty="无输入"
      :text="value3"
      :opened="true"
      :options="options"
      :cellStyle="cellStyle"
      :filterOption="(value, option) => !!option?.label.startsWith(value.trim())"
      @confirm="(proxy) => value3= proxy.value"
    />
  </ASpace>
</template>

<script setup lang="ts">
const value1 = ref<any>('')
const value2 = ref<any>('Option2')
const value3 = ref<any>('Option3')

const cellStyle = ref({
  inputWrapper: {
    display: 'inline-block',
    paddingRight: '30px',
    width: '185px',
  },
  textWrapper: {
    display: 'inline-block',
    paddingRight: '32px',
    width: 'auto',
  },
})

const options = ref([
  { label: 'Option1', value: 'Option1' },
  { label: 'Option2', value: 'Option2' },
  { label: 'Option3', value: 'Option3' },
])
</script>
