import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div id="navbar" class="ui top fixed big menu">
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
                    <div class="right menu">
                        <div class="ui category search item">
                            <div class="ui icon input">
                                <input class="prompt" placeholder="Busca proyectos de ley..." type="text"/>
                                <i class="search link icon"></i>
                            </div>
                            <div class="results"></div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}