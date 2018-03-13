import React, { Component } from 'react';
import HomeBanner from '../components/HomeBanner.js';
import NewsMosaic from '../components/NewsMosaic.js';

export default class HomePage extends Component {
    render() {
        return (
            <div id="home">
                <HomeBanner />
                <div className="ui divider"></div>
                <div className="ui grid">
                    <div className="eight wide column">
                        <NewsMosaic title="Lo más debatido" />
                    </div>
                    <div className="eight wide column">
                        <NewsMosaic title="Lo último" />                        
                    </div>
                </div>                
            </div>
        )
    }
}