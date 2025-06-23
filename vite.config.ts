import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/LiverpoolAdvocatesForWindrush.github.io/",
  optimizeDeps: {
    exclude: ['lucide-react'],
    },
    /*build: {
        chunkSizeWarningLimit: 1000, // Increases limit to 1000KB
    }*/
});
