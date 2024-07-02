import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/personal-portfolio/', // This is the base url of the website
  plugins: [vue()],
})
