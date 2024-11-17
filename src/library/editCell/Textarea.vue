<template>
  <ASpace
    :size="15"
    :wrap="true"
    style="margin: 0"
    direction="vertical"
  >
    <SEditCellTextarea
      empty="无文本"
      :text="value1"
      :allowClear="true"
      :cellStyle="cellStyle"
      @confirm="(proxy) => value1 = proxy.value"
    />

    <SEditCellTextarea
      empty="无文本"
      :text="value2"
      :allowClear="true"
      :cellStyle="cellStyle"
      @confirm="(proxy) => value2 = proxy.value"
    />

    <SEditCellTextarea
      empty="无文本"
      :text="value3"
      :opened="true"
      :allowClear="true"
      :cellStyle="cellStyle"
      @confirm="(proxy) => value3= proxy.value"
    />
  </ASpace>
</template>

<script setup lang="ts">
const value1 = ref('')
const value2 = ref('这是一段旧输入文本')
const value3 = ref('这是一段新输入文本')

const cellStyle = ref({
  inputWrapper: {
    display: 'inline-block',
    paddingRight: '30px',
    width: '195px',
  },
  textWrapper: {
    display: 'inline-block',
    paddingRight: '32px',
    width: 'auto',
  },
})
</script>
