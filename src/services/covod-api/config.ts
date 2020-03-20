class ApiConfig {
  private isInitiated: boolean = false;
  private _baseUrl: string | undefined;
  private _clientId: string | undefined;
  private _token: string | undefined;

  public init(options: { baseUrl: string; clientId: string }) {
    if (this.isInitiated)
      throw new Error('CovodAPI can only be initiated once.');

    this.isInitiated = true;
    this._baseUrl = options.baseUrl;
    this._clientId = options.clientId;
  }

  public get baseUrl(): string {
    if (!this.isInitiated || !this._baseUrl)
      throw new Error('CovodAPI need to be initiated first.');

    return this._baseUrl;
  }

  public get clientId(): string {
    if (!this.isInitiated || !this._clientId)
      throw new Error('CovodAPI need to be initiated first.');

    return this._clientId;
  }

  public get token(): string {
    if (!this._token)
      throw new Error('Token is not set. Make sure to set a token first.');

    return this._token;
  }

  public set token(token: string) {
    if (token === '')
      throw new TypeError(
        'Invalid token parameter. Token can not be an empty string'
      );

    this._token = token;
  }
}

export default ApiConfig;
