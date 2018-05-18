import React, { Component } from 'react';

import ProjectMosaic from 'components/ProjectMosaic';
import TagCarousel from 'components/TagCarousel'; 

import './styles.css';

export default class Home extends Component {
    componentDidMount() {
        document.title = `Ágora - La plataforma de participación 
            política de los colombianos`;
    }

    render() {
        return (
            <div id="home" className="ui page container">
                <div className="ui container grid">
                    <div className="eight wide column">
                        <ProjectMosaic title="Lo más debatido" />
                    </div>
                    <div className="eight wide column">
                        <ProjectMosaic title="Lo último" />                        
                    </div>
                </div>

                <br />

                <div className="ui container">
                    <TagCarousel />    
                </div>              
            </div>
        )
    }
}