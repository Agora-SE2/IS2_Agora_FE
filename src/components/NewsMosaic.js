import React, { Component } from 'react';
import NewsCard from './NewsCard.js';

export default class NewsMosaic extends Component {
    render() {
        return (
            <div className="ui news mosaic segment">
                <h1>{this.props.title}</h1>
                <div className="ui divider"></div>
                <div className="ui cards">
                    <NewsCard />
                    <NewsCard />
                </div>
            </div>
        );
    }
}