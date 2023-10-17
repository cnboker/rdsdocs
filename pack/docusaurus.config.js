// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid');
  const config = {
    title:'title',
    url: 'https://www.ioliz.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'ioliz.com', // Usually your GitHub org/user name.
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
              href: 'http://app.ioliz.com',
              label: 'Login',
              position: 'right',
            },
            {
              type: 'localeDropdown',
              position: 'right'
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
          copyright: `Copyright © ${new Date().getFullYear()} ioliz.com <br/> 
          <a target="_blank" href="https://beian.miit.gov.cn" class="scrollto">粤ICP备18034927号-1</a> &nbsp;
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702004919"><img src="http://www.beian.gov.cn/img/ghs.png">粤公网安备 44030702004919号</a>`,
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
