import React from 'react'
import Layout from '../components/Layout'
import MetaInfo from '../components/MetaInfo'

const inlineStyle = {
  titleImageSize: {
    height: '1rem',
  },
  titleContentSize: {
    height: '2rem',
  },
  space: {
    margin: '0 .5em',
  },
}
const About = () => (
  <Layout type="about">
    <MetaInfo
      title={'About geoseong'}
      description="Full Stack Web Developer Interested in DevOps, new cool things about programming DELL Technical Supporter, IT Operation Helpdesk Staff for 4 years Started as Developer in 2016 learning Java/Spring"
      type="website"
      locationAfterOrigin="about"
      twittercard="summary"
      keywords={`about geoseong,aws,gcp,javascript,node.js,react,react-native,geoseong,dev note`}
    />
    <h2 className="text-info">What I used in this blog is...</h2>
    <ul className="pl-4 pb-5 fa-2x list-unstyled">
      <li className="text-light">
        <a
          className="text-light"
          href="https://eslint.org/docs/user-guide/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge badge-light">eslint</span>
        </a>
        &nbsp;&amp;&nbsp;
        <a
          className="text-light"
          href="https://prettier.io/docs/en/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge badge-light">prettier</span>
        </a>
      </li>
      <li className="text-light">
        <a
          className="text-light"
          href="https://www.gatsbyjs.org/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge badge-info">GatsbyJS</span>
        </a>
      </li>
      <li className="text-light">
        <a
          className="text-light"
          href="https://docs.microsoft.com/en-us/previous-versions/office/office-365-api/how-to/onenote-supported-ops"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge badge-warning">OneNote API</span>
        </a>
      </li>
      <li className="text-light">
        <a
          className="text-light"
          href="https://github.com/tschaub/gh-pages"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge badge-success">gh-pages</span>
        </a>
      </li>
      <li className="text-light">
        <a
          className="text-light"
          href="https://bootswatch.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge badge-dark">Bootswatch</span>
        </a>
      </li>
      <li className="text-light">
        <a
          className="text-light"
          href="https://fusejs.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge badge-danger">fuse.js</span>
        </a>
      </li>
      <li className="text-light">
        <a
          className="text-light"
          href="https://github.com/pveyes/htmr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge badge-light">htmr</span>
        </a>
      </li>
    </ul>
    <h2 className="text-info">Who am I</h2>
    <h4 className="text-primary pl-4">
      <a
        className="fa-2x"
        href="https://github.com/geoseong"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="text-primary">TaeSeong Park</span>
        <i
          style={{ ...inlineStyle.titleImageSize, ...inlineStyle.space }}
          className="fab fa-github"
        />
      </a>
    </h4>
    <h4 className="pl-5 pb-4">Javascript Full Stack Developer</h4>
    <ul className="pl-4 fa-2x list-unstyled">
      <li>
        <span className="text-light">Blog</span>
        <ul className="pl-4 list-unstyled">
          <li>
            <a
              className="text-secondary"
              href="https://geoseong.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge badge-primary">Tistory</span>
            </a>
          </li>
          <li>
            <a
              className="text-secondary"
              href="https://blog.naver.com/imf4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge badge-primary">Naver</span>
            </a>
          </li>
          <li>
            <a
              className="text-secondary"
              href="https://geoseong.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge badge-primary">GitHub Page</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <ul className="pl-4 fa-2x list-unstyled">
      <li>
        <span className="text-light">Open Source &amp; Community</span>
        <ul className="pl-4 list-unstyled">
          <li>
            <a
              className="text-secondary"
              href="https://github.com/awskrug/gudi-group/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge badge-secondary">
                AWSKRUG (AWS Korea User Group)
              </span>
              &nbsp;
              <span className="font-dot7">guro-digital meetup leader</span>
            </a>
          </li>
          <li>
            <a
              className="text-secondary fa-"
              href="https://github.com/orgs/react-native-seoul/people"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge badge-secondary">React Native Seoul</span>
              &nbsp;
              <span className="font-dot7">meetup admin</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <ul className="pl-4 fa-2x list-unstyled">
      <li>
        <span className="text-light">Contribution</span>
        <ul className="pl-4 list-unstyled">
          <li>
            <a
              className="text-secondary"
              href="https://github.com/dooboolab/talktalk-rn/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge badge-info">doboolab/talktalk-rn</span>
            </a>
          </li>
          <li>
            <a
              className="text-secondary"
              href="https://github.com/geoseong/react-native-chart-kit/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge badge-info">react-native-chart-kit</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <div />
  </Layout>
)

export default About
