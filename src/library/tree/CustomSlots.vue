<template>
  <div class="container">
    <div class="left-container">
      <STree
        ref="tree"
        v-model:treeData="treeData"
        v-model:checkedKeys="checkedKeys"
        v-model:selectedKeys="selectedKeys"
        v-model:expandedKeys="expandedKeys"
        :iconfontUrl="iconfontUrl"
        :iconPrefix="iconPrefix"
        :blockNode="true"
        :checkable="true"
        :showIcon="true"
      >
        <template #iconParent="node">
          <template v-if="node.key === '0-0'">
            <DashboardOutlined />
          </template>
        </template>

        <template #titleRootLabel>
          Root Node
        </template>

        <template #titleParentLabel="node">
          <template v-if="node.key === '0-0'">
            Parent Node
          </template>

          <template v-if="node.key === '0-1'">
            Mouse Hover
          </template>
        </template>

        <template #titleRootButton="node">
          <template v-if="node.key === '0'">
            <AButton
              danger
              type="link"
              size="small"
              @click="(e)=>{ e.stopPropagation(); }"
            >
              <template #icon>
                <EditOutlined />
              </template>
            </AButton>
          </template>
        </template>

        <template #titleParentButton="node">
          <template v-if="node.key === '0-1'">
            <AButton
              type="link"
              size="small"
              @click="(e)=>{ e.stopPropagation(); }"
            >
              <template #icon>
                <EditOutlined />
              </template>
            </AButton>
          </template>
        </template>
      </STree>
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
  icon?: string;
  title: string;
  disabled?: boolean;
  disableCheckbox?: boolean;
  alwaysShowTitleButton?: boolean;
  children?: TreeData[];
  [key: string]: any;
}

const treeData = treeDataDefiner<TreeData>([
  {
    key: '0',
    title: '0',
    alwaysShowTitleButton: true,
    children: [
      {
        key: '0-0',
        title: '0-0',
        children: [
          {
            key: '0-0-0',
            icon: 'AppleOutlined', // AIcon
            title: '0-0-0',
          },
          {
            key: '0-0-1',
            icon: 'AppleOutlined', // AIcon
            title: '0-0-1',
          },
        ],
      },
      {
        key: '0-1',
        title: '0-1',
        icon: 'PrinterOutlined',
        children: [
          {
            key: '0-1-0',
            icon: 'font-shop-outline', // IconFont
            title: '0-1-0',
          },
          {
            key: '0-1-1',
            icon: 'font-shop-outline', // IconFont
            title: '0-1-1',
          },
        ],
      },
      {
        key: '0-2',
        title: '0-2',
        children: [
          {
            key: '0-2-0',
            title: '0-2-0',
          },
        ],
      },
    ],
  },
])

const iconPrefix = 'font-'
const iconfontUrl = 'https://at.alicdn.com/t/c/font_1403293_zz95gjv9ru.js'
const checkedKeys = ref(['0-0', '0-0-0', '0-0-1', '0-1-0'])
const expandedKeys = ref(['0', '0-0', '0-1'])
const selectedKeys = ref(['0-1'])

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
