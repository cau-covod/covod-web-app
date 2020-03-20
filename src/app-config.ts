interface Config {
  baseApiUrl: string;
  clientId: string;
}

export function getConfig(): Config {
  const baseApiUrl = process.env.REACT_APP_API_BASE_URL;
  const clientId = process.env.REACT_APP_CLIENT_ID;

  if (!baseApiUrl || !clientId)
    throw new Error('Environment config is insufficient.');

  return {
    baseApiUrl,
    clientId
  };
}
