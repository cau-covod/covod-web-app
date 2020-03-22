import React from 'react';
import Course from './course';
import { HashRouter } from 'react-router-dom';
import { buildCourse } from '../../test-utils/builders/lecture-builder';
import LectureInfo from './lecture-info';

export default {
  title: 'Feed/Course',
  component: Course
};

const course = buildCourse();

export const Default = () => (
  <HashRouter>
    <Course name={course.name} description={course.description}>
      {course.lectures.map(lecture => (
        <LectureInfo
          key={lecture.id}
          index={lecture.number}
          createdAt={lecture.created_at}
          thumbnailUrl={lecture.media.thumbnail}
          description={lecture.description}
          commentsCount={lecture.comment_count}
          length={lecture.media.length}
          viewUrl={`lecture/${lecture.id}`}
        />
      ))}
    </Course>
  </HashRouter>
);
