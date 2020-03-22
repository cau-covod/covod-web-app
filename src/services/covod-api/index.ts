import ApiConfig from './config';
import ApiController from './api-controller';
import { OAuthHandler } from './components/oauth';
import { Courses } from './components/courses';

const config = new ApiConfig();
const api = new ApiController(config);
const oauth = new OAuthHandler(api, config);
const courses = new Courses(api, config);

export { config, oauth, courses };
