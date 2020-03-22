import { useState, useEffect } from 'react';
import { Course } from '../typings/lecture';
import { courses } from '../services/covod-api';

// Let's keep this hook in the provider layer. This way we can cache the data
// a global state without having to touch any components.
// The hooks act as a fassade.

/**
 * Returns a list of courses
 */
export function useCourses() {
  // Somehow get the freaking courses
  const [data, setData] = useState<Course[]>([]);

  useEffect(() => {
    courses.getAllCourses().then(res => setData(res));
  }, []);

  return data;
}
