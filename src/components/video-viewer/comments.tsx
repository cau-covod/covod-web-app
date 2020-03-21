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
          <u>{commie.authorName}</u>
          <p>{commie.content}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Comments;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 24px;
`;
