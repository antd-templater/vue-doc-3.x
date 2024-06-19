<template>
  <STable
    :border="true"
    :persistSourceRanges="true"
    :customBodyerCellRender="customBodyerCellRender"
    :columns="columns"
    :sources="sources"
  />
</template>

<script setup lang="ts">
const columns = tableColumnsDefiner([
  { title: 'Name', dataIndex: 'name', width: 95 },
  { title: 'Age', dataIndex: 'age', width: 90 },
  { title: 'Home Telephone', dataIndex: 'homeTelephone', colSpan: 2 },
  { title: 'Mobile Telephone', dataIndex: 'mobileTelephone' },
  { title: 'Address', dataIndex: 'address', width: 100 },
])

const sources = tableSourcesDefiner([
  { name: 'Alice', age: 36, homeTelephone: '0574-86081869', mobileTelephone: '18212951391', address: 'NingBo' },
  { name: 'Mary', age: 22, homeTelephone: '0580-86083878', mobileTelephone: '', address: 'ZhouShan' },
  { name: 'John', age: 22, homeTelephone: '0580-86081257', mobileTelephone: '', address: 'ZhouShan' },
])

const customBodyerCellRender = tableCustomBodyerCellRenderDefiner(option => {
  if (option.column.key == 'age' && option.record.name == 'Mary') {
    return {
      props: { rowSpan: 2 },
    }
  }

  if (option.column.key == 'homeTelephone' && option.record.name == 'Mary') {
    return {
      props: { colSpan: 2 },
    }
  }

  if (option.column.key == 'homeTelephone' && option.record.name == 'John') {
    return {
      props: { colSpan: 2 },
    }
  }

  return {
    props: { colSpan: 1 }, // 消除 column colSpan: 2 带来的影响
  }
})
</script>
