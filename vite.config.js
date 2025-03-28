import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/crowd-4/',  // <-- Esto es lo que falta
  plugins: [react()],
})
