<template>
  <STable
    ref="table"
    v-model:columns="columns"
    v-model:sources="sources"
    v-model:expandedRowKeys="expandedRowKeys"
    :customBodyerRowStates="customBodyerRowStates"
    rowKey="id"
    border
  >
    <template #expander="{ record }">
      <template v-if="record.id === 'key-alice' || record.id === 'key-mary' || record.id === 'key-john'">
        这里显示 {{ record.name }} 用户信息: 年龄 {{ record.age }}, 邮箱 {{ record.email }}。
      </template>
    </template>
  </STable>
</template>

<script setup lang="ts">
const columns = tableColumnsDefiner([
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Email', dataIndex: 'email' },
])

const sources = tableSourcesDefiner([
  {
    id: 'key-alice',
    name: 'Alice',
    age: 36,
    email: 'alice@gmail.com',
  },
  {
    id: 'key-mary',
    name: 'Mary',
    age: 22,
    email: 'mary@gmail.com',
  },
  {
    id: 'key-john',
    name: 'John',
    age: 27,
    email: 'john@gmail.com',
  },
  {
    id: 'key-tim',
    name: 'Tim',
    age: 19,
    email: 'tim@gmail.com',
  },
  {
    id: 'key-david',
    name: 'David',
    age: 24,
    email: 'david@gmail.com',
  },
])

const expandedRowKeys = ref(['key-alice'])

const customBodyerRowStates = tableCustomBodyerRowStatesDefiner(options => {
  if (['key-mary'].includes(options.record.id)) {
    return {
      expandable: false, // 可以定义 expandable=ref(false) 来引用，这样可以通过 expandable.value 动态修改
    }
  }
})
</script>
