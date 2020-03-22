import React from 'react';
import { useCourses } from '../../provider/course-provider';
import Feed from './feed';

const SmartFeed: React.FC = () => {
  const courses = useCourses();

  return <Feed courses={courses} />;
};

export default SmartFeed;
