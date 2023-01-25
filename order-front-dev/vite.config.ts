import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@appTypes', replacement: '/src/shared/types' },
      { find: '@services', replacement: '/src/shared/services' },
      { find: '@shared', replacement: '/src/shared' },
      { find: '@layout', replacement: '/src/components/layout' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components/features' },
      { find: '@ui', replacement: '/src/components/ui' },
      { find: '@data', replacement: '/src/data' },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8001',
        changeOrigin: true,
      },
    }
  }
})
