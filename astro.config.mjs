import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://northvilletech.com',
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true,
        },
    },
});
