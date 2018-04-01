import React, { Component } from 'react';
import './CommentarySegment.css';
import Commentary from '../Commentary/Commentary.js';

export default class CommentarySegment extends Component {
    render() {
        return (
            
            <div class="ui raised segment">
                <h1>{this.props.title}</h1>
                <hr/>
                <Commentary />
                <Commentary />
                <Commentary />
                <a href="#">Ver más</a>
            </div>
        );
    }
}