import React from 'react';
import Topbar from '../components/general/topBar';

interface LectureScreenProps {
  lectureId: string;
}

const LectureScreen: React.FC<LectureScreenProps> = ({ lectureId }) => {
  return (
    <>
      <Topbar location="Lecture" user="Christoph" />
      <h1>Lecture Screen</h1>
    </>
  );
};

export default LectureScreen;
