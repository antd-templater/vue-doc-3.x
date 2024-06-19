<template>
  <ASpace
    :size="15"
    :wrap="true"
    style="margin: 0"
    direction="vertical"
  >
    <div
      class="resize-container"
      style="width: 220px"
    >
      <SEllipsis ellipsis>
        一段用来测试 SEllipsis 的文本内容
      </SEllipsis>
    </div>

    <div
      class="resize-container"
      style="width: 220px"
    >
      <SEllipsis
        title="自定义 title 文本内容"
        ellipsis
      >
        一段用来测试 SEllipsis 的文本内容
      </SEllipsis>
    </div>

    <div
      class="resize-container"
      style="width: 220px"
    >
      <SEllipsis ellipsis>
        <template #title>
          <CheckCircleOutlined style="margin-right: 3px;" />
          <span>来自 title 卡槽的提示内容</span>
        </template>

        <template #default>
          一段用来测试 SEllipsis 的文本内容
        </template>
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
