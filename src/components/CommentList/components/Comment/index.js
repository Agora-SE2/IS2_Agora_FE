import React from 'react';
import Humberto from 'images/humberto.jpg';
import { Comment } from 'semantic-ui-react';

const AgoraComment = props => (
    <Comment>
        <Comment.Avatar src={Humberto} />
        <Comment.Content>
        <Comment.Author as='a' href="/profile/1">Matt</Comment.Author>
        <Comment.Metadata>
            <div>{props.comment.date}</div>
        </Comment.Metadata>
        <Comment.Text>{props.comment.content}</Comment.Text>
        <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
        </Comment.Content>
    </Comment>
  );

export default AgoraComment;