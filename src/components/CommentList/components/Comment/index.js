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
        // TODO: include like field
        const {content, date, like, user} = this.props.comment;

        return (
            <Comment>
                <Comment.Avatar src={Humberto} />
                <Comment.Content>
                <Comment.Author as='a' href={"/profile/" + user.id}>{user.birth_name ? user.birth_name : "@" + user.user_name}</Comment.Author>
                <Comment.Metadata>
                    <div>{date}</div>
                </Comment.Metadata>
                <Comment.Text>{content}</Comment.Text>
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