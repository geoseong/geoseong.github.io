import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import { 
    clearSidebar, getToken, getPageContent, getSectionPagesList 
} from '../actions/index';
import PageHeader from './page_header';
import PostMain from './posts_main';
import SideBarMain from './sidebar_main';
import Loader from './loader';

export class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarDisplay: false,    /* SideBar를 비출건지 안비출건지 */
            contentsDisplay: true,   /* Contents Area를 비출건지 안비출건지 */
            loadMainEnd : false, /* 메인영역 DOM이 모두 로드 되었는지 확인 */
            loadSideEnd : false  /* 사이드바영역 DOM이 모두 로드 되었는지 확인 */
        };
    }
    
    pageId=null;
    notebookName=null;
    notebookId=null;
    idxOfUnderbar = this.props.match.path.indexOf('_');
    urlPath = this.props.match.url;

    componentWillMount() {
        // console.log('[app.js] componentWillMount props.match', this.props.match);
        
        /* url에 '_' 문자가 없는 경우 */
        if(this.idxOfUnderbar === -1){
            this.pageId = '';
            this.notebookName = this.props.match.path.substring(1);
            this.notebookId = this.props.storage.routing[this.notebookName];
        }/* url에 '_'문자가 포함된 경우 */
        else{
            this.pageId = this.props.match.url.substring(1);
            this.notebookName = this.props.match.path.substring(1, this.idxOfUnderbar);
            this.notebookId = this.props.storage.routing[this.notebookName];
        }

        if(this.props.match.path==='/'){
            // this.props.clearSidebar();
        }
        /* access_token 얻어오기 */
        this.props.getToken('app', (err)=> {
            if(err){
                // console.log('[app.js] componentWillMount getToken err', err);
                return;
            }
        });
    } //end componentWillMount

    /* lifecycle method */
    componentDidMount() {
        
    };
    
    /* 사이드바와 메인화면의 로딩이 완료되었는지 보고하기
        @type : sidebar / main / all
        @bool : 로드완료(true) / 로드시작(false)
    */
    loadComplete = (type, bool) => {
        console.log('[loadComplete]type', type, '/bool', bool);
        if(type==='main'){
            this.setState({
                loadMainEnd : bool
            });
        }if(type==='all'){
            this.setState({
                loadMainEnd : bool,
                loadSideEnd : bool
            });
        }else{
            this.setState({
                loadSideEnd : bool
            });
        }
    }

    /* 상단의 작대기 세개짜리 메뉴를 눌렀을 때 사이드바 노출위치 지정을 위한 state지정 */
    toggleSidebar = () => {
        if(this.state.sideBarDisplay){
            this.setState({
                sideBarDisplay : false,
                contentsDisplay : true,
            });
        }else{
            this.setState({
                sideBarDisplay : true,
                contentsDisplay : false,
            });
        }
    }


    refreshToken = (error) => {
        if(error){
            // console.log('[sidebar_index]let\'s go to the refreshToken', error);
            this.props.getToken('app', (err)=> {
                // console.log('app.js-getToken err', err);
            });
        }
    }

    detectSectionOrPage = (params) => {
        /* url 판별하기
            - if (0-과 1-이 있다면..)
                - 0과 1전체 : 페이지번호
                - 1은 : 섹션번호
            - if (0-만 있다면..)
                - 0은 : 섹션번호
        */
        let urlPath = this.props.match.url;
        let pageContentId, sectionId;

        if(urlPath.indexOf('0-') > -1 && urlPath.indexOf('1-') > -1){
            pageContentId = this.props.match.params.sectionId;
            sectionId = urlPath.substring(urlPath.indexOf('1-')).replace('1-', '0-');
        }else if(urlPath.indexOf('0-') > -1){
            pageContentId = null;
            sectionId = this.props.match.params.sectionId;
        }else{

        }
        // console.log('[app.js] detectSectionOrPage: pageContentId', pageContentId, ', sectionId', sectionId);
        
        return {pageContentId: pageContentId, sectionId: sectionId};
    }

    renderComponent = (pageId, notebookName, notebookId) => {
        // console.log('[app.js]renderComponent pageId', pageId, ',notebookName', notebookName, ',notebookId', notebookId);
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
        let styleSideDom = {
            ...styleDom, 'height': '100%'
        }
        let styleSideHiddenDom = {
            ...styleDom, 'display': 'none'
        }
        let loadCompleteDom = {
            'display': 'none'
        }
        let sideBarBlock = {
            'display': 'block'
        }
        let sideBarNone = {
            'display': 'none'
        }
        // over 992px 
        let intContentCol = (smallDevice) => {
            /* smallDevice의 마지노선 : 992px */
            if(this.state.contentsDisplay && smallDevice===true){
                return 12;
            }else if(this.state.contentsDisplay && smallDevice===false){
                return 9;
            }else if(!this.state.contentsDisplay && smallDevice===true){
                return 0;
            }else{
                /* !this.state.contentsDisplay && smallDevice===false */
                return 12;
            }
        }
        let intSidebarCol = (smallDevice) => {
            /* smallDevice의 마지노선 : 992px */
            if(this.state.sideBarDisplay && smallDevice===true){
                return 12;
            }else if(this.state.sideBarDisplay && smallDevice===false){
                return 3;
            }else if(!this.state.sideBarDisplay && smallDevice===true){
                return 0;
            }else{
                /* !this.state.sideBarDisplay && smallDevice===false */
                return 3;
            }
        }
        return (
            /* before
            <PostMain 
                pageId={pageId}
                token={this.props.storage.token.access_token}
                pagehtml={this.props.storage.posts.pagehtml}
                loadComplete={this.loadComplete}
            />
                <div style={
                    (this.state.loadMainEnd===false)?
                        (this.state.contentsDisplay===false)?
                            styleMainHiddenDom
                            :styleMainDom
                        :loadCompleteDom
                }></div>
                <div style={
                    (this.state.loadSideEnd===false)?
                        (this.state.sideBarDisplay===true)?
                            styleSideHiddenDom
                            :styleSideDom
                        :loadCompleteDom
                }></div>
            */
            <div>
                <PageHeader toggleSidebar={this.toggleSidebar}/>
                <Row className="show-grid gs-content">
                    <Col xs={intContentCol(true)} sm={intContentCol(true)} md={intContentCol(false)} lg={intContentCol(false)} >
                        <MediaQuery maxWidth={992}>
                            <div style={(this.state.contentsDisplay===false)?sideBarNone:sideBarBlock} className="gs-content-main">
                                <PostMain 
                                    pageId={pageId}
                                    loadComplete={this.loadComplete}
                                />
                            </div>
                        </MediaQuery>
                        <MediaQuery minWidth={992}>
                            <PostMain 
                                pageId={pageId}
                                loadComplete={this.loadComplete}
                            />
                        </MediaQuery>
                    </Col>
                    <Col xs={intSidebarCol(true)} sm={intSidebarCol(true)} md={intSidebarCol(false)} lg={intSidebarCol(false)}>
                        <MediaQuery maxWidth={992}>
                            <div style={(this.state.sideBarDisplay===false)?sideBarNone:sideBarBlock} className="gs-sidebar">
                                <SideBarMain 
                                    notebookName={notebookName}
                                    notebookId={notebookId} 
                                    sectionId={this.props.match.params}
                                    loadComplete={this.loadComplete}
                                />
                            </div>
                        </MediaQuery>
                        <MediaQuery minWidth={992}>
                            <div style={(this.state.sideBarDisplay===true)?sideBarNone:sideBarBlock} className="gs-sidebar">
                                <SideBarMain
                                    key='sb'
                                    notebookName={notebookName}
                                    notebookId={notebookId} 
                                    sectionId={this.props.match.params}
                                    loadComplete={this.loadComplete}
                                />
                            </div>
                        </MediaQuery>
                    </Col>
                </Row>
            </div>
        );
    }

    render() {
        console.log('---------------------------------------------');
        console.log('[app.js] render this.state', this.state);
        console.log('[app.js] render this.props', this.props);
        console.log('---------------------------------------------');
        
        // console.log('[app.js] pageId=', this.pageId, ', notebookName=', this.notebookName, ', notebookId=', this.notebookId, ', urlPath=', this.urlPath);
        
        /* Reducer에 access_token값이 없을 경우 */
        if(!this.props.storage.token.access_token){
            return (<div className="gs-center-all">pls wait...</div>);
        }/* Reducer에 access_token값이 있으면서 url에 '0-'이 포함될 경우 */
        else if(this.props.storage.token.access_token && this.urlPath.indexOf('0-') > -1){
            let ids = this.detectSectionOrPage();
            return (<div>{this.renderComponent(ids.pageContentId, this.notebookName, ids.sectionId)}</div>)
        }/* Reducer에 access_token값이 있으면서 url에 '0-'과 '1-'이 둘다 포함될 경우 */
        else if(this.props.storage.token.access_token && this.urlPath.indexOf('0-') > -1 && this.urlPath.indexOf('1-') > -1){
            let ids = this.detectSectionOrPage();
            return (<div>{this.renderComponent(ids.pageContentId, this.notebookName, ids.sectionId)}</div>)
        }/* Reducer에 access_token값이 있으면서 url에 '0-'과 '1-' 둘다 없는 경우 */
        else{
            return (<div>{this.renderComponent(this.pageId, this.notebookName, this.notebookId)}</div>)
        }
    } //end render()
}

function mapStateToProps(state) {
    return { storage: state };
}

export default connect(mapStateToProps, {
    clearSidebar: clearSidebar,
    getToken: getToken,
    getPageContent: getPageContent,
    getSectionPagesList: getSectionPagesList
})(Root);