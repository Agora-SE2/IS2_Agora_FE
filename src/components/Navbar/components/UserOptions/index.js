import React, { Component } from 'react';
import Humberto from '../../../../images/humberto.jpg'

export default class UserOptions extends Component {
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
            <div className="item">
                <img className="ui avatar image" src={Humberto}/>
                <span>Humberto de la Calle</span>
        
            </div>
            </div>  
        );
    }
}