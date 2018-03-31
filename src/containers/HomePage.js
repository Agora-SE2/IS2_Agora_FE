import React, { Component } from 'react';
import HomeBanner from '../components/HomeBanner/HomeBanner.js';
import NewsMosaic from '../components/NewsMosaic/NewsMosaic.js';
import TagCarousel from '../components/TagCarousel/TagCarousel.js'; 

export default class HomePage extends Component {
    render() {
        return (
            <div id="home">
                <HomeBanner />
                <div className="ui container grid">
                    <div className="eight wide column">
                        <NewsMosaic title="Lo más debatido" />
                    </div>
                    <div className="eight wide column">
                        <NewsMosaic title="Lo último" />                        
                    </div>
                </div>

                <div className="ui divider"></div>  

                <div className="ui container">
                    <TagCarousel />    
                </div>              
            </div>
        )
    }
}