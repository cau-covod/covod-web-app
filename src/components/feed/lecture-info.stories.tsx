import React from 'react';
import LectureInfo from './lecture-info';
import { HashRouter } from 'react-router-dom';
import { buildLecture } from '../../test-utils/builders/lecture-builder';

export default {
  title: 'Feed/LectureInfo',
  component: LectureInfo
};

const lecture = buildLecture();

export const Default = () => (
  <HashRouter>
    <LectureInfo
      index={lecture.number}
      createdAt={lecture.created_at}
      thumbnailUrl={lecture.media.thumbnail}
      description={lecture.description}
      commentsCount={lecture.comment_count}
      length={lecture.media.length}
      viewUrl={`lecture/${lecture.id}`}
    />
  </HashRouter>
);
