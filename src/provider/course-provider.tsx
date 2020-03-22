import { useState, useEffect } from 'react';
import { buildList } from '../test-utils/builders/list-builder';
import { Course } from '../typings/lecture';
import { buildCourse } from '../test-utils/builders/lecture-builder';

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
    setData(buildList(buildCourse));
  }, []);

  return data;
}
