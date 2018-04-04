import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';

import AgoraComment from './components/Comment/index.js';
import './styles.css';

export default class Comments extends Component {
    render() {
        return (
            <Comment.Group>
                <AgoraComment />
                <AgoraComment />
                <AgoraComment />
                <a href="#continue">Ver más</a>
            </Comment.Group>
        );
    }
}