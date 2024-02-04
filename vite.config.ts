import { defineApplicationConfig } from '@vben/vite-config';
import { resolve } from 'path';

export default defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [
        'echarts/core',
        'echarts/charts',
        'echarts/components',
        'echarts/renderers',
        'qrcode',
        '@iconify/iconify',
        'ant-design-vue/es/locale/zh_CN',
        'ant-design-vue/es/locale/en_US',
      ],
    },
    server: {
      proxy: {
        '/basic-api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
          // only https
          // secure: false
        },
        '/upload': {
          target: 'http://localhost:3300/upload',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/upload`), ''),
        },
      },
      warmup: {
        clientFiles: ['./index.html', './src/{views,components}/*'],
      },
    },
    resolve: {
      alias: {
        '@c': resolve(__dirname, 'packages/components'), // 路径别名
        '@h': resolve(__dirname, 'packages/myhooks'), // 路径别名
        '@utils': resolve(__dirname, 'packages/utils'), // 路径别名
        '@layouts': resolve(__dirname, 'packages/layouts'), // 路径别名
        '@directives': resolve(__dirname, 'packages/directives'), // 路径别名
        '@logics': resolve(__dirname, 'packages/logics'), // 路径别名
        '@design': resolve(__dirname, 'packages/design'), // 路径别名
        '@enums': resolve(__dirname, 'packages/enums'), // 路径别名
        '@locales': resolve(__dirname, 'packages/locales'), // 路径别名
        '@settings': resolve(__dirname, 'packages/settings'), // 路径别名
        
      },
    },
  },
});
