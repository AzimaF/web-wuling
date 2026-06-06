import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/web-wuling/',
  plugins: [react()],
  server: {
    port: 2603,
  },
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
    // Enable source maps for debugging
    sourcemap: false,
    // Rollup options for better code splitting
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'lucide': ['lucide-react'],
        },
      },
    },
    // Minify with terser options
    minify: 'esbuild',
    // CSS code splitting
    cssCodeSplit: true,
    // Asset inlining threshold (inline assets under 4KB)
    assetsInlineLimit: 4096,
  },
  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
})
