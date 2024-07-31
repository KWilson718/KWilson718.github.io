import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {fileURLToPath, URL} from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  // base: '/personal-portfolio/', // This is the base url of the website
  plugins: [vue()],
})
