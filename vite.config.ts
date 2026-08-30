import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sainf-2026/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
