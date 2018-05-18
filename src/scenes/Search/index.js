import React, { Component } from 'react';

import Loading from 'components/Loading';
import ResultCard from './components/ResultCard';
import PaginateMenu from './components/PaginateMenu';

import { getTagIcon, parseQueryString } from 'services/api/agora-helpers.js';

export default class Search extends Component {
    constructor() {
        super();

        this.state = {
            ready: false,
            query: '',
            page: 1,
            projects: []
        }

        this.changePage = this.changePage.bind(this);
        this.isItemActive = this.isItemActive.bind(this);
        this.handleFetch = this.handleFetch.bind(this);
        this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
    }

    changePage = e => this.setState({ page: e.target.text });

    isItemActive(name) {
        const { search } = this.props.location;
        return parseQueryString(search).tag === name ? "active" : "";
    }

    componentWillMount() {
        this.handleFetch();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.page !== this.state.page)
            this.handleFetch();
    }

    handleFetch() {
        this.setState({ ready: false});
        const { search } = this.props.location;
        const { page } = this.state;

        fetch(process.env.REACT_APP_BACK_URL 
            + "law_projects.json" + (search ? search + '&' : '?')
            + "page=" + page)
        .then(response => response.json())
        .then(projectData => this.setState({
            ready: true,
            projects: projectData
        }));
    }

    handleSearchKeyPress = (e) => e.key === 'Enter' ? window.location.replace('/search?name=' + this.state.query) : this.setState({ query: e.target.value })

    render() {
        const {ready, projects} = this.state;
        let projectsView;

        if(!ready) {
            projectsView = <Loading />
        } else if(projects.length > 0) {
            projectsView = projects.map((project, i) => <ResultCard key={i} project={project}/>);
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
                                    <input onKeyPress={this.handleSearchKeyPress} type="text" placeholder="Buscar..."/>
                                    <i className="search icon"></i>
                                </div>
                            </div>
                            <div className="item">
                                <h3 className="ui header">Proyectos de ley</h3>
                                <div className="menu">
                                    <a href="/search?tag=Ciencia" className={this.isItemActive("Ciencia") + " item"}>
                                        <i className={getTagIcon("Ciencia") + "icon"}></i> 
                                        Ciencia
                                    </a>
                                    <a href="/search?tag=Cultura" className={this.isItemActive("Cultura") + " item"}>
                                        <i className={getTagIcon("Cultura") + "icon"}></i> 
                                        Cultura
                                    </a>
                                    <a href="/search?tag=Crimen" className={this.isItemActive("Crimen") + " item"}>
                                        <i className={getTagIcon("Crimen") + "icon"}></i> 
                                        Crimen
                                    </a>
                                    <a href="/search?tag=Derecho" className={this.isItemActive("Derecho") + " item"}>
                                        <i className={getTagIcon("Derecho") + "icon"}></i> 
                                        Derecho
                                    </a>
                                    <a href="/search?tag=Economía" className={this.isItemActive("Economía") + " item"}>
                                        <i className={getTagIcon("Economía") + "icon"}></i> 
                                        Economía
                                    </a>
                                    <a href="/search?tag=Educación" className={this.isItemActive("Educación") + " item"}>
                                        <i className={getTagIcon("Educación") + "icon"}></i> 
                                        Educación
                                    </a>
                                    <a href="/search?tag=JEP" className={this.isItemActive("JEP") + " item"}>
                                        <i className={getTagIcon("JEP") + "icon"}></i> 
                                        JEP
                                    </a>
                                    <a href="/search?tag=Medio%20Ambiente" className={this.isItemActive("Medio Ambiente") + " item"}>
                                        <i className={getTagIcon("Medio Ambiente") + "icon"}></i> 
                                        Medio Ambiente
                                    </a>
                                    <a href="/search?tag=Salud" className={this.isItemActive("Salud") + " item"}>
                                        <i className={getTagIcon("Salud") + "icon"}></i> 
                                        Salud
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="twelve wide column">
                        {projectsView}
                        <PaginateMenu active={this.state.page} total={12} callback={this.changePage} />
                    </div>
                </div>
            </div>
        );
    }
}   


