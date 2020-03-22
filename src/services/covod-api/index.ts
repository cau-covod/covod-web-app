import ApiConfig from './config';
import ApiController from './api-controller';
import { OAuthHandler } from './components/oauth';
import { Courses } from './components/courses';
import { Lecture } from './components/lecture';

const config = new ApiConfig();
const api = new ApiController(config);
const oauth = new OAuthHandler(api, config);
const courses = new Courses(api, config);
const lecture = new Lecture(api, config);

export { config, oauth, courses, lecture };
