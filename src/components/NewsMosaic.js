import React, { Component } from 'react';
import NewsCard from './NewsCard.js';

export default class NewsMosaic extends Component {
    render() {
        return (
            <div style={{ marginTop: 50 + 'px' }} className="ui news mosaic raised segment">
                <h1>{this.props.title}</h1>
                <div className="ui divider"></div>
                <div className="ui container">
                    <NewsCard title="Proyecto de ley #1" description="Descripción"/>
                    <div className="ui three column grid">
                        <div className="column">
                            <NewsCard title="Proyecto de ley #1" description="Descripción"/>
                        </div>
                        <div className="column">
                            <NewsCard title="Proyecto de ley #1" description="Descripción"/></div>
                        <div className="column">
                            <NewsCard title="Proyecto de ley #1" description="Descripción"/></div>
                    </div>
                </div>
            </div>
        );
    }
}