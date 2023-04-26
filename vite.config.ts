import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import eslint from 'vite-plugin-eslint';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
  ],
  resolve: {
    alias: {
      "@" : path.resolve(__dirname,'./src'),
    },
  },
  server: {
    open : true,
    port: 3000,
  }
})
