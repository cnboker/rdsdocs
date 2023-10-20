// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid');
  const config = {
    title:'Digital Signage Application Solutions',
    url: 'https://www.dsliz.info',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
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
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Intro',
            },
            { to: '/blog', label: 'Blog', position: 'left' },
            {
              href: 'http://app.dsliz.info',
              label: 'Login',
              position: 'right',
            },
            // {
            //   type: 'localeDropdown',
            //   position: 'right'
            // },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Intro',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Social',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/cnboker/ioliz',
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

              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} www.dsliz.info <br/> `
       
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
