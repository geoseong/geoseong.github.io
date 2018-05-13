import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBarTitle extends Component {
    render() {
        // console.log('SideBarTitle props', this.props);
        
        return (<div className="gs-sidebar-title">
            <div>
                <div className="glyphicon glyphicon-folder-open"></div>
                <span>{this.props.title.toUpperCase()}</span>
            </div>
            <Link to={`/${this.props.backUrl}`} className="gs-sidebar-item">
                <div className="glyphicon glyphicon-backward"></div>
            </Link>
        </div>)
    }
}