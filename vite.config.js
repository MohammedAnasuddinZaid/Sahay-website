import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    target: 'es2020',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('three')) return 'three';
          if (id.includes('gsap') || id.includes('framer-motion') || id.includes('lenis')) return 'animation';
          if (id.includes('@supabase') || id.includes('@emailjs')) return 'integrations';
          if (id.includes('react') || id.includes('react-dom')) return 'vendor';
          return 'vendor';
        },
      },
    },
  },
});
