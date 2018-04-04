import React from 'react';
import { Comment } from 'semantic-ui-react';

const AgoraComment = props => (
    <Comment>
        <Comment.Avatar src='/assets/images/avatar/small/matt.jpg' />
        <Comment.Content>
        <Comment.Author as='a' href="/profile/1">Matt</Comment.Author>
        <Comment.Metadata>
            <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
        </Comment.Content>
    </Comment>
  );

export default AgoraComment;