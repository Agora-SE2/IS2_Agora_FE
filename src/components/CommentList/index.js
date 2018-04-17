import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';

import Loading from '../Loading';
import AgoraComment from './components/Comment';

import './styles.css';

export default class Comments extends Component {
    constructor() {
        super();

        this.state = {
            ready: false,
            comments: []
        }
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACK_URL + "opinions.json?page=1")
        .then(response => response.json())
        .then(data => this.setState({ready: true, comments: data.slice(0,3)}));
    }

    render() {
        const {ready, comments} = this.state;

        if(ready) {
            return (
                <Comment.Group>
                    {comments.map(comment => <AgoraComment key={comment.id} comment={comment} />)}
                    <a href="#continue">Ver más</a>
                </Comment.Group>
            );
        } else {
            return <Loading />;
        }
    }
}