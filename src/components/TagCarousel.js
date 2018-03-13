import React, { Component } from 'react';
import Tag from './Tag.js'

export default class TagCarousel extends Component {
    componentWillMount() {

    }

    render() {
        // obtener de la api
        
        return (
            <div className="ui tag carousel segment">
                <h2>Tag Carousel</h2>
                <div className="ui cards">
                    <Tag title="Corrupción"/>
                    <Tag title="Elecciones"/>
                </div>
            </div>
        );
    }
}