export interface Lecture {
  id: number;
  number: number;
  created_at: string;
  description: string;
  comment_count: number;
  media: {
    length: number;
    thumbnail: string;
  };
}

export interface Course {
  id: number;
  name: string;
  description: string;
  lectures: Lecture[];
}

export type FeedDTO = [{ courses: Course[] }];
