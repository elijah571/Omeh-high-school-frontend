import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://omeh-high-school.onrender.com',  
      changeOrigin: true,
      secure: true,
    },
   
  },
});