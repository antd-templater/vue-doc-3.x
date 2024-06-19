<template>
  <ASpace
    :size="10"
    :wrap="true"
    style="margin: 0"
    direction="vertical"
  >
    <div class="title">
      单选 (multiple: false)
    </div>

    <ASpace
      :size="25"
      :wrap="true"
      style="margin: 0"
    >
      <SIconSelect
        v-model:value="value1"
        :iconPrefix="iconPrefix"
        :iconfontUrl="iconfontUrl"
        :iconStyle="{ color: '#606266' }"
        style="width: 210px"
        mode="tags"
      />

      <SIconSelect
        v-model:value="value2"
        :iconPrefix="iconPrefix"
        :iconfontUrl="iconfontUrl"
        :iconStyle="{ color: '#606266' }"
        style="width: 210px"
        mode="tags"
      />
    </ASpace>

    <div class="space" />

    <div class="title">
      多选 (multiple: true)
    </div>

    <ASpace
      :size="25"
      :wrap="true"
      style="margin: 0"
    >
      <SIconSelect
        v-model:value="value3"
        :iconPrefix="iconPrefix"
        :iconfontUrl="iconfontUrl"
        :iconStyle="{ color: '#606266' }"
        style="width: 210px"
        :multiple="true"
        mode="tags"
      />

      <SIconSelect
        v-model:value="value4"
        :iconPrefix="iconPrefix"
        :iconfontUrl="iconfontUrl"
        :iconStyle="{ color: '#606266' }"
        style="width: 210px"
        :multiple="true"
        mode="tags"
      />
    </ASpace>
  </ASpace>
</template>

<script setup lang="ts">
const iconPrefix = 'font-'
const iconfontUrl = 'https://at.alicdn.com/t/c/font_1403293_zz95gjv9ru.js'

const value1 = ref('font-product')
const value2 = ref('font-shop')

const value3 = ref([
  'font-product',
  'font-setting',
])

const value4 = ref([
  'font-shop',
  'font-refresh',
])
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  font-size: 14px;
  color: #30323c;
}

.space {
  width: 100%;
  height: 8px;
}
</style>
