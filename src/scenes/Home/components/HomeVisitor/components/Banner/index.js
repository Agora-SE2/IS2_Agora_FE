import React, { Component } from 'react';

import ImgBanner from './images/senate.jpg';

import LoginForm from 'components/LoginForm';
import Searchbar from 'components/Searchbar';

import './styles.css';

export default class Banner extends Component {
    render() {
        return (
            <div style={{backgroundImage: "url(" + ImgBanner + ")"}} className="home banner">
                <div className="ui grid">
                    <div className="eleven wide column">
                        <div className="ui container"> 
                            <h1>Á g o r a</h1>
                            <br />
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