import React, { Component } from 'react';

import Tag from '../Tag/index.js'

export default class TagCarousel extends Component {
    componentWillMount() {

    }

    render() {
        // obtener de la api
        
        return (
            <div className="ui tag carousel segment">
                <h2>Categorías de proyectos de ley</h2>
                <div className="ui divider"></div>
                <div className="ui cards">
                    <Tag title="Corrupción"/>
                    <Tag title="Elecciones"/>
                    <Tag title="Economía"/>
                    <Tag title="Educación"/>
                    <Tag title="Fuerza pública"/>
                    <Tag title="JEP"/>
                </div>
            </div>
        );
    }
}