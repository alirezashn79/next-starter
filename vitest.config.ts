import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
        exclude: ['node_modules', 'dist', 'coverage', 'src/**/*.stories.tsx'],
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        globals: true,
    },
});