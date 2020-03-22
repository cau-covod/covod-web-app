import { useState, useEffect } from 'react';
import { Course } from '../typings/lecture';
import { courses } from '../services/covod-api';

// Let's keep this hook in the provider layer. This way we can cache the data
// a global state without having to touch any components.
// The hooks act as a fassade.

function sortLectures(courses: Course[]) {
  for (var c = 0; c < courses.length; c++) {
    courses[c].lectures.sort((a, b) => a.number > b.number ? 1 : -1)
  }
  return courses
}

/**
 * Returns a list of courses
 */
export function useCourses() {
  // Somehow get the freaking courses
  const [data, setData] = useState<Course[]>([]);

  useEffect(() => {
    courses.getAllCourses().then(res => setData(sortLectures(res)));
  }, []);

  return data;
}
