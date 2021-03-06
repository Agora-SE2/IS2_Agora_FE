import React, { Component } from 'react';
import Humberto from 'images/humberto.jpg';
import { Comment } from 'semantic-ui-react';
import { connect } from 'react-redux';


@connect((store) => {
    return {
        userId: store.currentUser ? store.currentUser.id : '',
        loggedIn: store.loggedIn
    };
})
class AgoraComment extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            liked: false,
            likes: props.comment.like,
        }

        this.like = this.like.bind(this);
        this.report = this.report.bind(this);
    }

    report() {
        if(this.props.loggedIn)
            window.location.replace('/report/' + this.props.comment.id)
        else
            window.location.replace('login');
    }

    like() {
        if(!this.props.loggedIn) {
            window.location.replace('/login');
            return;
        }

        this.setState(prevState => ({
            liked: !prevState.liked,
            likes: (prevState.liked ? prevState.likes-1 : prevState.likes+1)
        }));

        // var like = {
        //     opinion_id: this.props.comment.id,
        //     user_id: this.props.userId
        // }

        // fetch(process.env.REACT_APP_BACK_URL + "opinions/" + this.props.comment.id + ".json", {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         opinion: {
        //             likes: this.props.likes
        //         }
        //     })
        // })

        // fetch(process.env.REACT_APP_BACK_URL + "likes.json", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(like)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     this.setState(prevState => ({
        //         liked: !prevState.liked,
        //         likes: (prevState.liked ? prevState.likes-1 : prevState.likes+1)
        //     }));
        // })
    }

    render() {
        const {id, content, date, user, pro} = this.props.comment;
        if(user)
        return (
            <Comment>
                <Comment.Avatar src={Humberto} />
                <Comment.Content>
                <Comment.Author as='a' href={"/profile/" + user.id}>{user.birth_name ? user.birth_name : "@" + user.user_name}</Comment.Author>
                <Comment.Metadata>
                    <div style={(() => pro ? { color: '#336688' } : { color: '#FF9900' })()}><b>{(() => pro ? "A favor" : "En contra")()}</b></div>
                    <div>{date}</div>
                </Comment.Metadata>
                <Comment.Text>{content}</Comment.Text>
                <Comment.Actions>
                    <a style={(() => this.state.liked ? {color: 'red'} : {})()} className="like" onClick={this.like}>Me trama ({this.state.likes})</a>
                    <a href={"/report/" + id} className="report" onClick={this.report}>{this.state.reported ? "Denunciado" : "Denunciar"}</a>
                </Comment.Actions>
                </Comment.Content>
            </Comment>
        );
        else return '';
    }
}

export default AgoraComment;