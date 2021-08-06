export interface User {
  id: number;
  currentJob: string;
  firstName: string;
  lastName: string;
  photo?: string;
  interests: string[];
  knowledges: string[];
  skills: {
    soft: string[];
    hard: string[];
  }
}
