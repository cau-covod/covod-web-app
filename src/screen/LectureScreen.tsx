import React from 'react';
import Topbar from '../components/general/topBar';
import SmartVideoViewer from '../components/video-viewer';
import styled from 'styled-components';
import { useUserInfo } from '../provider/authentication-provider';
import ScrollingCommentSection from '../components/video-viewer/comments'
import Card, { BlueCard } from '../components/general/card'
import Background from '../components/general/background'

import { buildList } from '../test-utils/builders/list-builder';
import { commentBuilder } from '../test-utils/builders/comment-builder';


interface LectureScreenProps {
  lectureId: string;
}

const RowFlex = styled.div`
display: flex;
direction: row;
justify-content:center;
max-height: 75vh;
`

const LectureScreen: React.FC<LectureScreenProps> = ({ lectureId }) => {
  const { username } = useUserInfo();
  var x = buildList(commentBuilder, 2, 10);

  return (
    <Background>
      <Container>
        <Topbar location="Lecture" user={username} />
        <RowFlex>
          <SmartVideoViewer videoId={lectureId} />
          <BlueCard style={{ minWidth: "300px"}}>
            <ScrollingCommentSection comments={x} />
          </BlueCard>
        </RowFlex>
      </Container>
    </Background>
  );
};

export default LectureScreen;

const Container = styled.div`
  & > * {
    margin-bottom: 16px;
  }

  & > :last-child {
    margin-bottom: initial;
  }
`;
