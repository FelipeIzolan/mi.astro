import { resolve } from 'path';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math';
import remarkGemoji from 'remark-gemoji';

import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://your-site.com/',
  integrations: [
    mdx({
      shikiConfig: {
        theme: 'github-dark',
        transformers: [
          {
            pre(node) {
              node.properties.style = "background-color:#212121;color:#e1e4e8;overflow-x:auto;"
            }
          }
        ]
      },
      rehypePlugins: [rehypeKatex],
      remarkPlugins: [remarkMath, remarkGemoji],
      gfm: true
    }),
    sitemap()
  ],
  vite: {
    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, './src'),
        '@images': resolve(import.meta.dirname, './src/assets/images/'),
      }
    },
  }
});
