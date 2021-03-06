import faker from 'faker';
import { Builder, id } from './common';
import { Slide } from '../../typings/slide';

export const buildSlide: Builder<Slide> = overrides => ({
  id: id(),
  imageUrl: faker.image.business(),
  timestamp: faker.random.number({ min: 0, max: 1000 }),
  ...overrides
});
