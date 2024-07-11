<template>
  <div class="section">
    <div class="container">
      <div class="left-container">
        <div style="margin-bottom: 8px; color: #303133; font-size: 14px;">
          <div> 默认 default 模式 </div>
        </div>

        <STree
          ref="tree"
          v-model:treeData="treeData"
          v-model:checkedKeys="checkedKeys1"
          v-model:selectedKeys="selectedKeys1"
          v-model:expandedKeys="expandedKeys1"
          :checkable="true"
        />
      </div>

      <div class="right-container">
        <div class="right-item">
          <pre>{{ printCheckedKeys1 }}</pre>
        </div>
        <div class="right-item">
          <pre>{{ printExpandedKeys1 }}</pre>
        </div>
        <div class="right-item">
          <pre>{{ printSelectedKeys1 }}</pre>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="left-container">
        <div style="margin-bottom: 8px; color: #303133; font-size: 14px;">
          <div> 使用 link 模式 </div>
        </div>

        <STree
          ref="tree"
          v-model:treeData="treeData"
          v-model:checkedKeys="checkedKeys2"
          v-model:selectedKeys="selectedKeys2"
          v-model:expandedKeys="expandedKeys2"
          selectedMode="link"
          checkedMode="link"
          :checkable="true"
        />
      </div>

      <div class="right-container">
        <div class="right-item">
          <pre>{{ printCheckedKeys2 }}</pre>
        </div>
        <div class="right-item">
          <pre>{{ printExpandedKeys2 }}</pre>
        </div>
        <div class="right-item">
          <pre>{{ printSelectedKeys2 }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface TreeData {
  key: string;
  title: string;
  disabled?: boolean;
  disableCheckbox?: boolean;
  children?: TreeData[];
  [key: string]: any;
}

const treeData = treeDataDefiner<TreeData>([
  {
    key: '0',
    title: '0',
    children: [
      {
        key: '0-0',
        title: '0-0',
        children: [
          {
            key: '0-0-0',
            title: '0-0-0',
          },
          {
            key: '0-0-1',
            title: '0-0-1',
          },
        ],
      },
      {
        key: '0-1',
        title: '0-1',
        children: [
          {
            key: '0-1-0',
            title: '0-1-0',
          },
          {
            key: '0-1-1',
            title: '0-1-1',
          },
        ],
      },
    ],
  },
])

// default
const checkedKeys1 = ref(['0-0', '0-0-0', '0-1-0'])
const expandedKeys1 = ref(['0', '0-0', '0-1'])
const selectedKeys1 = ref(['0-0-0'])

const printCheckedKeys1 = ref('')
const printExpandedKeys1 = ref('')
const printSelectedKeys1 = ref('')

// link
const checkedKeys2 = ref(['0', '0-0', '0-0-0', '0-1', '0-1-0'])
const expandedKeys2 = ref(['0', '0-0', '0-1'])
const selectedKeys2 = ref(['0', '0-0', '0-0-0'])

const printCheckedKeys2 = ref('')
const printExpandedKeys2 = ref('')
const printSelectedKeys2 = ref('')

watchEffect(() => {
  const prints1 = {
    checkedKeys: [] as string[],
    expandedKeys: [] as string[],
    selectedKeys: [] as string[],
  }

  const prints2 = {
    checkedKeys: [] as string[],
    expandedKeys: [] as string[],
    selectedKeys: [] as string[],
  }

  prints1.checkedKeys.push(`checkedKeys:`)
  prints1.expandedKeys.push(`expandedKeys:`)
  prints1.selectedKeys.push(`selectedKeys:`)

  prints2.checkedKeys.push(`checkedKeys:`)
  prints2.expandedKeys.push(`expandedKeys:`)
  prints2.selectedKeys.push(`selectedKeys:`)

  prints1.checkedKeys.push(checkedKeys1.value.map(key => ` "${key}"`).join('\n'))
  prints1.expandedKeys.push(expandedKeys1.value.map(key => ` "${key}"`).join('\n'))
  prints1.selectedKeys.push(selectedKeys1.value.map(key => ` "${key}"`).join('\n'))

  prints2.checkedKeys.push(checkedKeys2.value.map(key => ` "${key}"`).join('\n'))
  prints2.expandedKeys.push(expandedKeys2.value.map(key => ` "${key}"`).join('\n'))
  prints2.selectedKeys.push(selectedKeys2.value.map(key => ` "${key}"`).join('\n'))

  printCheckedKeys1.value = prints1.checkedKeys.join('\n')
  printExpandedKeys1.value = prints1.expandedKeys.join('\n')
  printSelectedKeys1.value = prints1.selectedKeys.join('\n')

  printCheckedKeys2.value = prints2.checkedKeys.join('\n')
  printExpandedKeys2.value = prints2.expandedKeys.join('\n')
  printSelectedKeys2.value = prints2.selectedKeys.join('\n')
})
</script>

<style lang="less" scoped>
.section {
  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    position: relative;

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

  .container + .container {
    margin-top: 31px;

    .right-container {
      .right-item {
        pre {
          margin: 0;
          padding: 8px 0 0;
        }
      }
    }

    &::before {
      content: '';
      width: 100%;
      height: 1;
      border-top: dashed 1px #efefef;
      position: absolute;
      top: -15px;
    }
  }
}
</style>
