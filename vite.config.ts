// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   plugins: [vue()],
//   server: {
//     port: 3000,
//     open: true,
//   },
//   build: {
//     outDir: 'dist',
//   },
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
// });

// 确保使用 ESM 语法
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// 使用 TypeScript 类型提示
export default defineConfig({
  plugins: [
    vue(),
    Unocss()
  ],
  server: {
    port: 5173,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})