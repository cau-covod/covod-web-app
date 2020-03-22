import faker from 'faker';
import { Builder, id } from './common';
import { Lecture, Course } from '../../typings/lecture';
import { buildList } from './list-builder';

export const buildLecture: Builder<Lecture> = overrides => ({
  id: id(),
  number: faker.random.number({ min: 0, max: 20 }),
  created_at: faker.date.recent().toDateString(),
  comment_count: faker.random.number({ min: 0 }),
  description: faker.lorem.words(),
  media: {
    length: faker.random.number({ min: 0 }),
    thumbnail: faker.image.business()
  },
  ...overrides
});

export const buildCourse: Builder<Course> = overrides => ({
  id: id(),
  description: faker.lorem.words(),
  name: faker.lorem.word(),
  lectures: buildList(buildLecture),
  ...overrides
});
