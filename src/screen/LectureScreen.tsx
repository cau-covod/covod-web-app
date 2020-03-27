import React from 'react';
import styled from 'styled-components';

import { useAuth } from '../provider/authentication-provider';

import Topbar from '../components/general/topBar';
import Background from '../components/general/background';
import SmartVideoViewer from '../components/video-viewer';

interface LectureScreenProps {
  lectureId: string;
}

const LectureScreen: React.FC<LectureScreenProps> = ({ lectureId }) => {
  const { logout } = useAuth();

  return (
    <Background>
      <Container>
        <Topbar location="Lecture" logout={logout} />
        <SmartVideoViewer videoId={lectureId} />
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
