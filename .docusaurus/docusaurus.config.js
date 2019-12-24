export default {
  "plugins": [],
  "themes": [
    "@docusaurus/theme-classic"
  ],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "dataPipe",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/doc1",
          "label": "Guides",
          "position": "left"
        },
        {
          "href": "/api",
          "label": "API",
          "position": "left"
        },
        {
          "to": "playground",
          "label": "JSPython Playground",
          "position": "left"
        },
        {
          "href": "https://github.com/FalconSoft/dataPipe",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2019 FalconSoft Ltd"
    }
  },
  "title": "dataPipe",
  "tagline": "The tagline of my site",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "FalconSoft",
  "projectName": "dataPipe-website",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/vkukurba/Development/Projects/upwork/FalconSoft/dataPipe-website/sidebars.js"
        },
        "theme": {
          "customCss": "/home/vkukurba/Development/Projects/upwork/FalconSoft/dataPipe-website/src/css/custom.css"
        }
      }
    ]
  ]
};