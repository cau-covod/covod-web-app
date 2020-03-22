import faker from 'faker';
import { Builder, id } from './common';
import { Comment } from '../../typings/comment';
import { buildList } from '../../test-utils/builders/list-builder';

export const commentBuilder: Builder<Comment> = overrides => ({
  id: id(),
  timestamp: 1584892542509 - faker.random.number({ min: 0, max: 1000 }),
  authorId: id(),
  authorName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  content: faker.lorem.sentence(),
  replies:
    faker.random.number({ min: 0, max: 100 }) < 20
      ? buildList(commentBuilder, 1, 5)
      : [],
  ...overrides
});
