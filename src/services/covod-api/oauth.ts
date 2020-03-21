import ApiComponent from './abstract-api-component'

export class OAuthHandler extends ApiComponent {

  public getToken(username: string, password: string) {

    // var formData = new FormData();
    // formData.append("grant_type", "password")
    // formData.append("username", username)
    // formData.append("audience", "audience")
    // formData.append("client_id", this.config.clientId)
    // formData.append("client_secret", this.config.clientSecret)

    var data = {
      grant_type: "password",
      username: username,
      password: password,
      audience: "kein plan mann",
      scope: 'read:sample',
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
    }

    this.api.postNoToken(this.config.baseUrl + "/api/login",
      data).then(x => alert(x.data))

  }
}


