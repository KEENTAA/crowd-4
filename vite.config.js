import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/crowd-4/', // ✔️ Asegúrate que coincida EXACTAMENTE con tu repositorio
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',  // ✔️ Formato más seguro
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js'
      }
    }
  },
  server: {
    headers: {
      "Permissions-Policy": "geolocation=(), microphone=(), camera=()" // ✔️ Directivas actualizadas
    }
  }
})