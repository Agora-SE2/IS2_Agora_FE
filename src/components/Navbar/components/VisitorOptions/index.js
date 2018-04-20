import React, { Component } from 'react';

export default class VisitorOptions extends Component {
    render() {
        return (
        <div className="right menu">
            <div className="ui category search item">
                <div className="ui icon input">
                    <input className="prompt" placeholder="Busca proyectos de ley..." type="text"/>
                    <i className="search link icon"></i>
                </div>
                <div className="results"></div>
            </div>
            <a href="/login" className="item">
                Iniciar sesión
            </a>
            <a href="/signup" className="item">
                Registrarse
            </a>
        </div>  
        );
    }
}