import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/crowd-4/' // Asegúrate que coincide con el nombre de tu repositorio
})
