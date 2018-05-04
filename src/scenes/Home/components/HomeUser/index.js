import React, { Component } from 'react';

import NewsMosaic from 'components/NewsMosaic';
import TagCarousel from 'components/TagCarousel'; 
import TwitterContainer from 'components/TwitterContainer';

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
                        <NewsMosaic title="Lo más debatido" />
                    </div>
                    <div className="eight wide column">
                        <NewsMosaic title="Lo último" />                        
                    </div>
                </div>

                <br />
                
                <TwitterContainer />

                <div className="ui container">
                    <TagCarousel />    
                </div>              
            </div>
        )
    }
}