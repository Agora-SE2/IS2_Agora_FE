import React, { Component } from 'react';

import './styles.css';

export default class Searchbar extends Component {
    render() {
        return (
            <div className="ui huge search">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Proyectos, personas, categorías..." />
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
        );
    }
}