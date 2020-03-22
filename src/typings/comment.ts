export interface Comment {
  id: number;
  timestamp: number;
  authorId: number;
  authorName: string;
  content: string;
  replies: Comment[];
}
