import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const catalystDev='https://lms-turnkey-20117073532.development.catalystserverless.eu';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      '/server': {
        target: catalystDev,
        changeOrigin: true,
        secure: true,
        cookieDomainRewrite: 'localhost'
      }
    }
  },
  build: {
    outDir: 'client',
    emptyOutDir: true
  }
});
