import React, { Component } from 'react';
import ImgCapitolio from '../images/capitolio.png';
import ImgBatallaBoyaca from '../images/batalla-puente-boyaca.jpg';
import SigninForm from './SigninForm.js';
import Searchbar from './Searchbar.js';
import './HomeBanner.css';

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
                        <SigninForm />
                    </div>
                </div> 
            </div>
        );
    }
}