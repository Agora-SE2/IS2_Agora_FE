import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';

export default class VisitorOptions extends Component {
    render() {
        return (
        <div className="right menu">
            <Searchbar className="ui item" />
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