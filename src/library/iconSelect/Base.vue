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
        style="width: 210px"
        mode="tags"
      />

      <SIconSelect
        v-model:value="value2"
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
        style="width: 210px"
        :multiple="true"
        mode="tags"
      />

      <SIconSelect
        v-model:value="value4"
        style="width: 210px"
        :multiple="true"
        mode="tags"
      />
    </ASpace>
  </ASpace>
</template>

<script setup lang="ts">
const value1 = ref('AlibabaOutlined')
const value2 = ref('SearchOutlined')

const value3 = ref([
  'AlibabaOutlined',
  'FontColorsOutlined',
])

const value4 = ref([
  'SearchOutlined',
  'ApartmentOutlined',
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
