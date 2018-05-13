import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSectionsList, getSectionPagesList, getPageContent, getToken } from '../actions/index';
import SideBarTitle from './sidebar_title';
import Loader from './loader';

class SideBarMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount() {
        // console.log('[sidebar_main-componentWillMount] this.props', this.props)
        this.getSectionPagesList(this.props.storage.token.access_token);
    }
    componentDidMount() {
        // console.log('[sidebar_main] this', this);
    }

    getSectionPagesList = (token) => {
        let sectionId = this.props.sectionId;
        // console.log('[sidebar_main-getSectionPagesList] sectionId', sectionId)
        /* Sections List */
        if(Object.keys(sectionId).length === 0){
            this.props.getSectionsList(token, this.props.notebookId, this.refreshToken);
        }/* Section's Pages List & get Page's Content */
        else if(sectionId.sectionId.indexOf('0-') > -1 && sectionId.sectionId.indexOf('1-') > -1){  
            this.props.getPageContent(token, {id:sectionId.sectionId}, this.refreshToken);
            this.props.getSectionPagesList(token, sectionId.sectionId.substring(sectionId.sectionId.indexOf('1-')).replace('1-', '0-'), this.refreshToken);
        }/* Section's Pages List */
        else if(sectionId.sectionId.indexOf('0-') > -1){    
            this.props.getSectionPagesList(token, sectionId.sectionId, this.refreshToken);
        }
    }
    refreshToken = (error) => {
        if(error){
            // console.log('[sidebar_main] let\'s go to the refreshToken', error);
            this.props.getToken('sidebar_main', (err)=> {
                // console.log('app.js-getToken err', err);
            });
        }
    }

    showMeThePost = (listItem) => {
        // console.log('[sidebar_main] showMeThePost listItem', listItem);
        /* 로딩화면 등장시키기 */
        this.props.loadComplete(false);
        /* 클릭한 listItem의 id에 '0-'과 '1-'이 둘다 포함될 경우 */
        if(listItem.id.indexOf('0-') > -1 && listItem.id.indexOf('1-') > -1){
            this.props.getPageContent(this.props.storage.token.access_token, listItem, (err)=>{
                // console.log('오류!', err);
            });
        }/* 클릭한 listItem의 id에 '0-'만 포함될 경우 */
        else if(listItem.id.indexOf('0-') > -1){
            this.props.getSectionPagesList(this.props.storage.token.access_token, listItem.id, (err)=>{
                // console.log('오류!', err);
            });
        }
    }

    render() {
        // console.log('[sidebar_main] this.props', this.props);
        
        /* Notebook -> Section -> Page 순의 계급이 있음.
        - Section list 최상단에선 Notebook 명이 나오도록
        - Page list 최상단에선 Section 명이 나오도록 */
        let propsStorage = this.props.storage;
        let items = (this.props.storage.posts.sidebar)?this.props.storage.posts.sidebar.map((listItem) => {
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

            }
        }):(<div></div>);

        /* [return] if posts.sidebar length > 0 */
        if(propsStorage.posts.sidebar && propsStorage.posts.sidebar.length > 0){
            this.props.loadComplete(true);
            /* Notebook 선택했을때 Section 리스트 표시 */
            // console.log('[sidebar_index]sidebar', propsStorage.posts.sidebar);
            /* SectionList 메뉴일 때 */
            if(propsStorage.posts.sidebar[0].parentSection){
                return (
                    <div>
                        <SideBarTitle backUrl={this.props.notebookName} title={propsStorage.posts.sidebar[0].parentSection.name} />
                        {items}
                    </div>
                )
            }/* NotebookList 메뉴일 때 */
            else{
                return (
                    <div>
                        <SideBarTitle backUrl={''} title={propsStorage.posts.sidebar[0].parentNotebook.name}/>
                        {items}
                    </div>
                )
            }
        }/* [return] if token.access_token length > 0 */
        else if(propsStorage.token.access_token && propsStorage.token.access_token.length > 0){
            this.props.loadComplete(true);
            /* root path로 들어왔을때 기본으로 로드할 reducer_routing에 있는 Notebook 목록 */
            return Object.keys(propsStorage.routing).map((route) => {
                let linkUrl = `/${route}`;
                return (
                    <div className="gs-sidebar-item-area" key={route}>
                        <Link to={linkUrl} className="gs-sidebar-item">
                            <span className="gs-sidebar-arrow"><span className="glyphicon glyphicon-folder-close"></span></span>
                            {route.toUpperCase()}
                        </Link>
                    </div>
                )
            })
        }/* [return] else */
        // else{
        //     /* 로딩화면 */
        //     return (<Loader />);
        // }
    }
}

function mapStateToProps(state) {
    return { storage: state };
}

export default connect(mapStateToProps, {
    getSectionsList: getSectionsList,
    getSectionPagesList: getSectionPagesList,
    getPageContent: getPageContent,
    getToken: getToken
})(SideBarMain);
