<template>
  <STable
    :columns="columns"
    :sources="sources"
    :customBodyerCellRender="customBodyerCellRender"
    :customBodyerRowAttrs="customBodyerRowAttrs"
    :border="true"
  />
</template>

<script setup lang="ts">
import AMessage from 'ant-design-vue/es/message'

const columns = tableColumnsDefiner([
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Like', dataIndex: 'like' },
  { title: 'Email', dataIndex: 'email' },
])

const sources = tableSourcesDefiner([
  { name: 'Alice', age: 36, like: 'Cycling', email: 'alice@gmail.com' },
  { name: 'Mary', age: 22, like: 'Swim', email: 'mary@gmail.com' },
  { name: 'John', age: 27, like: 'Music', email: 'john@gmail.com' },
  { name: 'David', age: 29, like: 'Magic', email: 'david@gmail.com' },
  { name: 'George', age: 29, like: 'Badminton', email: 'george@gmail.com' },
  { name: 'Eric', age: 33, like: 'Photograph', email: 'eric@gmail.com' },
])

const customBodyerRowAttrs = tableCustomBodyerRowAttrsDefiner(options => {
  // 行单击事件
  return {
    style: {
      cursor: 'pointer',
    },
    onClick: (event: Event) => {
      AMessage.success('触发了 => 表格行事件', 1.3)
      console.log('触发表格行单击事件: ', options)
      event.stopPropagation()
    },
  }
})

const customBodyerCellRender = tableCustomBodyerCellRenderDefiner(options => {
  // 单元格单击事件
  // return {
  //   attrs: {
  //     style: {
  //       cursor: 'pointer',
  //     },
  //     onClick: (event: Event) => {
  //       AMessage.success('触发了 => 单元格事件', 1.3)
  //       console.log('触发单元格单击事件: ', options)
  //       event.stopPropagation()
  //     },
  //   },
  // }
})
</script>
