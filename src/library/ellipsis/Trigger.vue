<template>
  <ASpace
    :size="15"
    :wrap="true"
    style="margin: 0"
    direction="vertical"
  >
    <ASpace>
      <div
        class="resize-container"
        style="width: 220px"
      >
        <SEllipsis
          title="一段用来测试 SEllipsis 的文本内容"
          ellipsis
        >
          一段用来测试 SEllipsis 的文本内容
        </SEllipsis>
      </div>

      <div>Trigger: hover</div>
    </ASpace>

    <ASpace>
      <div
        class="resize-container"
        style="width: 220px"
      >
        <SEllipsis
          title="一段用来测试 SEllipsis 的文本内容"
          trigger="click"
          ellipsis
        >
          一段用来测试 SEllipsis 的文本内容
        </SEllipsis>
      </div>

      <div>Trigger: click</div>
    </ASpace>

    <ASpace>
      <div
        class="resize-container"
        style="width: 250px"
      >
        <SEllipsis
          title="一段用来测试 SEllipsis 的文本内容"
          :open="open"
          ellipsis
        >
          一段用来测试 SEllipsis 的文本内容
        </SEllipsis>
      </div>

      <AButton @click="open = !open">
        {{ open ? '关闭' : '打开' }}
      </AButton>
    </ASpace>
  </ASpace>
</template>

<script setup lang="ts">
const open = ref(false)
</script>

<style lang="less" scoped>
.resize-container {
  width: 100%;
  height: 38px;
  padding: 6px 12px;
  box-sizing: border-box;
  border: solid 1px #dddddd;
  border-radius: 5px;
  resize: horizontal;
  cursor: pointer;
  overflow: auto;
}
</style>
