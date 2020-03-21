import React from 'react';
import styled from 'styled-components';
import Card from '../general/card';
import { Comment } from '../../types/comment';

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = props => {
  return (
    <Container>
      {props.comments.map(commie => (
        <Card>
          <AuthorName>{commie.authorName}</AuthorName>
          <Content>{commie.content}</Content>
        </Card>
      ))}
    </Container>
  );
};

export default Comments;

const Container = styled.div`
  display: block;
  overflowy: scroll;
  margin: 0 24px;
`;

const AuthorName = styled.u`
  font-family: 'Roboto';
`;

const Content = styled.p`
  font-family: 'Roboto';
`;
