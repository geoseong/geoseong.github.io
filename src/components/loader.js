import React, { Component } from 'react';
import { Panel, Jumbotron } from 'react-bootstrap';

export default class Loader extends Component {
    render() {
        // return (<Panel bsStyle="info">
        //     <Panel.Heading>
        //         <Panel.Title componentClass="h3">geoseong's dev note</Panel.Title>
        //     </Panel.Heading>
        //     <Panel.Body>
        //         <p>ReactJS를 이용한 블로그 개발 스터디 겸 테스트 중입니다</p>
        //         <p>Coming Soon...</p>
        //     </Panel.Body>
        // </Panel>)
        return (
            <Jumbotron>
                <h1>Geoseong's dev note</h1>
                <p>
                    ReactJS, GitHub Page로 개발한 블로그입니다
                </p>
                <h3>
                    Geoseong
                </h3>
                <div>geoseong Full stack web dev.</div>
                <div>React-Native mobile app dev. </div>
                <div>parkopp@gmail.com </div>
                <div><a href="http://blog.naver.com/imf4">http://blog.naver.com/imf4</a></div>
                <div><a href="http://geoseong.tistory.com">http://geoseong.tistory.com</a></div>
                
            </Jumbotron>
        );
    }
}