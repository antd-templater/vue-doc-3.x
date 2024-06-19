<template>
  <div class="container">
    <div style="width: 100%;">
      <div style="width: 100%; height: 44px; font-size: 14px; font-weight: 600; line-height: 44px;">
        第一种 (表格 Footer 横向滚动)
      </div>

      <div style="width: 100%; height: 300px; overflow: auto">
        <STable
          :border="true"
          :sticky="sticky"
          :scroll="scroll"
          :columns="columns"
          :sources="sources"
          :summarys="summarys"
          :customBodyerCellRender="customBodyerCellRender"
          :customFooterCellRender="customFooterCellRender1"
          tableLayout="auto"
        />
      </div>
    </div>

    <div style="width: 100%; margin-top: 30px;">
      <div style="width: 100%; height: 44px; font-size: 14px; font-weight: 600; line-height: 44px;">
        第二种 (表格 Footer 横向固定)
      </div>

      <div style="width: 100%; height: 300px; overflow: auto">
        <STable
          :border="true"
          :sticky="sticky"
          :scroll="scroll"
          :columns="columns"
          :sources="sources"
          :summarys="summarys"
          :customBodyerCellRender="customBodyerCellRender"
          :customFooterCellRender="customFooterCellRender2"
          tableLayout="auto"
        >
          <template #footerCell="{ column, value, scroller }">
            <template v-if="column.colIndex === 1">
              <div :style="{ transform: `translateX(${scroller.left}px` }">
                {{ value }}
              </div>
            </template>
          </template>
        </STable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sticky = tableStickyDefiner({
  topHeader: true, // 置顶吸附
  bottomFooter: true, // 置底吸附
})

const scroll = tableScrollDefiner({
  x: 'max-content',
  overflow: 'visible',
})

const columns = tableColumnsDefiner([
  { title: '学生', dataIndex: 'student', align: 'center', width: 100, fixed: 'left' },
  { title: '语文', dataIndex: 'language', align: 'center', minWidth: 90 },
  { title: '数学', dataIndex: 'math', align: 'center', minWidth: 90 },
  { title: '技术', dataIndex: 'technology', align: 'center', minWidth: 90 },
  { title: '英语', dataIndex: 'english', align: 'center', minWidth: 90 },
  { title: '物理', dataIndex: 'physical', align: 'center', minWidth: 90 },
  { title: '政治', dataIndex: 'politics', align: 'center', minWidth: 90 },
  { title: '化学', dataIndex: 'chemistry', align: 'center', minWidth: 90 },
  { title: '历史', dataIndex: 'history', align: 'center', minWidth: 90 },
  { title: '生物学', dataIndex: 'biology', align: 'center', minWidth: 90 },
  { title: '地理', dataIndex: 'geography', align: 'center', minWidth: 90 },
  { title: '总分', dataIndex: 'total', align: 'center', width: 90, fixed: 'right' },
])

const sources = tableSourcesDefiner([
  { student: 'Alice', language: 99, math: 81, technology: 80, english: 90, physical: 86, politics: 91, chemistry: 81, history: 99, biology: 87, geography: 91 },
  { student: 'Mary', language: 88, math: 97, technology: 91, english: 86, physical: 88, politics: 96, chemistry: 95, history: 87, biology: 81, geography: 80 },
  { student: 'John', language: 91, math: 86, technology: 83, english: 85, physical: 89, politics: 90, chemistry: 84, history: 87, biology: 89, geography: 83 },
  { student: 'Betty', language: 80, math: 85, technology: 93, english: 90, physical: 82, politics: 81, chemistry: 96, history: 95, biology: 92, geography: 90 },
  { student: 'Carol', language: 87, math: 99, technology: 91, english: 92, physical: 92, politics: 88, chemistry: 86, history: 90, biology: 91, geography: 86 },
  { student: 'Zora', language: 83, math: 91, technology: 90, english: 91, physical: 99, politics: 82, chemistry: 93, history: 91, biology: 90, geography: 90 },
  { student: 'Jude', language: 93, math: 82, technology: 87, english: 96, physical: 87, politics: 88, chemistry: 82, history: 92, biology: 85, geography: 88 },
  { student: 'Kim', language: 93, math: 91, technology: 86, english: 86, physical: 81, politics: 91, chemistry: 87, history: 93, biology: 83, geography: 91 },
  { student: 'Astrid', language: 97, math: 89, technology: 85, english: 80, physical: 80, politics: 89, chemistry: 88, history: 84, biology: 87, geography: 84 },
  { student: 'Colin', language: 85, math: 97, technology: 84, english: 81, physical: 80, politics: 99, chemistry: 83, history: 86, biology: 90, geography: 94 },
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
        option.record.technology +
        option.record.english +
        option.record.physical +
        option.record.politics +
        option.record.chemistry +
        option.record.history +
        option.record.biology +
        option.record.geography
      ),
    }
  }
})

const customFooterCellRender1 = tableCustomFooterCellRenderDefiner(option => {
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
      item.technology +
      item.english +
      item.physical +
      item.politics +
      item.chemistry +
      item.history +
      item.biology +
      item.geography
    )
  }, 0)

  return {
    attrs: {
      style: { backgroundColor: '#f9f9f9' },
    },
    children: (total / sources.value.length).toFixed(1),
  }
})

const customFooterCellRender2 = tableCustomFooterCellRenderDefiner(option => {
  if (option.column.key === 'student') {
    return {
      attrs: {
        style: { fontWeight: '600', backgroundColor: '#f9f9f9' },
      },
      children: '说明',
    }
  }

  if (option.column.key === 'total') {
    return {
      attrs: {
        style: { color: '#f34d4d', fontWeight: '600', backgroundColor: '#f9f9f9' },
      },
      children: 'Good!',
    }
  }

  if (option.colIndex === 1) {
    const total = sources.value.reduce((total, item: any) => {
      return (
        total +
        item.language +
        item.math +
        item.technology +
        item.english +
        item.physical +
        item.politics +
        item.chemistry +
        item.history +
        item.biology +
        item.geography
      )
    }, 0)

    return {
      attrs: {
        style: { paddingLeft: '20px', backgroundColor: '#f9f9f9' },
      },
      props: {
        align: 'left',
        colSpan: 10,
      },
      children: `随机抽样, 共计 ${sources.value.length} 名学生, 该学期平均总分: ${(total / sources.value.length).toFixed(1)}`,
    }
  }
})
</script>
