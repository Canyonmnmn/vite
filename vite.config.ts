import { defineConfig, normalizePath } from 'vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    }
  }
});
