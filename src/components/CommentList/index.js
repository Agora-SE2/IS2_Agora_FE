import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';

import AgoraComment from './components/Comment/index.js';
import './styles.css';

export default class Comments extends Component {
    constructor() {
        super();

        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACK_URL + "opinions.json?page=1")
        .then(response => response.json())
        .then(data => this.setState({comments: data.slice(0,3)}));
    }

    render() {
        return (
            <Comment.Group>
                {this.state.comments.map(comment => <AgoraComment key={comment.id} comment={comment} />)}
                <a href="#continue">Ver más</a>
            </Comment.Group>
        );
    }
}