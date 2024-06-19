<template>
  <div style="width: 100%; height: 300px; overflow: auto">
    <STable
      :border="true"
      :sticky="sticky"
      :columns="columns"
      :sources="sources"
      :summarys="summarys"
      :customFooterCellRender="customFooterCellRender"
    />
  </div>
</template>

<script setup lang="ts">
const sticky = tableStickyDefiner({
  topHeader: true, // 置顶吸附
  bottomFooter: true, // 置底吸附
})

const columns = tableColumnsDefiner([
  { title: '科目', dataIndex: 'subject', align: 'center', width: 100 },
  { title: 'Alice', dataIndex: 'alice', align: 'center' },
  { title: 'Mary', dataIndex: 'mary', align: 'center' },
  { title: 'John', dataIndex: 'john', align: 'center' },
])

const sources = tableSourcesDefiner([
  { subject: '数学', alice: 99, mary: 88, john: 89 },
  { subject: '语文', alice: 92, mary: 93, john: 91 },
  { subject: '英文', alice: 96, mary: 96, john: 99 },
  { subject: '政治', alice: 90, mary: 96, john: 91 },
  { subject: '物理', alice: 98, mary: 91, john: 92 },
  { subject: '化学', alice: 99, mary: 89, john: 87 },
])

const summarys = tableSummarysDefiner([
  { subject: '总结' },
])

const customFooterCellRender = tableCustomFooterCellRenderDefiner(option => {
  if (option.column.key !== 'subject') {
    return {
      attrs: {
        style: { backgroundColor: '#fcfcfc' },
      },
      children: sources.value.reduce((total, source: any) => total + source[option.column.key], 0),
    }
  }

  return {
    attrs: {
      style: { backgroundColor: '#fcfcfc' },
    },
  }
})
</script>
