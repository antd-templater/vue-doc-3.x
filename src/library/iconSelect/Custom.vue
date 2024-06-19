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
        :options="iconOptions"
        style="width: 210px"
        mode="tags"
      />

      <SIconSelect
        v-model:value="value2"
        :iconPrefix="iconPrefix"
        :iconfontUrl="iconfontUrl"
        :options="iconOptions"
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
        :options="iconOptions"
        style="width: 210px"
        :multiple="true"
        mode="tags"
      />

      <SIconSelect
        v-model:value="value4"
        :iconPrefix="iconPrefix"
        :iconfontUrl="iconfontUrl"
        :options="iconOptions"
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

const value1 = ref('font-personal-outline')
const value2 = ref('font-phone-outline')

const value3 = ref([
  'font-personal-outline',
  'font-friend-outline',
])

const value4 = ref([
  'font-phone-outline',
  'font-email-outline',
])

const iconOptions = iconOptionsDefiner([
  {
    label: '用户',
    value: 'User',
    options: [
      {
        label: 'font-personal-outline',
        value: 'font-personal-outline',
      },
      {
        label: 'font-friend-outline',
        value: 'font-friend-outline',
      },
      {
        label: 'font-customer-service-outline',
        value: 'font-customer-service-outline',
      },
    ],
  },
  {
    label: '操作',
    value: 'Operate',
    options: [
      {
        label: 'font-phone-outline',
        value: 'font-phone-outline',
      },
      {
        label: 'font-email-outline',
        value: 'font-email-outline',
      },
    ],
  },
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
