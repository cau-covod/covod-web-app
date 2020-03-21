import faker from 'faker';
import { Builder, id } from './common';
import { Slide } from '../../types/slide';

export const slideBuilder: Builder<Slide> = overrides => ({
  id: id(),
  imageUrl: faker.image.business(),
  timestamp: faker.random.number({ min: 0, max: 1000 }),
  ...overrides
});
