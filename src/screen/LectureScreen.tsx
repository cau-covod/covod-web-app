import React from 'react';

interface LectureScreenProps {
  lectureId: string;
}

const LectureScreen: React.FC<LectureScreenProps> = ({ lectureId }) => {
  return <h1>Lecture Screen</h1>;
};

export default LectureScreen;
