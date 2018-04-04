import React, { Component } from 'react';

import { Image, Card } from 'semantic-ui-react';

import ImgEconomia from 'images/economia.jpeg';
import ImgCorrupcion from 'images/corrupcion.png';
import ImgEducacion from 'images/educacion.jpg';
import ImgElecciones from 'images/elecciones.jpg';
import ImgFuerzaPublica from 'images/fuerza-publica.jpg';
import ImgJEP from 'images/jep.jpg';

var img;

export default class Tag extends Component {
    chooseImg(){
        if(String(this.props.name).localeCompare("Economía") == 0){
            img = ImgEconomia;
        }else if(String(this.props.name).localeCompare("Corrupción") == 0){
            img = ImgCorrupcion;
        }else if(String(this.props.name).localeCompare("Educación") == 0){
            img = ImgEducacion;
        }else if(String(this.props.name).localeCompare("Elecciones") == 0){
            img = ImgElecciones;
        }else if(String(this.props.name).localeCompare("Fuerza pública") == 0){
            img = ImgFuerzaPublica;
        }else if(String(this.props.name).localeCompare("JEP") == 0){
            img = ImgJEP;
        }            
        
        return img;
    }
    
    render() {
        return (
            <Card
                href={"/categoria/" + this.props.name}
                header={this.props.name}
                image={<Image src={this.chooseImg()} />}
            /> 
        );
    }
}