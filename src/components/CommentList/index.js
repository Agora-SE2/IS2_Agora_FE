import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';

import Loading from 'components/Loading';
import AgoraComment from './components/Comment';

import './styles.css';

class CommentList extends Component {
    render() {
        const { comments } = this.props;
        if(comments) 
            return (
                <Comment.Group>
                    {comments.map(comment => <AgoraComment key={comment.id} comment={comment} />)}
                </Comment.Group>
            )
        else return <Loading />;
    }
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentList;