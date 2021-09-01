/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'hentaiOS Docuwiki',
  tagline: 'mmmmmmmmmmmmmmmmmm',
  url: 'https://hentaios.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hentaiOS-Infrastructure', // Usually your GitHub org/user name.
  projectName: 'dokument', // Usually your repo name.
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'helluvaOS Logo',
        src: 'img/helluvaOS Logo Dark.svg',
        srcDark: 'img/helluvaOS Logo Light.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentations',
        },
        {
          to: 'https://blog.hentaios.com',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/hentaiOS-Infrastructure/wiki-frontpage-develop',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: '/community/community-portal',
          label: 'Community',
          position: 'left',
          activeBaseRegex: '/community/',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      logo: {
        alt: 'hentaiOS Open Source Logo',
        src: 'img/oss_logo.svg',
        href: 'https://opensource.hentaios.com'
      },
      copyright: `Copyright © ${new Date().getFullYear()} hentaiOS. Built with Docusaurus.<br><span class="footer__link-item">Android is a trademark of Google LLC.</span>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hentaiOS-Infrastructure/wiki-frontpage-develop/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
      },
    ],
  ],
};
