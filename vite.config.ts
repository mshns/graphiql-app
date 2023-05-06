import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['@lezer/lr', '@lezer/highlight', '@lezer/common', '@codemirror/lint']
    }
  }
});
