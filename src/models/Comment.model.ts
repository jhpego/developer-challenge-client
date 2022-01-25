export class Comment {
    id?:number;
    parent_id?: number;
    date?: Date;
    postId: number;
    user: string;
    content: string;
  }