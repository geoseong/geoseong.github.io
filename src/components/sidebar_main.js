import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSectionsList, getSectionPagesList, getPageContent, getToken, switchLoadStatus } from '../actions/index';
import SideBarTitle from './sidebar_title';
import Loader from './loader';

class SideBarMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnd: false
		};
	}
	componentWillMount() {
		// console.log('[sidebar_main:componentWillMount] this.props', this.props);
		/* action을 건드리는 메소드. */
		this.getSidebarList();
	}
	componentDidMount() {
		// console.log('# ------------------------------------------- #')
		// console.log('[sidebar_main:componentDidMount] this.props', this.props);
		
		/* 로딩화면을 보이기 위한 state */
		if(this.props.notebookName && this.props.notebookId){
			this.setState({
				isEnd: false
			})
		}
		if(this.props.loadstatus && this.props.loadstatus.sidebar || this.props.loadstatus === null){
			this.setState({
				isEnd: true
			})
		}else{
			this.setState({
				isEnd: false
			});
		}
	}

	componentWillReceiveProps() {
		// console.log('[sidebar_main] componentWillReceiveProps', this.props);
	}

	
	/* shouldComponentUpdate(nextProps, nextState) - lifecycle method
		: component update를 해야 할 것인가 결정 
		@return false / return true
	*/
	// shouldComponentUpdate(nextProps, nextState){
	//     
	// }

	/* getDerivedStateFromProps(props, state) - lifecycle method
		: render() 메소드 발동 직전에 실행됨
		@return : this.setState 쓰듯이 쓰면 됨.
		!! componentWillReceiveProps()와 componentWillMount()이 있으면 에러뜬다.
		여기서 state바꾸는 거 하면 무한루프 돈다
	*/
	// static getDerivedStateFromProps(props, state){
	//     if(props.notebookName && props.notebookId){
	//         console.log('----------');
	//         this.getSidebarList();
	//         return {
	//             isEnd: false
	//         }
	//     }
	//     if(props.loadstatus && props.loadstatus.sidebar || props.loadstatus === null){
	//         return {
	//             isEnd: true
	//         }
	//     }else{
	//         return {
	//             isEnd: false
	//         }
	//     }
	// }

	/* lifecycle method - 컴포넌트 업데이트 후 */
	// componentDidUpdate(prevProps, prevState, snapshot) {
	//     console.log('[sidebar_main]componentDidUpdate-prevProps', prevProps);
	// }
	

	getSidebarList = () => {
		console.log('# ------------------------------------------- #')
		console.log('[sidebar_main:getSidebarList] this.props', this.props)
		console.log('# ------------------------------------------- #')
		/* Notebook -> Section -> Page 순의 계급이 있음.
		- Section list 최상단에선 Notebook 명이 나오도록
		- Page list 최상단에선 Section 명이 나오도록 */
		/* this.props.match.params */
		let sectionId = this.props.sectionId;
		let token = this.props.storage.token.access_token;
		let notebookId = this.props.notebookId;
		
		console.log('[sidebar_main:getSidebarList] notebookId', notebookId);

		/* Sections List */
		if(Object.keys(sectionId).length === 0 && !this.props.notebookId){
			/* no action */
		}/* sectionId는 존재 안하지만 notebookId가 존재할 때.  */
		else if(Object.keys(sectionId).length === 0 && notebookId !== undefined){
			/* action/index */
			this.props.getSectionsList(token, notebookId, this.refreshToken);
		}/* Section's Pages List & get Page's Content */
		else if(sectionId.sectionId.indexOf('0-') > -1 && sectionId.sectionId.indexOf('1-') > -1){  
			/* 섹션페이지 리스트를 불러온 뒤에 페이지 내용 html을 불러온다. 그래야 lastModifiedDt를 가져올 수 있을 듯. */
			/* action/index */
			this.props.getSectionPagesList(token, sectionId.sectionId, this.refreshToken, this.props.getPageContent);
		}/* Section's Pages List */
		else if(sectionId.sectionId.indexOf('0-') > -1){    
			/* action/index */
			this.props.getSectionPagesList(token, sectionId.sectionId, this.refreshToken);
		}
	}
	refreshToken = (error) => {
		if(error){
			this.props.getToken('sidebar_main', (err)=> {
				console.log('app.js-getToken err', err);
			});
		}
	}

	showMeThePost = (listItem) => {
		console.log('[sidebar_main:showMeThePost] listItem', listItem);
		/* 로딩화면 등장시키기 : action/index */
		this.props.switchLoadStatus('main', false);
		/* 클릭한 listItem의 id에 '0-'과 '1-'이 둘다 포함될 경우 */
		if(listItem.id.indexOf('0-') > -1 && listItem.id.indexOf('1-') > -1){
			/* action/index */
			this.props.getPageContent(this.props.storage.token.access_token, listItem, this.refreshToken);
		}/* 클릭한 listItem의 id에 '0-'만 포함될 경우 */
		else if(listItem.id.indexOf('0-') > -1){
			/* action/index */
			this.props.getSectionPagesList(this.props.storage.token.access_token, listItem.id, this.refreshToken);
		}
	}

	/* custom fn
	@bool : false-로딩화면 보이기 / true-로딩화면 숨기기 */
	loadingDiv(bool){
		let styleDom = {
			'backgroundColor':'rgba(0,0,0,0.2)',
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'width': '100%',
			'backgroundImage': 'url(./img/ajax-loader.gif)',
			'backgroundRepeat': 'no-repeat',
			'backgroundPosition': 'center',
		}
		let styleMainDom = {
			...styleDom, 'height': '100%'
		}
		let styleMainHiddenDom = {
			...styleDom, 'display': 'none'
		}
		let loadCompleteDom = {
			'display': 'none'
		}

		return (
			<div style={(bool===false)?styleMainDom:styleMainHiddenDom}></div>
		);
	};

	/* sidebar 목록 DOM을 조합해 놓기 */
	assembleSideBarDom = (sidebarResult) => {
		console.log('[sidebar_main:assembleSideBarDom] sidebarResult', sidebarResult);
		return sidebarResult.map((listItem) => {
			let linkUrl = `/${this.props.notebookName}_${listItem.id}`;
			if(!listItem.parentSection){
				/* parentNotebook일 때 */
				return (
					<div className="gs-sidebar-item-area" key={listItem.id}>
						<Link to={linkUrl} className="gs-sidebar-item" onClick={() => this.showMeThePost(listItem)}>
							<span className="gs-sidebar-arrow"><span className="glyphicon glyphicon-menu-right"></span></span>
							{listItem.name}
						</Link>
					</div>
				)
			}else{
				/* parentSection일 때 */
				return (
					<div className="gs-sidebar-item-area" key={listItem.id}>
						<Link to={linkUrl} className="gs-sidebar-item" onClick={() => this.showMeThePost(listItem)}>
							<span className="gs-sidebar-arrow"><span className="glyphicon glyphicon-file"></span></span>
							{listItem.title}
						</Link>
					</div>
				)
			} //end if
		}); //end map
	}

	/* 기본 라우팅 목록 DOM조합 해놓기 */
	assembleRoutingDom = (routingResult) => {
		return routingResult.map((route) => {
			let linkUrl = `/${route}`;
			return (
				<div className="gs-sidebar-item-area" key={route}>
					<Link to={linkUrl} className="gs-sidebar-item">
						<span className="gs-sidebar-arrow"><span className="glyphicon glyphicon-folder-close"></span></span>
						{route.toUpperCase()}
					</Link>
				</div>
			)
		}); //end map
	}

	render() {
		console.log('---------------------------------------------');
		console.log('[sidebar_main:render] this.state', this.state);
		console.log('[sidebar_main:render] this.props', this.props);
		console.log('---------------------------------------------');

		/* Notebook -> Section -> Page 순의 계급이 있음.
		- Section list 최상단에선 Notebook 명이 나오도록
		- Page list 최상단에선 Section 명이 나오도록 */
		let propsStorage = this.props.storage;
		/* sidebar 목록 DOM을 조합해 놓기 */
		let sideBarDom = (this.props.storage.posts.sidebar)?this.assembleSideBarDom(this.props.storage.posts.sidebar):(<div></div>);
		/* 기본 라우팅 목록 DOM조합 해놓기 */
		let routingDom = this.assembleRoutingDom(Object.keys(propsStorage.routing));
		
		/* [return:실제 렌더링파트] if posts.sidebar length > 0 */
		if(propsStorage.posts.sidebar && propsStorage.posts.sidebar.length > 0){
			/* Notebook 선택했을때 Section 리스트 표시 */
			/* SectionList 메뉴일 때 */
			if(propsStorage.posts.sidebar[0].parentSection){
				return (
					<div>
						<SideBarTitle backUrl={this.props.notebookName} title={propsStorage.posts.sidebar[0].parentSection.name} />
						{this.loadingDiv(this.state.isEnd)}
						{sideBarDom}
					</div>
				)
			}/* NotebookList 메뉴일 때 */
			else{
				return (
					<div>
						<SideBarTitle backUrl={''} title={propsStorage.posts.sidebar[0].parentNotebook.name}/>
						{this.loadingDiv(this.state.isEnd)}
						{sideBarDom}
					</div>
				)
			}
		}/* [return] if token.access_token length > 0 */
		else if(propsStorage.token.access_token && propsStorage.token.access_token.length > 0){
			/* root path로 들어왔을때 기본으로 로드할 reducer_routing에 있는 Notebook 목록 */
			return (
				<div>
					{this.loadingDiv(this.state.isEnd)}
					{routingDom}
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return { 
		storage: state,
		loadstatus: state.posts.loaded
	};
}

export default connect(mapStateToProps, {
	getSectionsList: getSectionsList,
	getSectionPagesList: getSectionPagesList,
	getPageContent: getPageContent,
	getToken: getToken,
	switchLoadStatus: switchLoadStatus
})(SideBarMain);
