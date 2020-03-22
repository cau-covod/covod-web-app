import ApiConfig from './config';
import ApiController from './api-controller';
import { OAuthHandler } from './components/oauth';

const config = new ApiConfig();
const api = new ApiController(config);
const oauth = new OAuthHandler(api, config);

export { config, oauth };
