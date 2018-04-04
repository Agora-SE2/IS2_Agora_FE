import React, { Component } from 'react';
import { Comment, Divider, Header, Icon } from 'semantic-ui-react';

import AgoraComment from './components/Comment/index.js';
import './styles.css';

export default class Comments extends Component {
    render() {
        return (
            <div className="ui raised segment">
                <Header as="h2" icon textAlign="center">
                    <Icon name="checkmark" color="green"/>
                    <Header.Content>
                        {this.props.title}
                    </Header.Content>
                </Header>

                <Divider />

                <Comment.Group>
                    <AgoraComment />
                    <AgoraComment />
                    <AgoraComment />
                </Comment.Group>
                <a href="#continue">Ver más</a>
            </div>
        );
    }
}