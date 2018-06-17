import React, { Component } from 'react';
import { connect } from 'react-redux';
import convert from 'htmr';
import { getSectionPagesList, getPageContent, getToken, switchLoadStatus } from '../actions/index';
import Loader from './loader';

class PostIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnd : false
        };
    }

    // localpagehtml=null;

    // componentWillMount() {
    //     // console.log('[posts_main] componentWillMount');
    //     this.props.loadComplete('main', false);
    // }

    // componentDidMount() {
    //     console.log('[posts_main] componentDidMount');
    // }

    // componentWillReceiveProps() {
    //     /* 이곳은 같은 섹션에서 돌아다니지 않고, url로 다이렉트로 들어왔거나 다른 섹션에서 들어올 때 실행되는 액션이다. */
    //     console.log('[posts_main] componentWillReceiveProps', this.props);
    // }

    /* getDerivedStateFromProps(props, state) - lifecycle method
        : render() 메소드 발동 직전에 실행됨
        @return : this.setState 쓰듯이 쓰면 됨.
        !! componentWillReceiveProps()와 componentWillMount()이 있으면 에러뜬다.
    */
    static getDerivedStateFromProps(props, state){
        console.log('[posts_main]getDerivedStateFromProps-props', props);
        // console.log('[posts_main]getDerivedStateFromProps-this.props', this.props);
        console.log('[posts_main]getDerivedStateFromProps-state', state);

        if(props.loadstatus && props.loadstatus.main){
            return {
                isEnd: true
            }
        }else{
            return {
                isEnd: false
            }
        }
    }

    /* lifecycle - component update를 해야 할 것인가 결정 */
    // shouldComponentUpdate(nextProps, nextState){
    //     /* 내 프로젝트 상에선..
    //     this.props는 기존 상태값
    //     nextProps는 받을 예정인 값 */
    //     console.log('[posts_main]shouldComponentUpdate-nextProps', nextProps)
    //     console.log('[posts_main]shouldComponentUpdate-this.props', this.props)
    //     console.log('[posts_main]shouldComponentUpdate-nextProps.loadstatus', nextProps.loadstatus)
    //     if(nextProps.loadstatus && nextProps.loadstatus.main === false && this.props.pagehtml !== nextProps.pagehtml){
    //         /* 로딩화면 없애기 */
    //         this.props.switchLoadStatus('main', true);
    //     }else if(nextProps.loadstatus && nextProps.loadstatus.main === false && this.props.pagehtml === nextProps.pagehtml){
    //         this.props.switchLoadStatus('main', true);
    //     }
    //     return true;
    // }

    /* lifecycle - shouldComponentUpdate에서 return false하면 발동안됨 */
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('[posts_main]componentDidUpdate-prevProps', prevProps)
    //     // console.log('[posts_main]componentDidUpdate-prevState', prevState)
    //     // console.log('[posts_main]componentDidUpdate-snapshot', snapshot)
    //     // console.log(object)
    // }

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

        return (<div style={
            (bool===false)?styleMainDom:styleMainHiddenDom
        }></div>);
    }

    render() {
        console.log('[posts_main] this.props', this.props);
        console.log('[posts_main] this.state', this.state);
        
        /* 로딩 표시 고려해야 할 사항
            1.url로 다이렉트로 들어왔거나 ()
            2.다른 섹션에서 들어왔거나 ()
            3.같은 섹션에서 들어왔거나 ()

        * 렌더링 방법 1
            <div>
                {convert(this.props.pagehtml)}
            </div>
        * 렌더링 방법 2
            <Loader />
        */
        if(this.props.loadstatus !== null && this.props.pagehtml){
            console.log('---this.props.loadstatus !== null && this.props.pagehtml')
            return (
                <div>
                    <div>
                        {this.loadingDiv(this.state.isEnd)}
                        {convert(this.props.pagehtml)}
                    </div>
                </div>
            )
        }
        else if(this.props.loadstatus === null && this.props.pagehtml){
            console.log('---this.props.loadstatus === null && this.props.pagehtml')
            return (
                <div>
                    <div>{convert(this.props.pagehtml)}</div>
                </div>
            )
        }
        else if(this.props.pageId){
            console.log('---this.props.pageId')
            return (
                <div>
                    {this.loadingDiv(false)}
                    <Loader />
                </div>
            )
        }
        else{
            return (
                <div>
                    <Loader />
                </div>
            )
        }
        // if(this.props.pagehtml === this.localpagehtml && this.props.pageId !== null && this.props.pageId.length > 0 && this.props.pagehtml){
        //     this.props.loadComplete('main', false);
        //     return (
        //         <div>
        //             {convert(this.props.pagehtml)}
        //         </div>
        //     )
        // }
        // if(this.props.pagehtml !== this.localpagehtml && this.props.pageId !== null && this.props.pageId.length > 0 && this.props.pagehtml){
        //     this.props.loadComplete('main', true);
        //     this.localpagehtml = this.props.pagehtml;
        //     return (
        //         <div>
        //             {convert(this.props.pagehtml)}
        //         </div>
        //     )
        // }
        // else if((this.props.pageId === null || this.props.pageId.length === 0) && this.props.pagehtml !== null){
        //     this.props.loadComplete('main', true);
        //     return (
        //         <div>
        //             {convert(this.props.pagehtml)}
        //         </div>
        //     )
        // }
        // else if(this.props.pageId === null || this.props.pageId.length === 0 && this.props.pagehtml === null){
        //     this.props.loadComplete('main', true);
        //     return (
        //         <Loader />
        //     )
        // }
        // else{
        //     return (
        //         <Loader />
        //     )
        // }
    }
}

function mapStateToProps(state) {
    return { 
        pagehtml: state.posts.pagehtml,
        loadstatus: state.posts.loaded
    };
}

export default connect(mapStateToProps, {
    getSectionPagesList: getSectionPagesList,
    getPageContent: getPageContent,
    getToken: getToken,
    switchLoadStatus: switchLoadStatus
})(PostIndex);
