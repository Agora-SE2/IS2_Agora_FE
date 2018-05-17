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
                                <div className="ui radio checkbox">
                                    <input type="radio" name=""/>
                                    <label><b>Proyectos de ley</b></label>
                                </div>
                                <div className="menu">
                                    <a href="/search?tag=Ciencia" className="item">Ciencia</a>
                                    <a href="/search?tag=Cultura" className="item">Cultura</a>
                                    <a href="/search?tag=Crimen" className="item">Crimen</a>
                                    <a href="/search?tag=Derecho" className="item">Derechos</a>
                                    <a href="/search?tag=Economía" className="item">Economía</a>
                                    <a href="/search?tag=Educación" className="item">Educación</a>
                                    <a href="/search?tag=JEP" className="item">JEP</a>
                                    <a href="/search?tag=Medio%20Ambiente" className="item">Medio Ambiente</a>
                                    <a href="/search?tag=Salud" className="item">Salud</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="ui radio checkbox">
                                    <input type="radio" name=""/>
                                    <label><b>Usuarios</b></label>
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


