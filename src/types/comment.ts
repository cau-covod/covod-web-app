export interface Comment {
  id: string;
  timestamp: number;
  authorId: string;
  authorName: string;
  content: string;
  replies: Comment[];
}
