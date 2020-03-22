import faker from 'faker';
import { Builder, id } from './common';
import { Comment } from '../../typings/comment';
import { buildList } from '../../test-utils/builders/list-builder';

export const commentBuilder: Builder<Comment> = overrides => ({
  id: id(),
  timestamp: faker.random.number({ min: 0, max: 1000 }),
  created_at: faker.date.past().toISOString(),
  modified_at: faker.date.recent().toISOString(),
  path: faker.lorem.word(),
  user: {
    id: id(),
    full_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    username: faker.internet.userName()
  },
  text: faker.lorem.sentence(),
  replies:
    faker.random.number({ min: 0, max: 100 }) < 20
      ? buildList(commentBuilder, 1, 5)
      : [],
  ...overrides
});
