import React, { useState } from 'react';
import styled from 'styled-components';

import { getTimeString } from '../../utils/sec-to-min';

import Card, { LightBlueCard } from '../general/card';
import { Comment } from '../../typings/comment';
import Button, { TransparentButton } from '../general/button'
import BigInput from '../general/bigInput'

interface ScrollingCommentsProps {
  comments: Comment[];
  setTimeStamp: (newTimeStamp: number) => void;
}

const ScrollingCommentSection: React.FC<ScrollingCommentsProps> = props => {
  return (
    <AllContainer>
      <Comments comments={props.comments} isTopLevel={true} setTimeStamp={props.setTimeStamp} />
    </AllContainer>
  );
};

export default ScrollingCommentSection;

interface CommentCardProps {
  commie: Comment;
  isTopLevel?: boolean;
  setTimeStamp: (newTimeStamp: number) => void;
}

const AnswerContainer = styled(Card)`
display: flex;
flex-direction: column;
margin:10px;
width: 100%;
background-color:${({ theme }) => theme.colors.primary[500]};
justify-content:space-around
`

const CommentCard: React.FC<CommentCardProps> = props => {
  const [replyState, setReplyState] = useState<boolean>()

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <LightBlueCard>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <AuthorName>{props.commie.user.full_name}</AuthorName>
          {props.isTopLevel &&
            <TransparentButton
              key={props.commie.id}
              onClick={() => props.setTimeStamp(props.commie.timestamp)}
              title={'Jump to ' + getTimeString(props.commie.timestamp)}>
              <Timestamp>{getTimeString(props.commie.timestamp)}</Timestamp>
            </TransparentButton>
          }
        </div>
        <Content>{props.commie.text}</Content>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {!replyState &&
            <Button onClick={() => setReplyState(true)}>↵</Button>
          }
        </div>
      </LightBlueCard>
      {replyState &&
        <AnswerContainer>

          <BigInput />
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', padding: '4px 0px' }}>
            <NegativeButton onClick={() => setReplyState(false)}>Abort</NegativeButton>
            <PositiveButton onClick={() => { alert("you just send a message uwu"); setReplyState(false) }}>Send</PositiveButton> {/* TODO: refresh comments after sending one */}
          </div>
        </AnswerContainer>
      }
    </div>
  )
}

interface CommentsProps {
  comments: Comment[];
  isTopLevel?: boolean;
  setTimeStamp: (newTimeStamp: number) => void;
}

const Comments: React.FC<CommentsProps> = props => {
  return (
    <CommentsContainer>
      {props.comments.map(commie => (
        <CommentContainer key={commie.id}>
          <CommentCard isTopLevel={props.isTopLevel} commie={commie} setTimeStamp={props.setTimeStamp} />
          <ReplyContainer>
            {<Comments comments={commie.replies} isTopLevel={false} setTimeStamp={props.setTimeStamp} />}
          </ReplyContainer>
        </CommentContainer>
      ))
      }
    </CommentsContainer >
  );
};

const SmolButton = styled(Button)`
padding: 4px 8px;
font-size: 16px;
`

const PositiveButton = styled(SmolButton)`background-color:green`

const NegativeButton = styled(SmolButton)`background-color:red`

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
