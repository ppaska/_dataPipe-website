/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'dataPipe',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'FalconSoft', // Usually your GitHub org/user name.
  projectName: 'dataPipe-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'dataPipe',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Guides', position: 'left'},
        {href: '/api', label: 'API', position: 'left'},
        {to: 'playground', label: 'JSPython Playground', position: 'left'},
        {
          href: 'https://github.com/FalconSoft/dataPipe',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} FalconSoft Ltd`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-classic'],

};
