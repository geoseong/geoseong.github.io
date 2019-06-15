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
    <div className="mb-4">
      <h1 className="text-info">Contact &amp; Comment</h1>
      <ul className="list-unstyled">
        <li>
          <p data-tag="critical" className="pl-4">
            <a
              href="https://github.com/geoseong/geoseong.github.io/issues/new?&title=%EB%B2%84%EA%B7%B8+-+[%EA%B2%8C%EC%8B%9C%EB%AC%BC%20url]&body=[%EA%B2%8C%EC%8B%9C%EB%AC%BC%20url]%20(%EA%B2%8C%EC%8B%9C%EB%AC%BC%20url%20%EB%84%A3%EB%8A%94%20%EA%B3%B3)%20//%20%EB%B2%84%EA%B7%B8%EC%9A%94%EC%B2%AD%EC%82%AC%ED%95%AD%EC%9D%B4%20%EC%9E%88%EB%8B%A4%EB%A9%B4%20%EC%9E%91%EC%84%B1%20%ED%95%B4%20%EC%A3%BC%EC%84%B8%EC%9A%94&labels=bug"
              className="pl-4 text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              게시글 버그 수정요청하기
            </a>
          </p>
        </li>
        <li>
          <p data-tag="question" className="pl-4">
            <a
              href="https://github.com/geoseong/geoseong.github.io/issues/new?&title=%EB%AC%B8%EC%9D%98%EC%82%AC%ED%95%AD+-+[%EC%A0%9C%EB%AA%A9]&body=[%EB%AC%B8%EC%9D%98%EC%82%AC%ED%95%AD%EC%9D%B4%20%EC%9E%88%EB%8B%A4%EB%A9%B4%20%EC%9E%91%EC%84%B1%20%ED%95%B4%20%EC%A3%BC%EC%84%B8%EC%9A%94]&labels=question"
              className="pl-4 text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              문의하기
            </a>
          </p>
        </li>
      </ul>
    </div>
    <h1 className="text-info">This blog is made up of...</h1>
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
    <h1 className="text-info">Author</h1>
    <h4 className="text-primary">
      <a
        className="author"
        href="https://github.com/geoseong"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div>
          <h3 className="text-primary d-inline">TaeSeong Park</h3>
          <i
            style={{ ...inlineStyle.titleImageSize, ...inlineStyle.space }}
            className="fab fa-github"
          />
        </div>
      </a>
    </h4>
    <h4 className="pl-4 pb-4">Javascript Full Stack Developer</h4>
    <ul className="fa-2x list-unstyled author-ul">
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
    <ul className="fa-2x list-unstyled author-ul">
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
              <span className="font-dot7 mr-2">co-leader of :</span>
              <span className="badge badge-secondary">
                AWSKRUG (AWS Korea User Group) #guro-digital meetup
              </span>
            </a>
          </li>
          <li>
            <a
              className="text-secondary fa-"
              href="https://github.com/orgs/react-native-seoul/people"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-dot7 mr-2">co-leader of :</span>
              <span className="badge badge-secondary">
                React Native Seoul meetup
              </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <ul className="fa-2x list-unstyled author-ul">
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
          <li>
            <a
              className="text-secondary"
              href="https://github.com/geoseong/serverless-vpc-plugin/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge badge-info">serverless-vpc-plugin</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <div />
  </Layout>
)

export default About
