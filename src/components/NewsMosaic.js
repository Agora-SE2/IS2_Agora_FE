import React, { Component } from 'react';

export default class NewsMosaic extends Component {
    render() {
        return (
            <div className="news mosaic">
                <h1>{this.props.title}</h1>
                <div className="ui segment"></div>
            </div>
        );
    }
}