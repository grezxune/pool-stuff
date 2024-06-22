import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pool Stuff',
  tagline: 'Pool is cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tommytreb.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'grezxune', // Usually your GitHub org/user name.
  projectName: 'pool-stuff', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Pool Stuff',
      logo: {
        alt: 'Pool Stuff Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'trainingSidebar',
          position: 'left',
          label: 'Training',
        },
        {
          type: 'docSidebar',
          sidebarId: 'terminologySidebar',
          position: 'left',
          label: 'Terminology',
        },
        {
          type: 'docSidebar',
          sidebarId: 'drillsSidebar',
          position: 'left',
          label: 'Drills',
        },
        {
          type: 'docSidebar',
          sidebarId: 'gamesSidebar',
          position: 'left',
          label: 'Games',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Resources',
        },
        // { to: '/blog', label: 'Articles', position: 'left' },
        {
          href: 'https://github.com/grezxune/pool-stuff',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Info',
          items: [
            {
              label: 'Training',
              to: '/docs/training',
            },
            {
              label: 'Terminology',
              to: '/docs/terminology',
            },
            {
              label: 'Drills',
              to: '/docs/drills',
            },
            {
              label: 'Games',
              to: '/docs/games',
            },
            {
              label: 'Resources',
              to: '/docs/resources',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: "https://discord.gg/fbQ7sCUx7y",
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/grezxune/pool-stuff',
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} Pool Stuff 🎱`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
