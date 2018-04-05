import React, { Component } from 'react';

import ProjectCard from './components/ProjectCard/index.js';

export default class Search extends Component {
    render() {
        return (
            <div className="ui page container">
                <div className="ui grid">
                    <div className="four wide column"></div>
                    <div className="twelve wide column">
                        <h1 className="ui header">Resultados para: </h1>
                    </div>
                </div>
                <div className="ui grid">
                        <div className="four wide column">
                            <div className="ui vertical large menu">
                                <div className="item">
                                    <div class="ui transparent icon input">
                                        <input type="text" placeholder="Buscar..."/>
                                        <i class="search icon"></i>
                                    </div>
                                </div>
                                <a className="item">
                                    <div className="header">Proyectos de ley</div>
                                    <div className="menu">
                                        <a className="active item">Principales</a>
                                        <a className="item">Más recientes</a>
                                        <a className="item">Mejor recibidos</a>
                                        <a className="item">Peor recibidos</a>
                                        <a className="item">Más debatidos</a>
                                    </div>
                                </a>
                                <a className="item">
                                    <div className="header">Usuarios</div>
                                    <div className="menu">
                                        <a className="item">I mean</a>
                                        <a className="item">I'll think of something</a>
                                        <a className="item">Eventually</a>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="twelve wide column">
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                    </div>
            </div>
        );
    }
}   


