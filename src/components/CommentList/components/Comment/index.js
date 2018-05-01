import React, { Component } from 'react';
import Humberto from 'images/humberto.jpg';
import { Comment } from 'semantic-ui-react';

class AgoraComment extends Component {
    constructor() {
        super();

        this.state = {
            liked: false,
            likes: 5
        }

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike() {
        this.setState(prevState => ({
            liked: !prevState.liked,
            likes: (prevState.liked ? prevState.likes-1 : prevState.likes+1)
        }));
    }

    render() {
        return (
            <Comment>
                <Comment.Avatar src={Humberto} />
                <Comment.Content>
                <Comment.Author as='a' href="/profile/1">Matt</Comment.Author>
                <Comment.Metadata>
                    <div>{this.props.comment.date}</div>
                </Comment.Metadata>
                <Comment.Text>{this.props.comment.content}</Comment.Text>
                <Comment.Actions>
                    <a style={(() => this.state.liked ? {color: 'red'} : {})()} className="like" onClick={this.handleLike}>Me trama ({this.state.likes})</a>
                    <Comment.Action>Responder</Comment.Action>
                </Comment.Actions>
                </Comment.Content>
            </Comment>
        );
    }
}

export default AgoraComment;