import React, { Component } from 'react';

import ImgCapitolio from './images/capitolio.png';

import './styles.css';

export default class NewsCard extends Component {
    render() {
        return (
            <div className="ui news fluid card">
                <a className="image" href={"/proyectoley/" + this.props.newsId}>
                    <img src={ ImgCapitolio } alt="Descripción estándar de la imagen" />
                </a>
                <div className="content">
                    <a className="header" href={"/proyectoley/" + this.props.newsId}>{ this.props.title }</a>
                    <div className="meta">
                    <a>{ this.props.description }</a>
                    </div>
                </div>
                {/* <div class="ui green bottom attached button">
                    <i class="add icon"></i>
                    Votar
                </div> */}
            </div>
        );
    }
}