import React, { Component } from 'react';

import ImgBanner from './images/senate.jpg';

import './styles.css';

export default class Banner extends Component {
    render() {
        return (
            <div style={{backgroundImage: "url(" + ImgBanner + ")"}} className="home banner">
                <div className="ui grid">
                    <div className="ten wide opaque column">
                        <div className="ui container"> 
                            <center><h1>Á G O R A</h1></center>
                            <hr/>
                            <br/>
                            <center>
                                <p id="description">La plataforma de participación política de los colombianos.</p>
                                <br/>
                                <a href="/login"><div className="ui inverted button">Iniciar sesión</div></a> &nbsp;
                                <a href="/signup"><div className="ui inverted button">Regístrate</div></a>
                            </center>
                            <br />
                        </div>
                    </div>
                    <div className="six wide column">
                    </div>
                </div> 
            </div>
        );
    }
}