import React, { Component } from 'react';

import Commentary from './components/Commentary/index.js';
import './styles.css';

export default class CommentarySegment extends Component {
    render() {
        return (
            
            <div className="ui raised segment">
                <h1>{this.props.title}</h1>
                <hr/>
                <Commentary />
                <Commentary />
                <Commentary />
                <a href="#continue">Ver más</a>
            </div>
        );
    }
}