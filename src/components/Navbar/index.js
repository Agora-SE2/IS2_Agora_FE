import React, { Component } from 'react';
import logo from './images/logo.svg'; 

export default class Navbar extends Component {
    render() {
        return (
            <div id="navbar" className="ui top fixed big menu">
                <div className="ui container">
                    <a href="/" className="active item">
                        <img src={logo} alt="Logo" />
                    </a>
                    <a href="/search" className="item">
                        Proyectos de ley
                    </a>
                    <a href="/about" className="item">
                        Nosotros
                    </a>
                    <div className="right menu">
                        <div className="ui category search item">
                            <div className="ui icon input">
                                <input className="prompt" placeholder="Busca proyectos de ley..." type="text"/>
                                <i className="search link icon"></i>
                            </div>
                            <div className="results"></div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}