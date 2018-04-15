import React, { Component } from 'react';

import NewsCard from '../NewsCard/index.js';

import './styles.css';

export default class NewsMosaic extends Component {
    constructor() {
        super();

        this.state = {
            ready: false,
            projects: []
        }
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACK_URL + "featured_projects.json?page=7")
        .then(response => response.json())
        .then(featured => {
            if(featured.length < 1) {
                console.error("didn't get any featured projects.");
                return;
            }

            let projects = [];

            for(const [i, f] of featured.slice(0,4).entries()) {
                fetch(process.env.REACT_APP_BACK_URL + "law_projects/" + f.id + ".json")
                .then(response => response.json())
                .then(project => {
                    projects.push(project);
                    if(i === 3) {
                        this.setState({
                            ready: true,
                            projects: projects
                        });
                    }
                });
            }
        });
    }
    
    
    render() {
        const {projects} = this.state;

        if(!this.state.ready)
            return (
                <div style={{ marginTop: 50 + 'px', height: '200px' }} className="ui news mosaic raised loading segment">
                </div>
            );
        else
            return (
                <div style={{ marginTop: 50 + 'px' }} className="ui news mosaic raised segment">
                    <h1>{this.props.title}</h1>
                    <div className="ui divider"></div>
                    <div className="ui container">
                        <NewsCard news={projects[0]}/>
                        <div className="ui three column grid">
                            <div className="column">
                                <NewsCard news={projects[1]}/>
                            </div>
                            <div className="column">
                                <NewsCard news={projects[2]}/>
                            </div>
                            <div className="column">
                                <NewsCard news={projects[3]}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}