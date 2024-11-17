<template>
  <ASpace
    :size="15"
    :wrap="true"
    style="margin: 0"
    direction="vertical"
  >
    <SEditCellSelectIcon
      empty="未选择"
      allowClear
      :text="value1"
      :cellStyle="cellStyle"
      @confirm="(proxy) => value1 = proxy.value"
    />

    <SEditCellSelectIcon
      empty="未选择"
      allowClear
      :text="value2"
      :cellStyle="cellStyle"
      @confirm="(proxy) => value2 = proxy.value"
    />

    <SEditCellSelectIcon
      empty="未选择"
      allowClear
      :opened="true"
      :text="value3"
      :cellStyle="cellStyle"
      iconPrefix="font-"
      iconfontUrl="https://at.alicdn.com/t/c/font_1403293_zz95gjv9ru.js"
      @confirm="(proxy) => value3 = proxy.value"
    />
  </ASpace>
</template>

<script setup lang="ts">
const value1 = ref<any>('')
const value2 = ref<any>('AimOutlined')
const value3 = ref<any>('font-personal-outline')

const cellStyle = ref({
  inputWrapper: {
    display: 'inline-block',
    paddingRight: '30px',
    minWidth: '240px',
  },
  textWrapper: {
    display: 'inline-block',
    paddingRight: '32px',
    width: 'auto',
  },
})
</script>
