---
aside: false
---

# 定制主题

**Antd-Templater** 使用了 4.x 版本的 Ant Design Vue 组件库，不同于 3.x 版本的 less 和 CSS 变量，它提供了全新的定制主题方案 **(CSS-in-JS)**。相比之下，动态主题的能力也有了极大提升，包括但不限于：

1. 支持动态切换主题
2. 支持同时存在多个主题
3. 支持针对某个/某些组件修改主题
4. ......

## 主题配置

在 4.x 版本的 Ant Design Vue 组件库中，影响主题的最小元素称为 [Design Token](https://antdv.com/docs/vue/customize-theme-cn#演变过程)，通过修改 Design Token 来呈现出各种各样的主题或者组件。在 **Antd-Templater** 中，我们通过定义 `<App/>` [ConfigProvider](https://antdv.com/components/config-provider-cn) 的 **主题风格**、**组件尺寸**、**国际化** 等全局配置来实现动态切换主题能力。

::: code-group

```vue:line-numbers [ConfigProvider 示例]
<template>
  <AConfigProvider
    :theme="theme"
    :locale="zhCN.locale"
    :componentSize="'middle'"
  >
    <!-- Render Vue Component -->
  </AConfigProvider>
</template>

<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
import enUS from "ant-design-vue/es/locale/en_US";
import ConfigProvider from "ant-design-vue/es/config-provider";

const theme = computed(() => {
  return {
    token: {
      borderRadius: 4, // 设置 Ant Design Vue 所有组件圆角为 4px
      colorPrimary: '#f5222d' // 设置 Ant Design Vue 所有组件 primaryColor -> #f5222d
      colorWarning: '#faad14', // 设置 Ant Design Vue 所有组件 warningColor -> #faad14
      colorSuccess: '#52c41a', // 设置 Ant Design Vue 所有组件 successColor -> #52c41a
      colorError: '#ff4d4f', // 设置 Ant Design Vue 所有组件 errorColor -> #ff4d4f
      colorInfo: '#1890ff' // 设置 Ant Design Vue 所有组件 infoColor -> #1890ff
    }
  };
});

watchEffect(() => {
  // v4.x 启用并配置 Ant Design Vue 的 CSS 变量 (例: --ant-primary-color: #f5222d)
  ConfigProvider.config({
    theme: {
      primaryColor: '#f5222d',
      warningColor: '#faad14',
      successColor: '#52c41a',
      errorColor: '#ff4d4f',
      infoColor: '#1890ff'
    }
  });
});
</script>
```

:::

## 预设主题

我们在 **Antd-Templater** 中预设了 `默认主题` 和 `主题色库`，以便在 `<App/>` 中完成主题定制和组件全局配置。

::: code-group

```ts:line-numbers [defaultSettings.ts]
/**
 * @themeColor 主题颜色
 *  .....
 *  ...
 */
export default {
  themeColor: {
    primaryColor: "#f5222d",
    warningColor: "#faad14",
    successColor: "#52c41a",
    errorColor: "#ff4d4f",
    infoColor: "#1890ff"
  }

  // ...
};

// ...
```

```ts:line-numbers [presetThemeColors.ts]
/**
 * 预设主题色库 (作为 Layout 中 LayoutSettingDrawer 主题色选项)
 */
export default [
  {
    name: "极客蓝",
    color: "#4557ff"
  },
  {
    name: "拂晓蓝",
    color: "#1890ff"
  },
  {
    name: "薄暮",
    color: "#f5222d"
  },
  {
    name: "火山",
    color: "#fa541c"
  },
  {
    name: "日暮",
    color: "#faad14"
  },
  {
    name: "明青",
    color: "#13c2c2"
  },
  {
    name: "极光绿",
    color: "#52c41a"
  },
  {
    name: "酱紫",
    color: "#722ed1"
  }
];
```

```ts:line-numbers [Store/app.ts]
import defaultSettings from "@/configure/defaultSettings";
import { ref, reactive, computed } from "vue";
import * as DarkReader from "darkreader";

/**
 * App 应用管理
 */
export default defineStore("app", () => {
  const themeColor = reactive({
    primaryColor: defaultSettings.themeColor.primaryColor,
    warningColor: defaultSettings.themeColor.warningColor,
    successColor: defaultSettings.themeColor.successColor,
    errorColor: defaultSettings.themeColor.errorColor,
    infoColor: defaultSettings.themeColor.infoColor
  });

  // ...

  const primaryColor = computed(() => themeColor.primaryColor);
  const warningColor = computed(() => themeColor.warningColor);
  const successColor = computed(() => themeColor.successColor);
  const errorColor = computed(() => themeColor.errorColor);
  const infoColor = computed(() => themeColor.infoColor);

  // ...

  const togglePrimaryColor = (value: string) => {
    themeColor.primaryColor = value;
  };
  const toggleWarningColor = (value: string) => {
    themeColor.warningColor = value;
  };
  const toggleSuccessColor = (value: string) => {
    themeColor.successColor = value;
  };
  const toggleErrorColor = (value: string) => {
    themeColor.errorColor = value;
  };
  const toggleInfoColor = (value: string) => {
    themeColor.infoColor = value;
  };

  // ...

  return {
    // ...

    primaryColor,
    warningColor,
    successColor,
    errorColor,
    infoColor,
    themeColor,

    // ...

    togglePrimaryColor,
    toggleWarningColor,
    toggleSuccessColor,
    toggleErrorColor,
    toggleInfoColor

    // ...
  };
});
```

```vue:line-numbers [App.vue]
<template>
  <AConfigProvider
    :theme="computedTheme"
    :locale="computedLocale"
    :componentSize="computedSize"
  >
    <RouterView />
  </AConfigProvider>
</template>

<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
import enUS from "ant-design-vue/es/locale/en_US";

import ConfigProvider from "ant-design-vue/es/config-provider";
import useAppStore from "@/store/app";
import dayjs from "@/plugin/dayjs";

const appStore = useAppStore();

const computedSize = computed(() => {
  return appStore.componentSize;
});

const computedLocale = computed(() => {
  return appStore.language === enUS.locale ? enUS : zhCN;
});

const computedTheme = computed(() => {
  return {
    token: {
      borderRadius: 4,
      colorLink: appStore.primaryColor,
      colorLinkHover: appStore.primaryColor,
      colorLinkActive: appStore.primaryColor,
      colorPrimary: appStore.primaryColor,
      colorWarning: appStore.warningColor,
      colorSuccess: appStore.successColor,
      colorError: appStore.errorColor,
      colorInfo: appStore.infoColor
    }
  };
});

watchEffect(() => {
  // Update document.body.classList
  // ...

  ConfigProvider.config({ theme: appStore.themeColor });
  dayjs.locale(appStore.language);
});
</script>
```

:::

## 组件主题

除了整体的 Design Token，各个组件也会开放自己的 Component Token 来实现针对组件的主题定制能力，不同的组件之间不会相互影响。

```vue
<template>
  <AConfigProvider
    :theme="{
      components: {
        Checkbox: {
          colorPrimary: '#00b96b'
        }
      }
    }"
  >
    <!-- 仅将 ACheckbox 组件主色改为 #00b96b -->
    <ACheckbox>Checkbox</ACheckbox>
    <ARadio>Radio</ARadio>
  </AConfigProvider>
</template>
```

:::tip 注意

就 `ConfigProvider` 对 `Message.xxx`、`Modal.xxx`、`Notification.xxx` 而言，由于 Ant Design Vue 会通过 render 动态创建新的 Vue 实例，其 context 与当前代码所在 context 并不相同，因而无法获取 context 信息，也就无法通过 `ConfigProvider` 配置定制。

:::

## 局部主题

我们可以嵌套使用 ConfigProvider 来实现局部主题的更换。在子主题中未被改变的 Design Token 将会继承父主题。

```vue
<template>
  <AConfigProvider
    :theme="{
      token: { colorPrimary: '#1677ff' }
    }"
  >
    <!-- AButton 组件主色改为 #1677ff -->
    <AButton />

    <AConfigProvider
      :theme="{
        token: { colorPrimary: '#1890ff' }
      }"
    >
      <!-- AButton 组件主色改为 #1890ff -->
      <AButton />
    </AConfigProvider>
  </AConfigProvider>
</template>
```

## 使用 Design Token

如果你希望使用当前主题下的 Design Token，我们可以使用 useToken 来获取 Design Token [(详情)](https://antdv.com/docs/vue/customize-theme-cn#演变过程)

```vue
<template>
  <!-- 使用 Token -->
  <AButton :style="{ background: token.colorPrimary }">Button</AButton>

  <!-- 使用 CSS 变量 -->
  <AButton :style="{ background: var(--ant-primary-color) }">Button</AButton>
</template>

<script setup>
import ATheme from "ant-design-vue/es/theme";
const token = ATheme.useToken().token.value;
</script>
```
