import ApiComponent from '../abstract-api-component';

export class Lecture extends ApiComponent {
  getLectureVideoUrl(id: string): string {
    return `${this.config.baseUrl}/api/v1/${id}/media`;
  }
}
