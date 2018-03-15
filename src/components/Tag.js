import React, { Component } from 'react';
import ImgEconomia from '../images/economia.jpeg';
import ImgCorrupcion from '../images/corrupcion.png';
import ImgEducacion from '../images/educacion.jpg';
import ImgElecciones from '../images/elecciones.jpg';
import ImgFuerzaPublica from '../images/fuerza-publica.jpg';
import ImgJEP from '../images/jep.jpg';

var img;


export default class Tag extends Component {

    chooseImg(){
        if(String(this.props.title).localeCompare("Economía") == 0){
            img = ImgEconomia;
        }else if(String(this.props.title).localeCompare("Corrupción") == 0){
            img = ImgCorrupcion;
        }else if(String(this.props.title).localeCompare("Educación") == 0){
            img = ImgEducacion;
        }else if(String(this.props.title).localeCompare("Elecciones") == 0){
            img = ImgElecciones;
        }else if(String(this.props.title).localeCompare("Fuerza pública") == 0){
            img = ImgFuerzaPublica;
        }else if(String(this.props.title).localeCompare("JEP") == 0){
            img = ImgJEP;
        }
            
        
        return img;
    }
    render() {
        return (
            <div className="ui category link raised card">
                <div className="image">
                    <img src={ this.chooseImg() } />
                </div>
                <div className="content">
                    <a href="#" className="header">{this.props.title}</a>
                </div>
            </div>
        );
    }
}