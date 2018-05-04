import React, { Component } from 'react';
import Humberto from 'images/humberto.jpg';
import { Comment } from 'semantic-ui-react';

class AgoraComment extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            liked: false,
            likes: props.comment.like,
            reported: false
        }

        this.like = this.like.bind(this);
        this.report = this.report.bind(this);
    }

    report() {
        this.setState(prevState => ({
            reported: !prevState.reported
        }));
    }

    like() {
        this.setState(prevState => ({
            liked: !prevState.liked,
            likes: (prevState.liked ? prevState.likes-1 : prevState.likes+1)
        }));
    }

    render() {
        const {content, date, user} = this.props.comment;

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
                    <a style={(() => this.state.liked ? {color: 'red'} : {})()} className="like" onClick={this.like}>Me trama ({this.state.likes})</a>
                    <a style={(() => this.state.reported ? {color: 'black', fontWeight: 'bold'} : {})()} className="report" onClick={this.report}>{this.state.reported ? "Denunciado" : "Denunciar"}</a>
                </Comment.Actions>
                </Comment.Content>
            </Comment>
        );
    }
}

export default AgoraComment;