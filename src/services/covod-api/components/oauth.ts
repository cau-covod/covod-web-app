import ApiComponent from '../abstract-api-component';

interface TokenInfo {
  access_token: string;
  expires_in: number;
  scope: 'upload view comment';
  token_type: 'Bearer';
}

export class OAuthHandler extends ApiComponent {
  public async getToken(username: string, password: string) {
    const formdata = new FormData();
    formdata.append('grant_type', 'password');
    formdata.append('client_id', this.config.clientId);
    formdata.append('username', username);
    formdata.append('password', password);
    formdata.append('client_secret', this.config.clientSecret);
    formdata.append('scope', 'upload view comment');

    const res = await this.api.postNoToken<TokenInfo>(
      '/oauth2/token',
      formdata
    );

    if (!res.ok || !res.data) throw new Error('GET Token was not ok');

    return res.data;
  }
}
