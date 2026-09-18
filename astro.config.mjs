import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pi5.darter-basking.ts.net',
  output: 'static',
  build: {
    format: 'directory'
  }
});
