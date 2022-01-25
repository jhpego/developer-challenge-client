export class Post {
    id?:number;
    title:string;
    author:string;
    publish_date: Date;
    slug: string;
    description: string;
    content: string;
    counterComments: number;
  }