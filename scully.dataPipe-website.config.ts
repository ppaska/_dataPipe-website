import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "dataPipe-website",
  outDir: './dist/static',
  routes: {
    '/guide/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./guides"
      }
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};