/*
 * @Author: zgj888 2369394195@qq.com
 * @Date: 2024-11-26 10:38:58
 * @LastEditors: zgj888 2369394195@qq.com
 * @LastEditTime: 2024-11-27 16:18:08
 * @FilePath: \uss-webd:\shwork\work\my-vue2-cesium-app\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      cesium: path.resolve(__dirname, 'node_modules/cesium/Source'),
    },
  },
  build: {
    rollupOptions: {
      external: ['Cesium'],
    },
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify('/Cesium/'),
  },
})
