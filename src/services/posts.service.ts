import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Comment } from 'src/models/Comment.model';
import { Post } from 'src/models/Post.model';
import { CommentsService } from './comments.service';
import { PublicService } from './public.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private publicService: PublicService,
    private commentsService: CommentsService
    ) { }


  getAll():Observable<Post[]> {
    const url:string = 'posts?_sort=publish_date&_order=desc';
    return this.publicService.genericGetMethod(url);
  }

  // getAllFull():Observable<any> {
  //   var timestamp=new Date().getTime();
  //   const url:string = 'posts?_embed=comments&t='+timestamp;
  //   return this.publicService.genericGetMethod(url).pipe( map( res => {
  //     res = res.map( (currRow:any) => {
  //       currRow.commentCount = currRow.comments.length;
  //       return currRow;
  //     }).sort( (a:any,b:any) => { return a.commentCount - b.commentCount; } )  
  //     return res;
  //   } ));
  // }


  getDetail(id:number):Observable<Post> {
    const url:string = `posts/${id}`;
    return this.publicService.genericGetMethod(url);
    // return [
    //   {message: "cenas"},
    // ];
  }


  getRecent():Observable<Post[]> {
    const url:string = 'posts?_sort=publish_date&_order=desc&_start=0&_limit=5';
    return this.publicService.genericGetMethod(url);
  }


  getPopular():Observable<Post[]>{
    return new Observable(observer => {
      const subs = this.commentsService.groupByPost().subscribe( res => {
        const items = res.slice(0,5);
        const obsGetPost = items.map( r => {
          const detailId:number = +r.id;
          return this.getDetail(detailId).pipe( map(
            res => {
              res._count = r._count;
              return res;
            }
          )) 
        });
        forkJoin(obsGetPost).subscribe( res2 => {
          observer.next(res2);
          observer.complete();
        })
      } )
      return () => subs.unsubscribe();
    });
  }


}
