<template>
  <ASpace
    :size="15"
    :wrap="true"
    style="width: 100%; margin: 0"
    direction="vertical"
  >
    <AButton @click="doAdd">
      新增
    </AButton>

    <STable
      ref="table"
      :columns="columns"
      :sources="sources"
    >
      <template #bodyerCell="{ column, record, groupIndex }">
        <template v-if="column.key == 'serial'">
          {{ groupIndex + 1 }}
        </template>

        <template v-if="column.key == 'action'">
          <AButton
            danger
            type="link"
            @click="doDelete(record)"
          >
            删除
          </AButton>
        </template>
      </template>
    </STable>
  </ASpace>
</template>

<script setup lang="ts">
let index = 0

const table = ref(null as InstanceType<STable> | null)

const columns = tableColumnsDefiner([
  { title: '序号', dataIndex: 'serial', align: 'center', width: 60 },
  { title: '姓名', dataIndex: 'name', align: 'center' },
  { title: '年龄', dataIndex: 'age', align: 'center' },
  { title: '爱好', dataIndex: 'like', align: 'center' },
  { title: '操作', dataIndex: 'action', align: 'center' },
])

const sources = tableSourcesDefiner([
  { name: 'Alice', age: 36, like: '骑车' },
  { name: 'Mary', age: 22, like: '游泳' },
  { name: 'John', age: 27, like: '音乐' },
])

const doAdd = () => {
  index++

  sources.value.push({
    name: `新增一员 +${index}`,
    like: `爱好 +${index}`,
    age: 30,
  })

  // 当使用 Array.push 时，必须使用 update(true)
  table.value?.update(true)
}

const doDelete = (record: any) => {
  // 如果是直接修改 sources 引用，则无需 update(true)
  sources.value = sources.value.filter(source => {
    return source !== record
  })
}
</script>
