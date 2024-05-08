<template>
  <ASpace
    :size="15"
    :wrap="true"
  >
    <SIcon
      :iconPrefix="iconPrefix"
      :iconfontUrl="iconfontUrl"
      style="font-size: 16px; color: #808288;"
      type="font-product"
    />

    <SIcon
      :iconPrefix="iconPrefix"
      :iconfontUrl="iconfontUrl"
      style="font-size: 16px; color: #808288;"
      type="font-shop"
    />

    <SIcon
      :iconPrefix="iconPrefix"
      :iconfontUrl="iconfontUrl"
      style="font-size: 16px; color: #808288;"
      type="font-setting"
    />

    <SIcon
      :iconPrefix="iconPrefix"
      :iconfontUrl="iconfontUrl"
      style="font-size: 16px; color: #808288;"
      type="font-refresh"
      spin
    />
  </ASpace>
</template>

<script setup lang="ts">
const iconPrefix = 'font-'
const iconfontUrl = 'https://at.alicdn.com/t/c/font_1403293_zz95gjv9ru.js'
</script>
