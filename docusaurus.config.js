// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid');
  const config = {
    title: 'OpenSource Digital Signage Software',
    url: 'https://www.dsliz.info',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'www.dsliz.info', // Usually your GitHub org/user name.
    projectName: 'rds', // Usually your repo name.
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'zh-Hans'],
    },

    presets: [
      [
        'classic',
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [mdxMermaid.default],
            // Please change this to your repo.
            editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'Home',
          logo: {
            alt: 'RDS Logo',
            src: 'img/logo.png',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Docs',
            },
            { to: '/blog', label: 'Blog', position: 'left' },
            {
              to: 'https://app.dsliz.info',
              label: 'Login',
              position: 'right',
            },

            {
              href: 'https://github.com/cnboker/bingo-cloud',  position: 'right', className: "header-github-link",
              "aria-label": "GitHub repository",
            },
            // {
            //   type: 'localeDropdown',
            //   position: 'right'
            // },
          ],
        },
        footer: {
          style: 'dark',
          // links: [
          //   {
          //     title: 'Docs',
          //     items: [
          //       {
          //         label: 'Docs',
          //         to: '/docs/intro',
          //       },
          //     ],
          //   },
          //   {
          //     title: 'Source',
          //     items: [
          //       {
          //         label: 'Cloud',
          //         href: 'https://github.com/cnboker/bingo-cloud',
          //       },
          //     ],
          //   },
          //   {
          //     title: 'More',
          //     items: [
          //       {
          //         label: 'Blog',
          //         to: '/blog',
          //       },

          //     ],
          //   },
          // ],
          copyright: `Copyright © ${new Date().getFullYear()} Bingo #coobots@gmail.com<br/> `

        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };
  return config
}

module.exports = createConfig();
