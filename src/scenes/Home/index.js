import React, { Component } from 'react';

// globally defined components
import NewsMosaic from 'components/NewsMosaic/index.js';
import TagCarousel from 'components/TagCarousel/index.js'; 

import Banner from './components/Banner/index.js';

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <Banner />
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