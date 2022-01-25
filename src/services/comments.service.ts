import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comment } from 'src/models/Comment.model';
import { PublicService } from './public.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private publicService: PublicService) { }

  getByPost( postId:number ):Observable<any> {
    const url:string = `comments?postId=${postId}`;
    return this.publicService.genericGetMethod(url);
  }

  insert( comment:Comment ):Observable<any> {
    const url:string = `comments`;
    return this.publicService.genericPostMethod(url, comment);
  }

  
  groupByPost(){
    const url:string = `comments`;
    return this.publicService.genericGetMethod(url).pipe( map( res => {
      const groups = res.reduce((groups:any, item:any) => ({
        ...groups,
        [item.postId]: [...(groups[item.postId] || []), item]
      }), {});
      const result = Object.entries(groups).map( ( values:any[] , idx ) => {
        return {id: values[0], count: values[1].length  } 
      }).sort( (a,b) => b.count-a.count);
      return result;
    }))
  }


  groupByUser(){
    const url:string = `comments`;
    return this.publicService.genericGetMethod(url).pipe( map( res => {
      const groups = res.reduce((groups:any, item:any) => ({
        ...groups,
        [item.user]: [...(groups[item.user] || []), item]
      }), {});
      const result = Object.entries(groups).map( ( values:any[] , idx ) => {
        return {id: values[0], count: values[1].length   } 
      }).sort( (a,b) => b.count-a.count);
      return result;
    }))
  }


  getTopCommenters(){
    return new Observable(observer => {
      const subs = this.groupByUser().subscribe( res => {
        const items = res.slice(0,5);
        observer.next(items);
        observer.complete();
      } )
      return () => subs.unsubscribe();
    });
  }




}
