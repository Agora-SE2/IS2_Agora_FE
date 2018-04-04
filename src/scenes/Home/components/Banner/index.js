import React, { Component } from 'react';

import ImgBatallaBoyaca from './images/batalla-puente-boyaca.jpg';

import LoginForm from 'components/LoginForm/index.js';
import Searchbar from 'components/Searchbar/index.js';

import './styles.css';

var bannerStyle = {
    backgroundImage: "url(" + ImgBatallaBoyaca  + ")"
}

export default class HomeBanner extends Component {
    render() {
        return (
            <div style={ bannerStyle } className="home banner">
                <div className="ui grid">
                    <div className="eleven wide column">
                        <div className="ui container">
                            <h1>Á g o r a</h1>
                            <div className="ui divider"></div>
                            <Searchbar />
                        </div>
                    </div>
                    <div id="" className="five wide left column">
                        <LoginForm />
                    </div>
                </div> 
            </div>
        );
    }
}