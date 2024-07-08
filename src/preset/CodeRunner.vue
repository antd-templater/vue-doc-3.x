<template>
  <div
    ref="$codeRunner"
    class="code-runner"
  >
    <div class="runner-title">
      <div class="text">
        <slot name="title" />
      </div>
    </div>

    <div class="runner-refer">
      <div class="text">
        <slot name="refer" />
      </div>
    </div>

    <div class="runner-viewer">
      <AConfigProvider :locale="zhCN">
        <slot name="viewer" />
      </AConfigProvider>
    </div>

    <div class="runner-control">
      <div class="buttons">
        <ATooltip
          :open="visible"
          placement="top"
          trigger="click"
        >
          <template #title>
            <CheckCircleOutlined style="margin-right: 3px;" />
            <span>复制成功</span>
          </template>

          <div
            class="button button-copy"
            @click="() => trigger('copy')"
          >
            复制代码
          </div>
        </ATooltip>

        <div
          v-if="collapse"
          class="button button-copy"
          @click="() => trigger('open')"
        >
          显示代码
        </div>

        <div
          v-if="!collapse"
          class="button button-copy"
          @click="() => trigger('close')"
        >
          隐藏代码
        </div>
      </div>

      <div
        v-show="!collapse"
        ref="$codeViewer"
        class="code-viewer"
      >
        <slot name="default" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'

import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import isYesterday from 'dayjs/plugin/isYesterday'
import objectSupport from 'dayjs/plugin/objectSupport'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.locale('zh-cn')
dayjs.extend(isToday)
dayjs.extend(isTomorrow)
dayjs.extend(isYesterday)
dayjs.extend(objectSupport)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(quarterOfYear)
dayjs.extend(weekOfYear)

defineOptions({ name: 'CodeRunner' })

const trigger = (type: string) => {
  if (type === 'copy') {
    $codeViewer.value.querySelector('button.copy').click()
    setTimeout(() => visible.value = false, 800)
    visible.value = true
  }

  if (type === 'open') {
    collapse.value = false
  }

  if (type === 'close') {
    collapse.value = true
  }
}

onMounted(() => {
  if ($codeRunner.value instanceof HTMLElement) {
    const $runner = $codeRunner.value
    const $parent = $runner.closest('[code-runner]')

    const callback = (event: Event) => {
      const isCodeRunner = event.target instanceof HTMLElement && event.target.hasAttribute('code-runner')
      const isHaveStyle = event.target instanceof HTMLElement && event.target.getAttribute('style')
      isCodeRunner && isHaveStyle && event.target.removeAttribute('style')
      $parent?.removeEventListener('mouseenter', callback)
    }

    $parent?.addEventListener('mouseenter', callback)
  }
})

const visible = ref(false)
const collapse = ref(true)
const $codeViewer = ref<any>(null)
const $codeRunner = ref<HTMLElement | null>(null)
</script>

<style lang="less" scoped>
.code-runner {
  width: 100%;
  height: auto;
  margin: 30px 0 50px;
  border-radius: 3px;
  border: 1px solid var(--vp-c-divider);
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;

  & > .runner-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 44px;
    margin: -24px 0 0;
    position: relative;

    & > :deep(.text) {
      display: inline-block;
      margin-left: 12px;
      padding: 1px 8px;
      color: #30313c;
      font-size: 16px;
      font-weight: bold;
      background-color: #ffffff;
      position: relative;
      z-index: 10;

      h1, h2, h3, h4, h5, h6, li, p {
        line-height: inherit;
        margin: 0;
      }
    }
  }

  & > .runner-refer {
    width: 100%;
    height: auto;
    padding: 0 24px 15px;
    box-sizing: border-box;

    & > :deep(.text) {
      padding: 1px;
      color: #606266;
      font-size: 14px;
      line-height: 1.8;

      h1, h2, h3, h4, h5, h6, li, p {
        line-height: inherit;
        margin: 0;
      }
    }
  }

  & > .runner-viewer {
    display: block;
    width: 100%;
    height: auto;
    padding: 30px 24px;
    box-sizing: border-box;
    position: relative;

    &::before {
      content: '';
      width: calc(100% - 44px);
      height: 1px;
      border-top: solid 0.6px var(--vp-c-divider);
      position: absolute;
      left: 22px;
      top: 0;
    }
  }

  & > .runner-control {
    display: block;
    width: 100%;
    height: auto;
    padding: 1px 24px;
    box-sizing: border-box;
    position: relative;

    &::before {
      content: '';
      width: calc(100% - 44px);
      height: 1px;
      border-top: dashed 0.6px var(--vp-c-divider);
      position: absolute;
      left: 22px;
      top: 0;
    }

    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-content: center;
      width: 100%;
      height: 40px;
      position: relative;

      .button {
        display: inline-block;
        height: 40px;
        margin: 0 12px;
        font-size: 12px;
        color: #30323c;
        line-height: 40px;
        transition: transform 0.3s ease;
        cursor: pointer;

        &:hover {
          color: var(--vp-c-brand);
          transform-origin: center;
          transform: scale(1.11);
        }
      }
    }

    & > .code-viewer {
      width: 100%;
      height: 100%;

      & > :deep(div) {
        margin: 2px 0 15px;
        border-radius: 4px;
        background-color: #fdfdfd;
        overflow: hidden;
      }
    }
  }

  :deep {
    table,
    table th,
    table td {
      border: none;
      padding: 0;
      margin: 0;
    }

    ul,
    li {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
