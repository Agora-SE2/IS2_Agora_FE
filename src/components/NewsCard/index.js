import React, { Component } from 'react';

import ImgCapitolio from './images/capitolio.png';

import './styles.css';

export default class NewsCard extends Component {
    render() {
        const {news} = this.props;

        if(news) {
            return (
                <div className="ui news fluid card">
                    <a className="image" href={"/proyectoley/" + news.id}>
                        <img src={ ImgCapitolio } alt="Descripción estándar de la imagen" />
                    </a>
                    <div className="content">
                        <a className="header" href={"/proyectoley/" + news.id}>{ news.name }</a>
                        <div className="meta">
                        <a>{ news.description }</a>
                        </div>
                    </div>
                    {/* <div className="ui green bottom attached button">
                        <i className="add icon"></i>
                        Votar
                    </div> */}
                </div>
            );
        } else
            return (
                <div>Loading...</div>
            );
    }
}