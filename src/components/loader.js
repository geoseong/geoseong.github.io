import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class Loader extends Component {
    render() {
        return (<Panel bsStyle="info">
            <Panel.Heading>
                <Panel.Title componentClass="h3">geoseong's dev note</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <p>ReactJS를 이용한 블로그 개발 스터디 겸 테스트 중입니다</p>
                <p>Coming Soon...</p>
            </Panel.Body>
        </Panel>)
    }
}