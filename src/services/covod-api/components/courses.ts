import ApiComponent from '../abstract-api-component';
import { Course, FeedDTO } from '../../../typings/lecture';

export class Courses extends ApiComponent {
  async getAllCourses(): Promise<Course[]> {
    const res = await this.api.get<FeedDTO>('/api/v1/user/feed');

    if (!res.ok || !res.data) throw new Error('getAllCourses was not ok.');

    return res.data[0].courses;
  }
}
