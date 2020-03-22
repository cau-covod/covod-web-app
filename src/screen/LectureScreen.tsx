import React from 'react';
import Topbar from '../components/general/topBar';
import SmartVideoViewer from '../components/video-viewer';
import styled from 'styled-components';
import { useUserInfo } from '../provider/authentication-provider';

interface LectureScreenProps {
  lectureId: string;
}

const LectureScreen: React.FC<LectureScreenProps> = ({ lectureId }) => {
  const { username } = useUserInfo();

  return (
    <Container>
      <Topbar location="Lecture" user={username} />
      <SmartVideoViewer videoId={lectureId} />
    </Container>
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
