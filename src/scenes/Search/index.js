import React, { Component } from 'react';

import Loading from 'components/Loading';
import ProjectCard from './components/ProjectCard';

export default class Search extends Component {
    constructor() {
        super();

        this.state = {
            ready: false,
            projects: []
        }
    }

    componentWillMount() {
        console.log(process.env.REACT_APP_BACK_URL + "law_projects.json" + this.props.location.search + "&page=1")
        fetch(process.env.REACT_APP_BACK_URL + "law_projects.json" + this.props.location.search + "&page=1")
        .then(response => response.json())
        .then(projectData => this.setState({
            ready: true,
            projects: projectData
        }));
    }

    render() {
        const {ready, projects} = this.state;
        let projectsView;

        if(!ready) {
            projectsView = <Loading />
        } else if(projects.length > 0) {
            projectsView = projects.map((project, i) => <ProjectCard key={i} project={project}/>);
        } else {
            projectsView = <div className="ui message">
                <h2>¡Oops!</h2>
                <p>No encontramos nada que coincidiera con tu búsqueda. Intenta con algo más.</p>
            </div>
        }

        document.title = "Búsqueda en Ágora";

        return (
            <div className="ui page container">
                <div className="ui grid">
                    <div className="four wide column"></div>
                    <div className="twelve wide column">
                        <h1 className="ui header">Resultados:</h1>
                    </div>
                </div>

                <div className="ui grid">
                    <div className="four wide column">
                        <div className="ui vertical large fluid menu">
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
                        {projectsView}
                        <div className="ui pagination menu">
                            <a className="active item">
                                1
                            </a>
                            <div className="disabled item">
                                ...
                            </div>
                            <a className="item">
                                10
                            </a>
                            <a className="item">
                                11
                            </a>
                            <a className="item">
                                12
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}   


