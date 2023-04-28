import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true
  },
  resolve: {
    alias: {
      '~variables': path.resolve(__dirname, 'src/app/styles/variables.scss')
    }
  }
});
