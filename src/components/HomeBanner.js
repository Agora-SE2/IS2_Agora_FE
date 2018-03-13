import React, { Component } from 'react';
import ImgCapitolio from '../images/capitolio.png';
import SigninForm from './SigninForm.js';
import Searchbar from './Searchbar.js';
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
                        <div className="ui container">
                            <h1>Á g o r a</h1>
                            <Searchbar />
                        </div>
                    </div>
                    <div className="eight wide column">
                        <SigninForm />
                    </div>
                </div> 
            </div>
        );
    }
}