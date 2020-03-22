export interface Lecture {
  id: number;
  number: string;
  pub_time: string | null;
  name: string;
}

export interface Course {
  id: number;
  name: string;
}

export interface Feed {
  feed: [
    {
      courses: [{}];
    }
  ];
}
