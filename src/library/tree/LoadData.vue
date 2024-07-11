<template>
  <div class="container">
    <div class="left-container">
      <STree
        ref="tree"
        v-model:treeData="treeData"
        v-model:checkedKeys="checkedKeys"
        v-model:selectedKeys="selectedKeys"
        v-model:expandedKeys="expandedKeys"
        :loadData="loadData"
        :checkable="true"
      />
    </div>

    <div class="right-container">
      <div class="right-item">
        <pre>{{ printCheckedKeys }}</pre>
      </div>
      <div class="right-item">
        <pre>{{ printExpandedKeys }}</pre>
      </div>
      <div class="right-item">
        <pre>{{ printSelectedKeys }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface TreeData {
  key: string;
  title: string;
  isLeaf?: boolean;
  disabled?: boolean;
  disableCheckbox?: boolean;
  children?: TreeData[];
  [key: string]: any;
}

const treeData = treeDataDefiner<TreeData>([
  {
    key: '0',
    title: '0',
    isLeaf: false,
  },
])

const loadData = treeLoadDataDefiner<TreeData>(async options => {
  // 模拟接口异步返回
  await new Promise(resolve => setTimeout(resolve, 800))

  if (options.key === '0') {
    return [
      {
        key: '0-0',
        title: '0-0',
        isLeaf: false,
      },
      {
        key: '0-1',
        title: '0-1',
        isLeaf: false,
      },
      {
        key: '0-2',
        title: '0-2',
      },
    ]
  }

  if (options.key === '0-0') {
    return [
      {
        key: '0-0-0',
        title: '0-0-0',
      },
      {
        key: '0-0-1',
        title: '0-0-1',
      },
    ]
  }

  if (options.key === '0-1') {
    return [
      {
        key: '0-1-0',
        title: '0-1-0',
      },
      {
        key: '0-1-1',
        title: '0-1-1',
      },
    ]
  }
})

const checkedKeys = ref(['0-0-0', '0-0-1', '0-1-0', '0-2'])
const selectedKeys = ref(['0'])
const expandedKeys = ref(['0'])

// Printing
const printCheckedKeys = ref('')
const printExpandedKeys = ref('')
const printSelectedKeys = ref('')

watchEffect(() => {
  const prints = {
    checkedKeys: [] as string[],
    expandedKeys: [] as string[],
    selectedKeys: [] as string[],
  }

  prints.checkedKeys.push(`checkedKeys:`)
  prints.expandedKeys.push(`expandedKeys:`)
  prints.selectedKeys.push(`selectedKeys:`)

  prints.checkedKeys.push(checkedKeys.value.map(key => ` "${key}"`).join('\n'))
  prints.expandedKeys.push(expandedKeys.value.map(key => ` "${key}"`).join('\n'))
  prints.selectedKeys.push(selectedKeys.value.map(key => ` "${key}"`).join('\n'))

  printCheckedKeys.value = prints.checkedKeys.join('\n')
  printExpandedKeys.value = prints.expandedKeys.join('\n')
  printSelectedKeys.value = prints.selectedKeys.join('\n')
})
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;

  .left-container {
    flex: 0 0 auto;
    width: 240px;
    padding: 3px 8px 5px;
  }

  .right-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    flex: 1 1 auto;
    width: 100%;
    margin: 0 0 0 5px;
    padding: 0 0 0 35px;
    color: #606266;
    font-size: 13px;
    font-weight: 500;
    border-left: dashed 1px #ddd;

    .right-item {
      flex: 0 0 auto;
      width: 33.3333%;

      pre {
        margin: 0;
        padding: 3px 0 0;
      }
    }
  }
}
</style>
