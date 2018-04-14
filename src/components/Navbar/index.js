import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './images/logo.svg'; 

import VisitorOptions from './components/VisitorOptions/index.js';
import UserOptions from './components/UserOptions/index.js';

import './styles.css'

@connect((store) => {
    return {
        token: store.user.token
    }
})
export default class Navbar extends Component {
    render() {
        const {token} = this.props;
        let options;
        if(token > 0) {
            options = <UserOptions />
        } else {
            options = <VisitorOptions />
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
                    {options}
                </div>
            </div>
        );
    }
}