import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div id="navbar" className="ui top fixed big menu">
                <div className="ui container">
                    <a href="/" className="active item">
                        Ágora
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