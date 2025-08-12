import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CI-CD-Pipelines',  // 👈 this is the fix
  plugins: [react()],
})
