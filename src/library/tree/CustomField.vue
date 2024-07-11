<template>
  <div class="container">
    <div class="left-container">
      <STree
        ref="tree"
        v-model:treeData="treeData"
        v-model:checkedKeys="checkedKeys"
        v-model:selectedKeys="selectedKeys"
        v-model:expandedKeys="expandedKeys"
        :fieldNames="fieldNames"
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
  id: string;
  label: string;
  disabled?: boolean;
  disableCheckbox?: boolean;
  tree?: TreeData[];
  [key: string]: any;
}

const treeData = treeDataDefiner<TreeData>([
  {
    id: '0',
    label: '0',
    tree: [
      {
        id: '0-0',
        label: '0-0',
        tree: [
          {
            id: '0-0-0',
            label: '0-0-0',
          },
          {
            id: '0-0-1',
            label: '0-0-1',
          },
        ],
      },
      {
        id: '0-1',
        label: '0-1',
        tree: [
          {
            id: '0-1-0',
            label: '0-1-0',
          },
          {
            id: '0-1-1',
            label: '0-1-1',
          },
        ],
      },
      {
        id: '0-2',
        label: '0-2',
        tree: [
          {
            id: '0-2-0',
            label: '0-2-0',
          },
        ],
      },
    ],
  },
])

const fieldNames = treeFieldNamesDefiner({
  key: 'id',
  title: 'label',
  children: 'tree',
})

const checkedKeys = ref(['0-0', '0-0-0', '0-0-1', '0-1-0'])
const expandedKeys = ref(['0', '0-0', '0-1'])
const selectedKeys = ref(['0-0-0'])

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
