<template>
  <ASpace
    :size="15"
    :wrap="true"
    style="margin: 0"
    direction="vertical"
  >
    <div
      class="resize-container"
      style="width: 172px"
    >
      <SEllipsis>
        一段用来测试 SEllipsis 的文本内容
      </SEllipsis>
    </div>

    <div
      class="resize-container"
      style="width: 200px"
    >
      <SEllipsis ellipsis>
        一段用来测试 SEllipsis 的文本内容
      </SEllipsis>
    </div>

    <div
      class="resize-container"
      style="width: 250px"
    >
      <SEllipsis ellipsis>
        一段用来测试 SEllipsis 的文本内容
      </SEllipsis>
    </div>
  </ASpace>
</template>

<script setup lang="ts">
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
