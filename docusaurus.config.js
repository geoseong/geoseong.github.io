const siteTitle = `geoseong's dev note`;
const ghRepoUrl = 'https://github.com/geoseong/geoseong.github.io';
const domain = 'geoseong.github.io';
const editUrl = `${ghRepoUrl}/edit/docusaurus-blog/`;
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
  customFields: {
    commentSelector: 'gs-comment',
    ghRepoUtterance: 'geoseong/geoseong.github.io',
  },
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
    prism: {
      additionalLanguages: ['csharp'],
    },
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
          label: '클라우드',
          position: 'left',
          items: [
            {
              label: 'AWS',
              to: 'docs/aws/index',
            },
            
          ],
        },
        {
          label: '언어 & 플랫폼',
          position: 'left',
          items: [
            {
              label: 'Javascript',
              to: 'docs/javascript/regex',
            },
            {
              label: 'Unity',
              to: 'docs/unity/Bolt-overview',
            },
            // {
            //   label: 'React',
            //   to: 'docs/react/index',
            // },
            // {
            //   label: 'GraphQL',
            //   to: 'docs/graphql/index',
            // },
          ]
        },
        // {
        //   label: 'Mobile',
        //   position: 'left',
        //   items: [
        //     {
        //       label: 'Unity',
        //       to: 'docs/unity/JSONdotNET-conflicts-QuickSheet',
        //     },
        //   ]
        // },
        {
          label: '소스관리',
          position: 'left',
          items: [
            {
              label: 'Git',
              to: 'docs/scm/git/tagoverview',
            },
          ]
        },
        {
          label: '문서관리',
          position: 'left',
          items: [
            {
              label: 'Notion',
              to: 'docs/docu/notion/dateBetween-without-weekend',
            },
          ]
        },
        { to: 'blog', label: '공지', position: 'right' },
        {
          to: 'aboutme',
          label: 'About me',
          position: 'right',
        },
        {
          href: ghRepoUrl,
          className: 'header-github-link header-icon-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 
        'Since 2021. Built with ' +
        '<a href="https://v2.docusaurus.io/" target="_blank" rel="noopener noreferrer">' +
          'Docusaurus v2' +
        '</a>',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
