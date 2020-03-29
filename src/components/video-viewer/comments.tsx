import React, { useState } from 'react';
import styled from 'styled-components';

import { getTimeString } from '../../utils/sec-to-min';
import { Comment, ClientGeneratedComment } from '../../typings/comment';

import Card, { LightBlueCard } from '../general/card';
import Button, { TransparentButton } from '../general/button'
import BigInput from '../general/bigInput'

interface ScrollingCommentsProps {
  comments: Comment[];
  timeStamp: number;
  setTimeStamp: (newTimeStamp: number) => void;
  sendComment: (comment: ClientGeneratedComment) => void;
}

const ScrollingCommentSection: React.FC<ScrollingCommentsProps> = props => {
  const [inputText, setInputText] = useState<string>()
  return (
    <AllContainer>
      <Comments comments={props.comments} timeStamp={props.timeStamp} setTimeStamp={props.setTimeStamp} sendComment={props.sendComment} />
      <AnswerContainer>
        Send your comment! {/* TODO: style, obviously :/ */}
        <BigInput onChange={evt => setInputText(evt.target.value)} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', padding: '4px 0px' }}>
          <PositiveButton onClick={() => {
            if (inputText === undefined || inputText === "") return;

            const generatedComment: ClientGeneratedComment = {
              text: inputText,
              timestamp: props.timeStamp
              // answers written here are top-level and thus don't have a parent
            };

            console.log(generatedComment)

            // props.sendComment(generatedComment);
          }}>Send</PositiveButton> {/* TODO: refresh comments after sending one */}
        </div>
      </AnswerContainer>
    </AllContainer>
  );
};

export default ScrollingCommentSection;

const AnswerContainer = styled(Card)`
display: flex;
flex-direction: column;
margin:10px;
width: 100%;
background-color:${({ theme }) => theme.colors.primary[500]};
justify-content:space-around
`
interface CommentCardProps {
  commie: Comment;
  parentId?: number;
  timeStamp: number;
  setTimeStamp: (newTimeStamp: number) => void;
  sendComment: (comment: ClientGeneratedComment) => void;
}

const CommentCard: React.FC<CommentCardProps> = props => {
  const [replyState, setReplyState] = useState<boolean>()
  const [inputText, setInputText] = useState<string>()

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
          {props.parentId === undefined &&
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
          <BigInput onChange={evt => setInputText(evt.target.value)} />
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', padding: '4px 0px' }}>
            <NegativeButton onClick={() => setReplyState(false)}>Dismiss</NegativeButton>
            <PositiveButton onClick={() => {
              if (inputText === undefined || inputText === "") return;

              const generatedComment: ClientGeneratedComment = {
                text: inputText,
                parent: props.parentId,
                // answers to this comment are 2nd-level or deeper and thus don't have a timestamp
              };

              generatedComment.parent = props.parentId
              console.log(generatedComment)

              // props.sendComment(generatedComment);
            }}>Send</PositiveButton> {/* TODO: refresh comments after sending one */}
          </div>
        </AnswerContainer>
      }
    </div>
  )
}

interface CommentsProps {
  comments: Comment[];
  parentId?: number;
  timeStamp: number;
  setTimeStamp: (newTimeStamp: number) => void;
  sendComment: (comment: ClientGeneratedComment) => void;
}

const Comments: React.FC<CommentsProps> = props => {
  return (
    <CommentsContainer>
      {props.comments.map(commie => (
        <CommentContainer key={commie.id}>
          <CommentCard commie={commie} parentId={props.parentId} timeStamp={props.timeStamp} setTimeStamp={props.setTimeStamp} sendComment={props.sendComment} />
          <ReplyContainer>
            {<Comments comments={commie.replies} parentId={commie.id} timeStamp={props.timeStamp} setTimeStamp={props.setTimeStamp} sendComment={props.sendComment} />}
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

const PositiveButton = styled(SmolButton)`
  background:green;
  &:hover {
      background: darkgreen;
    }
`;

const NegativeButton = styled(SmolButton)`
  background:red;
  &:hover {
      background: darkred;
    }
`;

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
