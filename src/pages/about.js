import React from 'react'
import Layout from '../components/layout'
import MetaInfo from '../components/MetaInfo'

const inlineStyle = {
  titleImageSize: {
    height: '1rem'
  },
  titleContentSize: {
    height: '2rem'
  },
  space: {
    margin: '0 .5em'
  }
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
    <h1 className="text-info">About geoseong 
      <a href="https://github.com/geoseong" target="_blank">
        <i style={{...inlineStyle.titleImageSize, ...inlineStyle.space}} className="fab fa-github"></i>
      </a>
    </h1>
    <h3 className="text-primary">Full Stack Web Developer</h3>
    <h4>Interested in DevOps, new cool things about programming</h4>
    <h6>DELL Technical Supporter, IT Operation Helpdesk Staff for 4 years</h6>
    <h6>Started as Developer in 2016 learning Java/Spring</h6>
    <ul>
      <li><span className="text-light">Blog</span>
        <ul>
          <li>
            <a href="https://geoseong.tistory.com/" target="_blank">
              Tistory Blog
              <img style={{...inlineStyle.titleContentSize, ...inlineStyle.space}} src="http://i68.tinypic.com/2nim96v.png" />
            </a>
          </li>
          <li>
            <a href="https://blog.naver.com/imf4" target="_blank">
              Naver Blog
              <img style={{...inlineStyle.titleContentSize, ...inlineStyle.space}} src="http://sire-korea.com/UI_FANDANGO/img/uif_sns_naverblog.png" />
            </a>
          </li>
          <li>
            <a href="https://geoseong.github.io/" target="_blank">
              GitHub Page Blog
              <i style={{...inlineStyle.titleContentSize, ...inlineStyle.space}} className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <span className="text-light">Open Source &amp; Community</span>
        <ul>
          <li>
            <a href="https://github.com/awskrug/gudi-group" target="_blank">AWSKRUG(AWS Korea User Group) guro-digital meetup leader</a>
          </li>
          <li>
            <a href="https://github.com/react-native-seoul" target="_blank">React Native Seoul meetup admin</a>
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <span className="text-light">Language</span>
        <ul>
          <li>C sharp
            <ul>
              <li>ASP.NET</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>HTML5</li>
          <li>CSS &amp; CSS3</li>
        </ul>
        <ul>
          <li>Javascript
            <ul>
              <li>jQuery</li>
              <li>node.js</li>
              <li>React.js</li>
              <li>React-Native</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li><span className="text-light">Database</span>
        <ul>
          <li>Oracle</li>
          <li>MSSQL</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </li>
    </ul>
    <ul>
      <li><span className="text-light">Cloud</span>
        <ul>
          <li>AWS</li>
          <li>GCP</li>
          <li>Firebase</li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <span className="text-light">Docker</span>
        <ul>
          <li>GitLab Container Registry</li>
          <li>Bitbucket Pipeline</li>
          <li>Prisma API</li>
        </ul>
      </li>
    </ul>
    <div></div>
  </Layout>
)

export default About
