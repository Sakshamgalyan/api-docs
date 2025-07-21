import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Paysecure API Documentation',
  tagline: 'Seamless Payment Gateway Integration',
  url: 'https://developer.paysecure.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'paysecure',
  projectName: 'api-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } as Preset.Options,
    ],
  ],
  scripts: [
  {
    src: 'https://unpkg.com/@stoplight/elements/web-components.min.js',
    type: 'module',
  },
],
  
  themeConfig: {
    navbar: {
      title: 'Paysecure API',
      // Temporarily comment out logo if image is missing
      // logo: {
      //   alt: 'Paysecure Logo',
      //   src: 'img/logo.png',
      // },
      items: [
        {
          type: 'doc',
          docId: 'overview',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/paysecure/api-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/overview',
            },
            {
              label: 'Integration Steps',
              to: '/integration-steps',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Support',
              href: 'mailto:info@paysecure.net',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paysecure. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } as Preset.ThemeConfig,
};

export default config;