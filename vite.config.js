import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/crowd-4/', // Asegura que este valor coincida con el nombre de tu repositorio
});