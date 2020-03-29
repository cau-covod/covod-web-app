export interface Comment {
  id: number;
  timestamp: number;
  created_at: string;
  modified_at: string;
  user: {
    id: number;
    username: string;
    full_name: string;
  };
  text: string;
  path: string;
  replies: Comment[];
}


export interface ClientGeneratedComment {
  text: string;
  timestamp?: number;
  parent?: number;
}