import React, { Component } from 'react';
import { Panel, Jumbotron } from 'react-bootstrap';

export default class Loader extends Component {
	render() {
		return (
			<Jumbotron>
				<div className="loader-wrapper">
					<h1>Geoseong's dev note</h1>
					<p>
						ReactJS, GitHub Page, MS OneNote API로 개발한 블로그입니다
					</p>
					<h3>
						Geoseong
					</h3>
					<div>Full stack web dev</div>
					<div>React-Native mobile app dev</div>
					<div>parkopp@gmail.com </div>
					<div><a href="http://blog.naver.com/imf4">http://blog.naver.com/imf4</a></div>
					<div><a href="http://geoseong.tistory.com">http://geoseong.tistory.com</a></div>
				</div>
			</Jumbotron>
		);
	}
}