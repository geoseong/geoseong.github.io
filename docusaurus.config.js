const siteTitle = `geoseong's dev note`;
const ghRepo = 'https://github.com/geoseong/geoseong.github.io';
const domain = 'geoseong.github.io';

module.exports = {
  title: siteTitle,
  tagline: 'Blog of my developer career',
  url: `https://${domain}`,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'geoseong', // Usually your GitHub org/user name.
  projectName: domain, // Usually your repo name.
  themeConfig: {
    // metadatas: [
    //   { name: 'twitter:card', content: siteTitle },
    // ],
    image: 'img/logo.png',
    navbar: {
      title: siteTitle,
      logo: {
        alt: `${siteTitle} Logo`,
        src: 'img/logo.png',
      },
      items: [
        {
          label: '개발',
          position: 'left',
          items: [
            {
              label: 'AWS',
              to: 'docs/aws/index',
            },
            {
              label: 'GraphQL',
              to: 'docs/graphql/index',
            },
            {
              label: 'React',
              to: 'docs/react/index',
            },
            {
              label: 'Unity',
              to: 'docs/unity/index',
            },
          ],
        },
        { to: 'blog', label: '공지', position: 'right' },
        {
          to: 'aboutme',
          label: 'About me',
          position: 'right',
        },
        {
          href: ghRepo,
          label: 'Source',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Since 2021. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: `${ghRepo}/edit/docusaurus-blog/docs/`,
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl: `${ghRepo}/edit/docusaurus-blog/blog/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
