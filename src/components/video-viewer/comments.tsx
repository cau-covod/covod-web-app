import React from 'react';
import styled from 'styled-components';
import { LightBlueCard } from '../general/card';
import { Comment } from '../../typings/comment';
import { getTimeString } from '../../utils/sec-to-min';
import Button from '../general/button'

interface CommentsProps {
  comments: Comment[];
  isTopLevel?: boolean;
}

const ScrollingCommentSection: React.FC<CommentsProps> = props => {
  return (
    <AllContainer>
      <Comments comments={props.comments} isTopLevel={true} />
    </AllContainer>
  );
};

export default ScrollingCommentSection;

const Comments: React.FC<CommentsProps> = props => {
  return (
    <CommentsContainer>
      {props.comments.map(commie => (
        <CommentContainer key={commie.id}>
          <LightBlueCard>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <AuthorName>{commie.user.full_name}</AuthorName>
              {props.isTopLevel &&
                <Timestamp>{getTimeString(commie.timestamp)}</Timestamp>
              }
            </div>
            <Content>{commie.text}</Content>
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <Button onClick={() => alert("I'm not implemented yet :/")} style={{ padding: "4px 8px", fontSize: "16px" }}>↵</Button>
            </div>
          </LightBlueCard>
          <ReplyContainer>
            {<Comments comments={commie.replies} isTopLevel={false}></Comments>}
          </ReplyContainer>
        </CommentContainer>
      ))
      }
    </CommentsContainer >
  );
};

const AllContainer = styled.div`
  overflow-y: scroll;
  border: 10px;
  height: 100%;
`;

const CommentsContainer = styled.div`
  float: bottom;
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
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary[900]};
`;

const Content = styled.p`
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.colors.primary[900]};
`;

const Timestamp = styled.b`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary[900]};
`;
