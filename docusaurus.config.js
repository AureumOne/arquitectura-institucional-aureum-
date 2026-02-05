// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aureum One — Structural Stress Test',
  tagline: 'Adversarial review for failure, governance and evidence integrity',
  favicon: 'img/favicon.ico',

  url: 'https://aureum-one.github.io',
  baseUrl: '/arquitectura-institucional-aureum-/',

  organizationName: 'AureumOne',
  projectName: 'arquitectura-institucional-aureum-',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: '',
      logo: {
        alt: 'Aureum One Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Institutional Overview',
              to: '/docs/institutional-overview',
            },
            {
              label: 'Architectural Summary',
              to: '/docs/architectural-summary',
            },
            {
              label: 'Classification & Boundary Statement',
              to: '/docs/classification-boundary',
            },
            {
              label: 'What Aureum One Is / What It Is Not',
              to: '/docs/what-it-is-not',
            },
            {
              label: 'Structural Stress Test',
              to: '/docs/structural-stress-test',
            },
            {
              label: 'Reading Contract',
              to: '/docs/reading-contract',
            },
            {
              label: 'Peer Review Entry',
              to: '/docs/peer-review-entry',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'ricardo.daher@aureumone.io',
              href: 'mailto:ricardo.daher@aureumone.io',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Aureum One. Confidential Documentation.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
