import React from 'react';
import { Comment } from 'semantic-ui-react';

import Loading from 'components/Loading';
import AgoraComment from './components/Comment';

import './styles.css';

const CommentList = props => {
    const {comments} = props;
    if(comments) 
        return (
            <Comment.Group>
                {comments.map(comment => <AgoraComment key={comment.id} comment={comment} />)}
                <a href="#continue">Ver más</a>
            </Comment.Group>
        )
    else return <Loading />;

}

export default CommentList;