import React from 'react';
import Topbar from '../components/general/topBar';
import SmartVideoViewer from '../components/video-viewer';
import styled from 'styled-components';
import { useAuth } from '../provider/authentication-provider';
import ScrollingCommentSection from '../components/video-viewer/comments';
import Card from '../components/general/card';
import Background from '../components/general/background';
import { useLectureComments } from '../provider/course-provider';

interface LectureScreenProps {
  lectureId: string;
}

const RowFlex = styled.div`
  display: flex;
  direction: row;
  justify-content: center;
  max-height: 75vh;
`;

const LectureScreen: React.FC<LectureScreenProps> = ({ lectureId }) => {
  const { logout } = useAuth();
  const comments = useLectureComments(lectureId);

  return (
    <Background>
      <Container>
        <Topbar location="Lecture" logout={logout} />
        <RowFlex>
          <div style={{ height: '100%' }}>
            <SmartVideoViewer videoId={lectureId} />
          </div>
          <Card style={{ minWidth: '300px' }}>
            <ScrollingCommentSection comments={comments} />
          </Card>
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
