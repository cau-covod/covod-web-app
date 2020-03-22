import React from 'react';
import Topbar from '../components/general/topBar';
import SmartVideoViewer from '../components/video-viewer';
import styled from 'styled-components';

interface LectureScreenProps {
  lectureId: string;
}

const LectureScreen: React.FC<LectureScreenProps> = ({ lectureId }) => {
  return (
    <Container>
      <Topbar location="Lecture" user="Christoph" />
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
