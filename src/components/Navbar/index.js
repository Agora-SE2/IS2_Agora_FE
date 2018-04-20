import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './images/logo.svg'; 

import LeftAdminOptions from './components/LeftAdminOptions';
import VisitorOptions from './components/VisitorOptions';
import UserOptions from './components/UserOptions';

import './styles.css';

@connect((store) => {
    return {
        loggedIn: store.loggedIn
    }
})
export default class Navbar extends Component {
    render() {
        const {loggedIn} = this.props;
        let leftOptions, rightView;

        if(loggedIn) {
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