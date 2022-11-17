import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@hbisedmjs/shared': resolve(__dirname, 'packages/shared/index.ts'),
      '@hbisedmjs/core': resolve(__dirname, 'packages/core/index.ts'),
    },
  },
});
