import React from 'react';
import styled from 'styled-components';
import Card from '../general/card';
import { Comment } from '../../typings/comment';

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = props => {
  return (
    <CommentsContainer>
      {props.comments.map(commie => (
        <CommentContainer>
          <Card>
            <AuthorName>{commie.authorName}</AuthorName>
            <Content>{commie.content}</Content>
          </Card>
          <ReplyContainer>
            {<Comments comments={commie.replies}></Comments>}
          </ReplyContainer>
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
};

export default Comments;

const CommentsContainer = styled.div`
  float: bottom;
  overflow-y: auto
`;

const CommentContainer = styled.div`
  margin-top: 12px;
`;

const ReplyContainer = styled.div`
  margin-left: 30px;
`;

const AuthorName = styled.u`
  display: inline-block;
  font-family: 'Roboto';
`;

const Content = styled.p`
  display: inline-block;
  font-family: 'Roboto';
`;
