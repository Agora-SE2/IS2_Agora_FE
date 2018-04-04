import React, { Component } from 'react';
import logo from './images/logo.svg'; 

import VisitorOptions from './components/VisitorOptions/index.js';

export default class Navbar extends Component {
    render() {
        return (
            <div id="navbar" className="ui top fixed big menu">
                <a href="/" className="active item">
                    <img src={logo} alt="Logo" />
                </a>
                <a href="/search" className="item">
                    Proyectos de ley
                </a>
                <a href="/about" className="item">
                    Nosotros
                </a>
                <VisitorOptions />
            </div>
        );
    }
}