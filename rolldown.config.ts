import { defineConfig } from 'rolldown';

export default defineConfig({
  input: 'src/main.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    // Add any plugins you need here
  ],
  build: {
    sourcemap: true,
    minify: 'esbuild',
  },
  server: {
    port: 3000,
    open: true,
  },
});