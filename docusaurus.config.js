const siteTitle = `geoseong's dev note`;
const ghRepo = 'https://github.com/geoseong/geoseong.github.io';
const domain = 'geoseong.github.io';
const editUrl = `${ghRepo}/edit/docusaurus-blog/`;
require('dotenv').config();

module.exports = {
  title: siteTitle,
  tagline: 'Blog of my developer career',
  url: `https://${domain}`,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'geoseong', // Usually your GitHub org/user name.
  projectName: domain, // Usually your repo name.
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
  themeConfig: {
    // metadatas: [
    //   { name: 'twitter:card', content: siteTitle },
    // ],
    image: 'img/logo.png',
    navbar: {
      hideOnScroll: true,
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
            // {
            //   label: 'GraphQL',
            //   to: 'docs/graphql/index',
            // },
            // {
            //   label: 'React',
            //   to: 'docs/react/index',
            // },
            {
              label: 'Unity',
              to: 'docs/unity/JSONdotNET-conflicts-QuickSheet',
            },
            // {
            //   label: 'SCM',
            //   to: 'docs/scm/git/tagoverview',
            // },
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
          className: 'header-github-link header-icon-link',
          'aria-label': 'GitHub repository',
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
          editUrl: editUrl,
        },
        blog: {
          showReadingTime: false,
          editUrl: editUrl,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
