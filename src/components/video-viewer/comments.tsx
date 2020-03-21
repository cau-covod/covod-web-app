import React from 'react';
import styled from 'styled-components';
import Card from '../general/card';
import { Comment } from '../../types/comment';

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
  display: block;
  overflowy: scroll;
`;

const CommentContainer = styled.div`
  display: block;
  margin-bottom: 12px;
`;

const ReplyContainer = styled.div`
  margin-top: 12px;
  margin-left: 30px;
`;

const AuthorName = styled.u`
  font-family: 'Roboto';
`;

const Content = styled.p`
  font-family: 'Roboto';
`;
