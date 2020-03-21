interface Config {
  baseApiUrl: string;
  clientId: string;
  clientSecret: string;
}

export function getConfig(): Config {
  const baseApiUrl = process.env.REACT_APP_API_BASE_URL;
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  if (!baseApiUrl || !clientId || !clientSecret)
    throw new Error('Environment config is insufficient.');

  return {
    baseApiUrl,
    clientId,
    clientSecret
  };
}
