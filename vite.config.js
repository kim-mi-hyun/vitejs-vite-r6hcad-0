import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import envCom from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), envCom()],
});
