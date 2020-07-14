/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'dataPipe-JS',
  tagline: 'Data transformation and analytical library inspired by LINQ (C#) and Pandas - (Python).',
  url: 'https://datapipe-js.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'FalconSoft', // Usually your GitHub org/user name.
  projectName: 'dataPipe-JS-Home', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'javascript'
    },    
    navbar: {
      title: 'dataPipe-JS',
      links: [
        { to: 'docs/get-started', label: 'Guides', position: 'left' },
        {
          href: 'https://github.com/FalconSoft/dataPipe',
          className: 'header-github-link',
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
