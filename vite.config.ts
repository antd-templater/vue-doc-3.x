import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { AntdLibraryResolver } from '@antd-templater/library-3.x/resolver'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoComponents from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@/': fileURLToPath(new URL('./src', import.meta.url)) + '/',
      },
    },

    plugins: [
      AutoComponents({
        resolvers: [
          AntDesignVueResolver({
            resolveIcons: true,
            importStyle: 'less',
          }),
        ],
        include: [
          /\.[tj]sx?/,
          /\.vue\?vue/,
          /\.vue$/,
        ],
      }),
      AutoImport({
        resolvers: [
          AntdLibraryResolver(),
        ],
        imports: [
          'vue',
          'pinia',
          'vue-router',
        ],
        eslintrc: {
          enabled: false,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
        dts: true,
      }),
    ],

    ssr: {
      noExternal: [
        '@antd-templater/library-3.x',
        '@ant-design/icons-vue',
        'ant-design-vue',
      ],
    },
  }
})
