import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: ['user-management-system-1-u4dj.onrender.com']
  },
  server: {
    host: true,
    port: 5173
  }
})
