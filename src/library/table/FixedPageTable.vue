<template>
  <STable
    :border="true"
    :sticky="sticky"
    :scroll="scroll"
    :columns="columns"
    :sources="sources"
    :summarys="summarys"
    :customBodyerCellRender="customBodyerCellRender"
    :customFooterCellRender="customFooterCellRender"
    tableLayout="auto"
  />
</template>

<script setup lang="ts">
const sticky = tableStickyDefiner({
  topHeader: 65, // 置顶吸附
  bottomFooter: true, // 置底吸附
})

const scroll = tableScrollDefiner({
  x: 'max-content',
  overflow: 'visible',
})

const columns = tableColumnsDefiner([
  { title: '学生', dataIndex: 'student', align: 'center', width: 100 },
  { title: '语文', dataIndex: 'language', align: 'center' },
  { title: '数学', dataIndex: 'math', align: 'center' },
  { title: '英语', dataIndex: 'english', align: 'center' },
  { title: '总分', dataIndex: 'total', align: 'center' },
])

const sources = tableSourcesDefiner([
  { student: 'Alice', language: 99, math: 81, english: 90 },
  { student: 'Mary', language: 88, math: 97, english: 86 },
  { student: 'John', language: 91, math: 86, english: 85 },
  { student: 'Betty', language: 80, math: 85, english: 90 },
  { student: 'Carol', language: 87, math: 99, english: 92 },
  { student: 'Zora', language: 83, math: 91, english: 91 },
  { student: 'Jude', language: 93, math: 82, english: 96 },
  { student: 'Kim', language: 93, math: 91, english: 86 },
  { student: 'Astrid', language: 97, math: 89, english: 80 },
  { student: 'Colin', language: 85, math: 97, english: 81 },
])

const summarys = tableSummarysDefiner([
  { student: '平均分' },
])

const customBodyerCellRender = tableCustomBodyerCellRenderDefiner(option => {
  if (option.column.key === 'total') {
    return {
      children: (
        option.record.language +
        option.record.math +
        option.record.english
      ),
    }
  }
})

const customFooterCellRender = tableCustomFooterCellRenderDefiner(option => {
  if (option.column.key === 'student') {
    return {
      attrs: {
        style: { fontWeight: '600', backgroundColor: '#f9f9f9' },
      },
    }
  }

  const total = sources.value.reduce((total, item: any) => {
    if (option.column.key !== 'total') {
      return total + item[option.column.key]
    }

    return (
      total +
      item.language +
      item.math +
      item.english
    )
  }, 0)

  return {
    attrs: {
      style: { backgroundColor: '#f9f9f9' },
    },
    children: (total / sources.value.length).toFixed(1),
  }
})
</script>
