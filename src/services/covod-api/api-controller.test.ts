import ApiConfig from './config';
import ApiController, { ApiResponse } from './api-controller';

let config: ApiConfig;
let fetchMock: jest.SpyInstance<
  Promise<Response>,
  [RequestInfo, (RequestInit | undefined)?]
>;

beforeAll(() => {
  config = new ApiConfig();
  config.init({
    baseUrl: 'https://test.covod.io',
    clientId: 'testId'
  });
  config.token = 'testToken';
});

beforeEach(() => {
  fetchMock = jest
    .spyOn(window, 'fetch')
    .mockImplementation(async () => new Response('{}'));
});

afterEach(() => {
  fetchMock.mockReset();
});

describe('get method', () => {
  test('fetch is called with correctly constructed url and headers', async () => {
    const api = new ApiController(config);

    await api.get('/api/testendpoint');

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      config.baseUrl + '/api/testendpoint',
      {
        method: 'GET',
        mode: 'cors',
        redirect: 'error',
        headers: {
          Authorization: `Bearer ${config.token}`,
          'Content-Type': 'application/json'
        }
      }
    );
  });

  test('returns an ApiResponse from the response body', async () => {
    fetchMock.mockResolvedValueOnce(new Response('{"testMsg": "hello"}'));
    const api = new ApiController(config);

    const res = await api.get('/api/testendpoint');

    expect(res).toEqual<ApiResponse<object>>({
      ok: true,
      status: 200,
      statusText: 'OK',
      data: { testMsg: 'hello' }
    });
  });

  test('returns data null if the response is not ok', async () => {
    fetchMock.mockResolvedValueOnce(
      new Response('Auth required', { status: 401 })
    );
    const api = new ApiController(config);

    const res = await api.get('/api/testendpoint');

    expect(res).toEqual<ApiResponse<null>>({
      ok: false,
      status: 401,
      statusText: 'OK',
      data: null
    });
  });

  test('returns data null if the response status is 204', async () => {
    fetchMock.mockResolvedValueOnce(new Response(undefined, { status: 204 }));
    const api = new ApiController(config);

    const res = await api.get('/api/testendpoint');

    expect(res).toEqual<ApiResponse<null>>({
      ok: true,
      status: 204,
      statusText: 'OK',
      data: null
    });
  });

  test('let errors thrown by fetch pass through', async () => {
    fetchMock.mockRejectedValueOnce(new Error('Unhandled fetch error'));
    const api = new ApiController(config);

    await expect(api.get('/api/testendpoint')).rejects.toThrow(
      'Unhandled fetch error'
    );
  });
});

describe('put method', () => {
  test('fetch is called with correctly constructed url and headers', async () => {
    const api = new ApiController(config);

    await api.put('/api/testendpoint', { testMsg: 'hello' });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      config.baseUrl + '/api/testendpoint',
      {
        method: 'PUT',
        mode: 'cors',
        redirect: 'error',
        headers: {
          Authorization: `Bearer ${config.token}`,
          'Content-Type': 'application/json'
        },
        body: `{\"testMsg\":\"hello\"}`
      }
    );
  });

  test('returns an ApiResponse from the response body', async () => {
    fetchMock.mockResolvedValueOnce(
      new Response('{"serverMsg": "Hello", "clientMsg": "World"}')
    );
    const api = new ApiController(config);

    const res = await api.put('/api/testendpoint', { clientMsg: 'Hello' });

    expect(res).toEqual<ApiResponse<object>>({
      ok: true,
      status: 200,
      statusText: 'OK',
      data: { serverMsg: 'Hello', clientMsg: 'World' }
    });
  });

  test('returns data null if the response is not ok', async () => {
    fetchMock.mockResolvedValueOnce(
      new Response('Auth required', { status: 401 })
    );
    const api = new ApiController(config);

    const res = await api.put('/api/testendpoint', {});

    expect(res).toEqual<ApiResponse<null>>({
      ok: false,
      status: 401,
      statusText: 'OK',
      data: null
    });
  });

  test('let errors thrown by fetch pass through', async () => {
    fetchMock.mockRejectedValueOnce(new Error('Unhandled fetch error'));
    const api = new ApiController(config);

    await expect(api.put('/api/testendpoint', {})).rejects.toThrow(
      'Unhandled fetch error'
    );
  });
});

