import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './images/logo.svg'; 

import LeftAdminOptions from './components/LeftAdminOptions';
import VisitorOptions from './components/VisitorOptions';
import UserOptions from './components/UserOptions';

import './styles.css';

@connect((store) => {
    return {
        token: store.token
    }
})
export default class Navbar extends Component {
    render() {
        const {token} = this.props;
        let leftOptions, rightView;

        if(token > 0) {
            rightView = <UserOptions />
            leftOptions = <LeftAdminOptions />
        } else {
            rightView = <VisitorOptions />
        }

        return (
            <div id="navbar" className="ui top fixed secondary menu"> 
                <div className="ui container"> 
                    <a id="logo" href="/" className="active item"> 
                        <img src={logo} alt="Logo" /> 
                    </a> 
                    <a href="/search" className="item"> 
                        Proyectos de ley 
                    </a> 
                    {leftOptions}
                    {rightView} 
                </div> 
            </div> 
        );
    }
}