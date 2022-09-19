// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


async function createConfig() {
  const mdxMermaid =  await import('mdx-mermaid');
  const config = {
    title: '数字标牌应用解决方案',
    tagline: '树莓派用户的选择',
    url: 'https://www.ioliz.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'ioliz.com', // Usually your GitHub org/user name.
    projectName: 'rds', // Usually your repo name.
  
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
          title: '首页',
          logo: {
            alt: 'RDS Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: '简介',
            },
            {to: '/blog', label: '博客', position: 'left'},
            {
              href: 'http://app.ioliz.com',
              label: '登录系统',
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
                  label: '简介',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: '社区',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/cnboker/ioliz',
                },
              ],
            },
            {
              title: '更多',
              items: [
                {
                  label: '博客',
                  to: '/blog',
                },
              
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} ioliz.com <br/> 
          <a target="_blank" href="http://www.miibeian.gov.cn/" class="scrollto">粤ICP备18034927号-1</a> &nbsp;
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
