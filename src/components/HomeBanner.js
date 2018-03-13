import React, { Component } from 'react';
import ImgCapitolio from '../images/capitolio.png';
import SigninForm from './SigninForm.js';
import './HomeBanner.css';

var bannerStyle = {
    backgroundImage: "url(" + ImgCapitolio  + ")"
}

export default class HomeBanner extends Component {
    render() {
        return (
            <div style={ bannerStyle } class="home banner">
                <div className="ui grid">
                    <div className="eight wide column">
                        <h1>Ágora</h1>
                    </div>
                    <div className="eight wide column">
                        <SigninForm />
                    </div>
                </div> 
            </div>
        );
    }
}