<template>
  <STable
    :columns="columns"
    :sources="sources"
    :customBodyerCellRender="customBodyerCellRender"
    :border="true"
  />
</template>

<script setup lang="ts">
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

const customBodyerCellRender = tableCustomBodyerCellRenderDefiner(options => {
  if (options.groupIndex % 2 === 1) {
    return {
      attrs: {
        style: 'background-color: #fcfcfc',
      },
    }
  }
})
</script>
