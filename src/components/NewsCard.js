import React, { Component } from 'react';
import ImgCapitolio from '../images/capitolio.png';
import './NewsCard.css';

export default class NewsCard extends Component {
    render() {
        return (
            <div class="ui news fluid raised card">
                <a class="image" href="#">
                    <img src={ ImgCapitolio } alt="Descripción estándar de la imagen" />
                </a>
                <div class="content">
                    <a class="header" href="#">{ this.props.title }</a>
                    <div class="meta">
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