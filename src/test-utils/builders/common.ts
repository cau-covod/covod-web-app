import faker from 'faker';

/**
 * Generic interface for a builder function. Every builder takes an override
 * object which overrides the build object making customization
 * of the result possible.
 */
export interface Builder<T> {
  (overrides?: Partial<T>): T;
}

/**
 * Returns a random uuid or an override if present.
 * @param override Possible override to return instead
 */
export const id: Builder<string> = override =>
  override ? override : faker.random.uuid();
