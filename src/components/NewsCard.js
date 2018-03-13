import React, { Component } from 'react';
import ImgCapitolio from '../images/capitolio.png';


export default class NewsCard extends Component {
    render() {
        return (
            <div class="ui card">
                <a class="image" href="#">
                    <img src={ ImgCapitolio } alt="Descripción estándar de la imagen" />
                </a>
                <div class="content">
                    <a class="header" href="#">Steve Jobes</a>
                    <div class="meta">
                    <a>Last Seen 2 days ago</a>
                    </div>
                </div>
                <div class="ui bottom attached button">
                    <i class="add icon"></i>
                    Add Friend
                </div>
            </div>
        );
    }
}