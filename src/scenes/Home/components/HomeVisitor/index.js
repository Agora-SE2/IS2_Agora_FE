import React, { Component } from 'react';

import ProjectMosaic from 'components/ProjectMosaic';
import TagCarousel from 'components/TagCarousel'; 

import Banner from './components/Banner';

import './styles.css';

export default class Home extends Component {
    componentDidMount() {
        document.title = `Ágora - La plataforma de participación 
            política de los colombianos`;
    }

    render() {
        return (
            <div id="home">
                <Banner />
                <div className="ui container two column grid">
                    <div className="row">
                        <div className="column">
                            <ProjectMosaic title="Lo más debatido" />
                        </div>
                        <div className="column">
                            <ProjectMosaic title="Lo último" />                        
                        </div>
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