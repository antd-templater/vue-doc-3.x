<template>
  <div class="container">
    <div style="width: 100%; margin: 0 0 10px;">
      <div style="display: inline-block; margin: 0 8px 16px 0">
        preserve
      </div>

      <ASwitch v-model:checked="preserveSelectedRowKeys">
        <template #checkedChildren>
          <CheckOutlined />
        </template>
        <template #unCheckedChildren>
          <CloseOutlined />
        </template>
      </ASwitch>

      <div style="display: inline-block; margin: 0 8px 16px 35px">
        模式
      </div>

      <ASelect
        v-model:value="selectedRowMode"
        style="width: 110px;"
        :options="options"
      />

      <template v-if="selectedRowMode === 'Checkbox'">
        <div style="display: inline-block; margin: 0 8px 16px 35px">
          手动选择
        </div>

        <AButton @click="table?.select(['key3', 'key5', 'key6', 'key7'])">
          3 / 5 / 6 / 7
        </AButton>
      </template>
    </div>

    <STable
      ref="table"
      v-model:columns="columns"
      v-model:paginate="paginate"
      v-model:selectedRowKeys="selectedRowKeys"
      :preserveSelectedRowKeys="preserveSelectedRowKeys"
      :customBodyerRowStates="customBodyerRowStates"
      :selectedRowMode="selectedRowMode"
      :loadData="loadData"
      :immediate="true"
      rowKey="id"
    />
  </div>
</template>

<script setup lang="ts">
const columns = tableColumnsDefiner([
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Like', dataIndex: 'like' },
  { title: 'Email', dataIndex: 'email' },
])

const paginate = tablePaginateDefiner({
  pageNo: 1,
  pageSize: 5,
  totalPage: 0,
  totalSize: 0,
  showSizeChanger: false,
  showTotal: true,
  visible: true,
  fixed: true,
})

const loadData = tableLoadDataDefiner(options => {
  // 模拟 800ms 后，获取接口数据
  const promise = new Promise(resolve => {
    setTimeout(resolve, 800)
  })

  if (options.paginate.pageNo === 1) {
    return promise.then(() => {
      return {
        code: '0000',
        message: null,
        result: {
          data: [
            { id: 'key1', name: 'Alice', age: 36, like: 'Cycling', email: 'alice@gmail.com' },
            { id: 'key2', name: 'Mary', age: 22, like: 'Swim', email: 'mary@gmail.com' },
            { id: 'key3', name: 'John', age: 27, like: 'Music', email: 'john@gmail.com' },
            { id: 'key4', name: 'Tim', age: 19, like: 'IT', email: 'tim@gmail.com' },
            { id: 'key5', name: 'David', age: 24, like: 'Draw', email: 'david@gmail.com' },
          ],
          pageNo: 1,
          pageSize: 5,
          totalPage: 2,
          totalSize: 9,
        },
      }
    })
  }

  if (options.paginate.pageNo === 2) {
    return promise.then(() => {
      return {
        code: '0000',
        message: null,
        result: {
          data: [
            { id: 'key6', name: 'George', age: 21, like: 'History', email: 'george@gmail.com' },
            { id: 'key7', name: 'Peter', age: 22, like: 'Draw', email: 'peter@gmail.com' },
            { id: 'key8', name: 'Eric', age: 31, like: 'Cycling', email: 'eric@gmail.com' },
            { id: 'key9', name: 'Larry', age: 22, like: 'Music', email: 'larry@gmail.com' },
          ],
          pageNo: 2,
          pageSize: 5,
          totalPage: 2,
          totalSize: 9,
        },
      }
    })
  }

  return {
    code: '0000',
    message: null,
    result: {
      data: [],
      pageNo: 1,
      pageSize: 5,
      totalPage: 0,
      totalSize: 0,
    },
  }
})

const customBodyerRowStates = tableCustomBodyerRowStatesDefiner(options => {
  if (options.record.id === 'key3' || options.record.id === 'key7') {
    return {
      selectable: false, // 可以定义 selectable=ref(false) 来引用，这样可以通过 selectable.value 动态修改
    }
  }
})

const table = ref(null as InstanceType<STable> | null)
const selectedRowMode = ref<'Checkbox' | 'Radio' | 'None'>('Checkbox')
const selectedRowKeys = ref<string[]>(['key2', 'key3', 'key9'])
const preserveSelectedRowKeys = ref(true)

const options = [
  { label: 'Checkbox', value: 'Checkbox' },
  { label: 'Radio', value: 'Radio' },
  { label: 'None', value: 'None' },
]
</script>
