<template>
  <div class="container">
    <div style="width: 100%; margin: 0 0 10px;">
      <div style="display: inline-block; margin: 0 8px 16px 0">
        rowSelectedStrictly
      </div>

      <ASwitch v-model:checked="rowSelectedStrictly">
        <template #checkedChildren>
          <CheckOutlined />
        </template>
        <template #unCheckedChildren>
          <CloseOutlined />
        </template>
      </ASwitch>
    </div>

    <STable
      ref="table"
      v-model:columns="columns"
      v-model:sources="sources"
      :rowSelectedStrictly="rowSelectedStrictly"
      :customBodyerRowStates="customBodyerRowStates"
      :selectedRowMode="selectedRowMode"
      :expandedRowKeys="expandedRowKeys"
      treeKey="list"
      rowKey="id"
    />
  </div>
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
    list: [
      {
        id: 'key-alice-1',
        name: 'Alice-1',
        age: 36,
        email: 'Alice@gmail.com',
      },
      {
        id: 'key-alice-2',
        name: 'Alice-2',
        age: 36,
        email: 'Alice-2@gmail.com',
      },
      {
        id: 'key-alice-3',
        name: 'Alice-3',
        age: 36,
        email: 'Alice-3@gmail.com',
      },
    ],
  },
  {
    id: 'key-mary',
    name: 'Mary',
    age: 22,
    email: 'mary@gmail.com',
    list: [
      {
        id: 'key-mary-1',
        name: 'Mary-1',
        age: 22,
        email: 'mary@gmail.com',
      },
      {
        id: 'key-mary-2',
        name: 'Mary-2',
        age: 22,
        email: 'mary@gmail.com',
        list: [
          {
            id: 'key-mary-2-1',
            name: 'Mary-2-1',
            age: 22,
            email: 'mary@gmail.com',
          },
          {
            id: 'key-mary-2-2',
            name: 'Mary-2-2',
            age: 22,
            email: 'mary@gmail.com',
          },
          {
            id: 'key-mary-2-3',
            name: 'Mary-2-3',
            age: 22,
            email: 'mary@gmail.com',
          },
        ],
      },
      {
        id: 'key-mary-3',
        name: 'Mary-3',
        age: 22,
        email: 'mary@gmail.com',
      },
    ],
  },
  {
    id: 'key-john',
    name: 'John',
    age: 27,
    email: 'john@gmail.com',
    list: [
      {
        id: 'key-john-1',
        name: 'John-1',
        age: 22,
        email: 'john@gmail.com',
      },
      {
        id: 'key-john-2',
        name: 'John-2',
        age: 22,
        email: 'john@gmail.com',
        list: [
          {
            id: 'key-john-2-1',
            name: 'John-2-1',
            age: 22,
            email: 'john@gmail.com',
          },
          {
            id: 'key-john-2-2',
            name: 'John-2-2',
            age: 22,
            email: 'john@gmail.com',
          },
          {
            id: 'key-john-2-3',
            name: 'John-2-3',
            age: 22,
            email: 'john@gmail.com',
          },
        ],
      },
      {
        id: 'key-john-3',
        name: 'John-3',
        age: 22,
        email: 'john@gmail.com',
      },
    ],
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

const expandedRowKeys = ref(['key-mary', 'key-mary-2'])

const customBodyerRowStates = tableCustomBodyerRowStatesDefiner(options => {
  if (['key-mary-2', 'key-mary-3'].includes(options.record.id)) {
    return {
      selectable: false,
    }
  }
})

const selectedRowMode = ref<'Checkbox'>('Checkbox')
const rowSelectedStrictly = ref(true)
</script>
