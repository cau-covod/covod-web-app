import React from 'react';
import { Course } from '../../typings/lecture';
import styled from 'styled-components';
import CourseComp from './course';
import LectureInfo from './lecture-info';

interface FeedProps {
  courses: Course[];
}

const Feed: React.FC<FeedProps> = props => {
  return (
    <Container>
      {props.courses.map(course => (
        <CourseComp key={course.id} {...course}>
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
        </CourseComp>
      ))}
    </Container>
  );
};

export default Feed;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 16px;
  }

  & > :last-child {
    margin-right: 0;
  }
`;
