import ApiConfig from './config';

test('accessing baseUrl or clientId after initiation does not throw', async () => {
  const config = new ApiConfig();

  config.init({ baseUrl: 'https://test.covod.io', clientId: 'testId' });

  expect(config.baseUrl).toBe('https://test.covod.io');
  expect(config.clientId).toBe('testId');
});

test('accessing baseUrl or clientId before initiation throws', async () => {
  const config = new ApiConfig();

  expect(() => config.baseUrl).toThrow();
  expect(() => config.clientId).toThrow();
});

test('calling init twice will throw', async () => {
  const config = new ApiConfig();

  config.init({ baseUrl: 'https://test.covod.io', clientId: 'testId' });

  const secondCall = () => config.init({ baseUrl: '...', clientId: '...' });

  expect(secondCall).toThrow();
});

test('accessing token before setting it throws', async () => {
  const config = new ApiConfig();

  expect(() => config.token).toThrow();
});

test('accessing token after setting it does not throw', async () => {
  const config = new ApiConfig();

  config.token = 'testToken';

  expect(config.token).toBe('testToken');
});

test('setting token as empty string throws', async () => {
  const config = new ApiConfig();

  expect(() => (config.token = '')).toThrow();
});

test('token can be set multiple times', async () => {
  const config = new ApiConfig();

  config.token = 'firstToken';
  expect(config.token).toBe('firstToken');

  config.token = 'secondToken';
  expect(config.token).toBe('secondToken');

  config.token = 'thirdToken';
  expect(config.token).toBe('thirdToken');
});
