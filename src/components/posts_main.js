import React, { Component } from 'react';
import { connect } from 'react-redux';
import convert from 'htmr';
import { getSectionPagesList, getPageContent, getToken } from '../actions/index';
import Loader from './loader';

class PostIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // pagehtml : ''
        };
        this.loadDiv = null;
    }

    componentWillMount() {
        // console.log('[posts_main] componentWillMount');
    }
    componentDidMount() {
        if(this.loadDiv){
            this.loadDiv.className = 'dilailla';

        }
    }
    componentWillReceiveProps() {
        // console.log('[posts_main] componentWillReceiveProps', this.props);
        
    }
    refreshToken = (error) => {
        if(error){
            // console.log('[posts_main] let\'s go to the refreshToken', error);
            this.props.getToken('posts_main', (err)=> {
                // console.log('app.js-getToken err', err);
            });
        }
    }

    render() {
        // console.log('[posts_main] this.props', this.props);
        // console.log('[posts_main] this.state', this.state);
        
        // let styleDom = {
        //     'backgroundColor':'rgba(0,0,0,0.3)',
        //     'height': '10em',
        //     'position': 'absolute',
        //     'top': 0,
        //     'width': '100%'
        // }
        if(this.props.pageId != null && this.props.pageId.length > 0 && this.props.pagehtml){
            return (
                <div>
                    {convert(this.props.pagehtml)}
                </div>
            )
        }
        else{
            return (<Loader />);
        }
    }
}

// function mapStateToProps(state) {
//     return { pagehtml: state.posts.pagehtml };
// }

export default connect(null, {
    getSectionPagesList: getSectionPagesList,
    getPageContent: getPageContent,
    getToken: getToken
})(PostIndex);
