import ApiConfig from './config';
import ApiController from './api-controller';

const config = new ApiConfig();
const api = new ApiController(config);

export { config };
