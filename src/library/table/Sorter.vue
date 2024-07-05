<template>
  <div class="container">
    <div style="width: 100%; margin: 0 0 10px;">
      <div style="display: inline-block; margin: 0 8px 16px 0">
        多列排序
      </div>

      <ASwitch
        v-model:checked="columnSorterMultiple"
        unCheckedChildren="关闭"
        checkedChildren="开启"
      />
    </div>

    <STable
      v-model:columns="columns"
      v-model:paginate="paginate"
      :defaultColumnSorters="defaultColumnSorters"
      :columnSorterMultiple="columnSorterMultiple"
      :loadData="loadData"
      :immediate="true"
    />
  </div>
</template>

<script setup lang="ts">
const columns = tableColumnsDefiner([
  { title: '学生', dataIndex: 'student', align: 'center', width: 95, fixed: 'left' },
  { title: '语文', dataIndex: 'language', align: 'center', sorter: true },
  { title: '数学', dataIndex: 'math', align: 'center', sorter: true },
  { title: '英语', dataIndex: 'english', align: 'center', sorter: true },
  { title: '物理', dataIndex: 'physical', align: 'center' },
  { title: '地理', dataIndex: 'geography', align: 'center' },
])

const paginate = tablePaginateDefiner({
  pageNo: 1,
  pageSize: 10,
  totalPage: 0,
  totalSize: 0,
  showSizeChanger: false,
  showTotal: true,
  visible: true,
  fixed: true,
})

// 是否支持多列排序
const columnSorterMultiple = ref(false)

// 设定默认排序
const defaultColumnSorters = tableSorterDefiner([
  {
    field: 'math',
    value: 'ascend',
  },
])

// 模拟数据排序
const sortData = (data: any[], sorts: any[]) => {
  return data.sort((next: any, prev: any) => {
    for (const sort of sorts) {
      if (sort.value === 'ascend' && next[sort.field] < prev[sort.field]) {
        return -1
      }

      if (sort.value === 'ascend' && next[sort.field] > prev[sort.field]) {
        return 1
      }

      if (sort.value === 'descend' && next[sort.field] < prev[sort.field]) {
        return 1
      }

      if (sort.value === 'descend' && next[sort.field] > prev[sort.field]) {
        return -1
      }
    }

    return 1
  })
}

// 加载远程数据
const loadData = tableLoadDataDefiner(options => {
  // 模拟 600ms 后，获取接口数据
  const promise = new Promise(resolve => {
    setTimeout(resolve, 600)
  })

  if (options.paginate.pageNo === 1) {
    const data = [
      { student: 'Alice', language: 99, math: 91, english: 88, physical: 90, geography: 87 },
      { student: 'Mary', language: 88, math: 97, english: 90, physical: 88, geography: 97 },
      { student: 'John', language: 99, math: 86, english: 88, physical: 89, geography: 93 },
      { student: 'Betty', language: 88, math: 89, english: 90, physical: 87, geography: 97 },
      { student: 'Carol', language: 99, math: 99, english: 97, physical: 88, geography: 93 },
      { student: 'Zora', language: 93, math: 91, english: 88, physical: 99, geography: 97 },
      { student: 'Jude', language: 93, math: 97, english: 93, physical: 87, geography: 90 },
      { student: 'Kim', language: 97, math: 91, english: 95, physical: 97, geography: 87 },
      { student: 'Astrid', language: 97, math: 89, english: 83, physical: 97, geography: 90 },
    ]

    return promise.then(() => {
      return {
        code: '0000',
        message: null,
        result: {
          data: sortData(data, options.sorter),
          pageNo: 1,
          pageSize: 10,
          totalPage: 1,
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
</script>
