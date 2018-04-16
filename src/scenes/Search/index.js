import React, { Component } from 'react';

import ProjectCard from './components/ProjectCard/index.js';

export default class Search extends Component {
    constructor() {
        super();

        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACK_URL + "law_projects.json?page=1")
        .then(response => response.json())
        .then(projectData => this.setState({
            projects: projectData
        }));
    }

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
                                <div className="ui transparent icon input">
                                    <input type="text" placeholder="Buscar..."/>
                                    <i className="search icon"></i>
                                </div>
                            </div>
                            <div className="item">
                                <div className="header">Proyectos de ley</div>
                                <div className="menu">
                                    <a className="active item">Principales</a>
                                    <a className="item">Más recientes</a>
                                    <a className="item">Mejor recibidos</a>
                                    <a className="item">Peor recibidos</a>
                                    <a className="item">Más debatidos</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="header">Usuarios</div>
                                <div className="menu">
                                    <a className="item">Más populares</a>
                                    <a className="item">Más participativos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="twelve wide column">
                        {this.state.projects.map((project, i) => <ProjectCard key={i} project={project}/> )}
                    </div>
                </div>
            </div>
        );
    }
}   


