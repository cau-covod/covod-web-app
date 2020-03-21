import ApiConfig from './config';

export interface ApiResponse<T> {
  ok: boolean;
  status: number;
  statusText: string;
  data: T | null;
}

class ApiController {
  private readonly config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  public async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const result = await fetch(this.config.baseUrl + endpoint, {
      method: 'GET',
      mode: 'cors',
      redirect: 'error',
      headers: {
        Authorization: `Bearer ${this.config.token}`,
        'Content-Type': 'application/json'
      }
    });

    return {
      ok: result.ok,
      status: result.status,
      statusText: result.statusText,
      data: result.ok && result.status !== 204 ? await result.json() : null
    };
  }

  public async put<T>(endpoint: string, body: object): Promise<ApiResponse<T>> {
    const result = await fetch(this.config.baseUrl + endpoint, {
      method: 'PUT',
      mode: 'cors',
      redirect: 'error',
      headers: {
        Authorization: `Bearer ${this.config.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return {
      ok: result.ok,
      status: result.status,
      statusText: result.statusText,
      data: result.ok ? await result.json() : null
    };
  }

  public async post<T>(
    endpoint: string,
    body: object
  ): Promise<ApiResponse<T>> {
    const result = await fetch(this.config.baseUrl + endpoint, {
      method: 'POST',
      mode: 'cors',
      redirect: 'error',
      headers: {
        Authorization: `Bearer ${this.config.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return {
      ok: result.ok,
      status: result.status,
      statusText: result.statusText,
      data: result.ok ? await result.json() : null
    };
  }

  public async postFormData<T>(
    endpoint: string,
    data: FormData
  ): Promise<ApiResponse<T>> {
    const result = await fetch(this.config.baseUrl + endpoint, {
      method: 'POST',
      mode: 'cors',
      redirect: 'error',
      headers: {
        Authorization: `Bearer ${this.config.token}`
      },
      body: data
    });

    return {
      ok: result.ok,
      status: result.status,
      statusText: result.statusText,
      data: result.ok ? await result.json() : null
    };
  }

  public async postFormDataNoToken<T>(
    endpoint: string,
    data: FormData
  ): Promise<ApiResponse<T>> {
    const result = await fetch(this.config.baseUrl + endpoint, {
      method: 'POST',
      mode: 'cors',
      redirect: 'error',
      body: data
    });

    return {
      ok: result.ok,
      status: result.status,
      statusText: result.statusText,
      data: result.ok ? await result.json() : null
    };
  }

  public async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    const result = await fetch(this.config.baseUrl + endpoint, {
      method: 'DELETE',
      mode: 'cors',
      redirect: 'error',
      headers: {
        Authorization: `Bearer ${this.config.token}`,
        'Content-Type': 'application/json'
      }
    });

    return {
      ok: result.ok,
      status: result.status,
      statusText: result.statusText,
      data: result.ok && result.status !== 204 ? await result.json() : null
    };
  }
}

export default ApiController;