describe('post method', () => {
  test('fetch is called with correctly constructed url and headers', async () => {
    const api = new ApiController(config);

    await api.post('/api/testendpoint', { testMsg: 'hello' });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      config.baseUrl + '/api/testendpoint',
      {
        method: 'POST',
        mode: 'cors',
        redirect: 'error',
        headers: {
          Authorization: `Bearer ${config.token}`,
          'Content-Type': 'application/json'
        },
        body: `{\"testMsg\":\"hello\"}`
      }
    );
  });

  test('returns an ApiResponse from the response body', async () => {
    fetchMock.mockResolvedValueOnce(
      new Response('{"serverMsg": "Hello", "clientMsg": "World"}')
    );
    const api = new ApiController(config);

    const res = await api.post('/api/testendpoint', { clientMsg: 'Hello' });

    expect(res).toEqual<ApiResponse<object>>({
      ok: true,
      status: 200,
      statusText: 'OK',
      data: { serverMsg: 'Hello', clientMsg: 'World' }
    });
  });

  test('returns data null if the response is not ok', async () => {
    fetchMock.mockResolvedValueOnce(
      new Response('Auth required', { status: 401 })
    );
    const api = new ApiController(config);

    const res = await api.post('/api/testendpoint', {});

    expect(res).toEqual<ApiResponse<null>>({
      ok: false,
      status: 401,
      statusText: 'OK',
      data: null
    });
  });

  test('let errors thrown by fetch pass through', async () => {
    fetchMock.mockRejectedValueOnce(new Error('Unhandled fetch error'));
    const api = new ApiController(config);

    await expect(api.post('/api/testendpoint', {})).rejects.toThrow(
      'Unhandled fetch error'
    );
  });
});

describe('postFormData method', () => {
  test('fetch is called with correctly constructed url and headers', async () => {
    const api = new ApiController(config);
    const data = new FormData();
    data.append('testMsg', 'hello');

    await api.postFormData('/api/testendpoint', data);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      config.baseUrl + '/api/testendpoint',
      {
        method: 'POST',
        mode: 'cors',
        redirect: 'error',
        headers: {
          Authorization: `Bearer ${config.token}`
        },
        body: data
      }
    );
  });

  test('returns an ApiResponse from the response body', async () => {
    const data = new FormData();
    data.append('testMsg', 'hello');
    fetchMock.mockResolvedValueOnce(
      new Response('{"serverMsg": "Hello", "clientMsg": "World"}')
    );
    const api = new ApiController(config);

    const res = await api.postFormData('/api/testendpoint', data);

    expect(res).toEqual<ApiResponse<object>>({
      ok: true,
      status: 200,
      statusText: 'OK',
      data: { serverMsg: 'Hello', clientMsg: 'World' }
    });
  });

  test('returns data null if the response is not ok', async () => {
    fetchMock.mockResolvedValueOnce(
      new Response('Auth required', { status: 401 })
    );
    const api = new ApiController(config);
    const data = new FormData();
    data.append('testMsg', 'hello');

    const res = await api.postFormData('/api/testendpoint', data);

    expect(res).toEqual<ApiResponse<null>>({
      ok: false,
      status: 401,
      statusText: 'OK',
      data: null
    });
  });

  test('let errors thrown by fetch pass through', async () => {
    fetchMock.mockRejectedValueOnce(new Error('Unhandled fetch error'));
    const api = new ApiController(config);

    await expect(
      api.postFormData('/api/testendpoint', new FormData())
    ).rejects.toThrow('Unhandled fetch error');
  });
});

describe('delete method', () => {
  test('fetch is called with correctly constructed url and headers', async () => {
    const api = new ApiController(config);

    await api.delete('/api/testendpoint');

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      config.baseUrl + '/api/testendpoint',
      {
        method: 'DELETE',
        mode: 'cors',
        redirect: 'error',
        headers: {
          Authorization: `Bearer ${config.token}`,
          'Content-Type': 'application/json'
        }
      }
    );
  });

  test('returns an ApiResponse from the response body', async () => {
    fetchMock.mockResolvedValueOnce(new Response('{}'));
    const api = new ApiController(config);

    const res = await api.delete('/api/testendpoint');

    expect(res).toEqual<ApiResponse<object>>({
      ok: true,
      status: 200,
      statusText: 'OK',
      data: {}
    });
  });

  test('returns data null if the response is not ok', async () => {
    fetchMock.mockResolvedValueOnce(
      new Response('Auth required', { status: 401 })
    );
    const api = new ApiController(config);

    const res = await api.delete('/api/testendpoint');

    expect(res).toEqual<ApiResponse<null>>({
      ok: false,
      status: 401,
      statusText: 'OK',
      data: null
    });
  });

  test('returns data null if the response status is 204', async () => {
    fetchMock.mockResolvedValueOnce(new Response(undefined, { status: 204 }));
    const api = new ApiController(config);

    const res = await api.delete('/api/testendpoint');

    expect(res).toEqual<ApiResponse<null>>({
      ok: true,
      status: 204,
      statusText: 'OK',
      data: null
    });
  });

  test('let errors thrown by fetch pass through', async () => {
    fetchMock.mockRejectedValueOnce(new Error('Unhandled fetch error'));
    const api = new ApiController(config);

    await expect(api.delete('/api/testendpoint')).rejects.toThrow(
      'Unhandled fetch error'
    );
  });
});
