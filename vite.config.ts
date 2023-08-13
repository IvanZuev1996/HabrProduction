import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgr({
            exportAsDefault: true
        }),
        react()
    ],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }]
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend')
    },
    css: {
        modules: {
            generateScopedName: '[path][name]__[local]--[hash:base64:5]'
        }
    }
});
