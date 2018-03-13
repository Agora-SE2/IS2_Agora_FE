import React, { Component } from 'react';
import ImgCapitolio from '../images/capitolio.png';

export default class Tag extends Component {
    render() {
        return (
            <div className="ui category link raised card">
                <div className="image">
                    <img src={ ImgCapitolio } />
                </div>
                <div className="content">
                    <a href="#" className="header">{this.props.title}</a>
                </div>
            </div>
        );
    }
}