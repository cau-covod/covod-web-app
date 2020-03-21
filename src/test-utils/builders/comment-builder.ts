import faker from 'faker';
import { Builder, id } from './common';
import { Comment } from '../../types/comment';

export const commentBuilder: Builder<Comment> = overrides => ({
  id: id(),
  timestamp: faker.random.number({ min: 0, max: 1000 }),
  authorId: id(),
  authorName: 'Hans Peter',
  content: 'You are fake news!',
  subComments: [],
  ...overrides
});
