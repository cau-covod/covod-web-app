import faker from 'faker';
import { Builder, id } from './common';
import { Comment } from '../../typings/comment';
import { buildList } from '../../test-utils/builders/list-builder';

export const commentBuilder: Builder<Comment> = overrides => ({
  id: id(),
  timestamp: faker.random.number({ min: 0, max: 1000 }),
  authorId: id(),
  authorName: 'Hans Peter',
  content:
    faker.random.number({ min: 0, max: 1 }) === 1
      ? 'No u!'
      : 'You are fake news!',
  replies:
    faker.random.number({ min: 0, max: 100 }) < 20
      ? buildList(commentBuilder, 1, 5)
      : [],
  ...overrides
});
