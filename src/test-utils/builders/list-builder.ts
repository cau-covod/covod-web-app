import faker from 'faker';
import { Builder } from './common';

export function buildList<T>(
  builder: Builder<T>,
  min: number = 0,
  max: number = 10
): T[] {
  const length = faker.random.number({ min, max });
  const arr: T[] = [];

  for (let i = 0; i < length; i++) {
    arr.push(builder());
  }

  return arr;
}

export function buildIndexList<T>(
  builder: (i: number, length: number, arr: T[]) => T,
  min: number = 0,
  max: number = 10
): T[] {
  const length = faker.random.number({ min, max });
  const arr: T[] = [];

  for (let i = 0; i < length; i++) {
    arr.push(builder(i, length, arr));
  }

  return arr;
}
