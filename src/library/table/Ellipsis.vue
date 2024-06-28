<template>
  <STable
    columnPresetResizable
    :columns="columns"
    :sources="sources"
  />
</template>

<script setup lang="ts">
const columns = tableColumnsDefiner([
  { title: 'Name', dataIndex: 'name', minWidth: 90, maxWidth: 90 },
  { title: 'Age', dataIndex: 'age', width: 80, minWidth: 80, maxWidth: 120 },
  { title: 'Email (ellipsis)', dataIndex: 'email', ellipsis: true },
  { title: 'Info (tooltip)', dataIndex: 'info', tooltip: true },
])

const sources = tableSourcesDefiner([
  { name: 'Alice', age: 36, email: 'developer.alice-developer-going@gamil.com', info: 'Alice is an Internet developer. She likes cycling' },
  { name: 'Mary', age: 22, email: 'developer.is-swimming-number-1@gamil.com', info: 'Mary is a junior student who enjoys swimming' },
  { name: 'John', age: 27, email: 'developer.music.soul-libertarian@gamil.com', info: 'John loves music and often goes to bars to sing' },
])
</script>
