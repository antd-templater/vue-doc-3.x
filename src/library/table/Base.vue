<template>
  <STable
    :columns="columns"
    :sources="sources"
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
])
</script>
