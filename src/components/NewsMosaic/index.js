import React, { Component } from 'react';

import NewsCard from '../NewsCard/index.js';

import './styles.css';

export default class NewsMosaic extends Component {
    render() {
        return (
            <div style={{ marginTop: 50 + 'px' }} className="ui news mosaic raised segment">
                <h1>{this.props.title}</h1>
                <div className="ui divider"></div>
                <div className="ui container">
                    <NewsCard newsId="4" title="Proyecto de ley #1" description="Descripción"/>
                    <div className="ui three column grid">
                        <div className="column">
                            <NewsCard newsId="1" title="Proyecto de ley #1" description="Descripción"/>
                        </div>
                        <div className="column">
                            <NewsCard newsId="2" title="Proyecto de ley #1" description="Descripción"/></div>
                        <div className="column">
                            <NewsCard newsId="3" title="Proyecto de ley #1" description="Descripción"/></div>
                    </div>
                </div>
            </div>
        );
    }
}