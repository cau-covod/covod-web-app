import ApiComponent from '../abstract-api-component';
import { Comment, CommentSend } from '../../../typings/comment';

type CommentWrap = { comments: Comment[] };

export class Lecture extends ApiComponent {
  getLectureVideoUrl(id: string): string {
    return `${this.config.baseUrl}/api/v1/lecture/${id}/media`;
  }

  async getAllCommentsForLecture(id: string): Promise<Comment[]> {
    const res = await this.api.get<CommentWrap>(
      `/api/v1/lecture/${id}/comments`
    );

    if (!res.ok || !res.data)
      throw new Error('getAllCommentsForLecture was not ok.');

    return res.data.comments;
  }

  async sendComment(lectureId: string, comment: CommentSend): Promise<Comment[]> {
    const res = await this.api.put<CommentWrap>(
      `/api/v1/lecture/${lectureId}/comments`, comment
    );

    if (!res.ok || !res.data)
      throw new Error('sendComment was not ok.');

    return res.data.comments;
  }
}
