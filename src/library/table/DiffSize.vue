<template>
  <div class="container">
    <div style="width: 100%; margin: 0 0 10px;">
      <div style="display: inline-block; margin: 0 8px 16px 0">
        请选择
      </div>

      <ASelect
        v-model:value="size"
        style="width: 120px;"
        :options="options"
      />
    </div>

    <STable
      v-model:columns="columns"
      v-model:paginate="paginate"
      :loadData="loadData"
      :immediate="true"
      :size="size"
    />
  </div>
</template>

<script setup lang="ts">
const size = ref<any>('default')

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
            { name: 'Alice', age: 36, like: 'Cycling', email: 'alice@gmail.com' },
            { name: 'Mary', age: 22, like: 'Swim', email: 'mary@gmail.com' },
            { name: 'John', age: 27, like: 'Music', email: 'john@gmail.com' },
            { name: 'Tim', age: 19, like: 'IT', email: 'tim@gmail.com' },
            { name: 'David', age: 24, like: 'Draw', email: 'david@gmail.com' },
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
            { name: 'George', age: 21, like: 'History', email: 'george@gmail.com' },
            { name: 'Peter', age: 22, like: 'Draw', email: 'peter@gmail.com' },
            { name: 'Eric', age: 31, like: 'Cycling', email: 'eric@gmail.com' },
            { name: 'Larry', age: 22, like: 'Music', email: 'larry@gmail.com' },
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

const options = [
  { label: '大 (default)', value: 'default' },
  { label: '中 (middle)', value: 'middle' },
  { label: '小 (small)', value: 'small' },
]
</script>
