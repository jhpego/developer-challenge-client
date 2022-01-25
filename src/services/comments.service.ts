import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comment } from 'src/models/Comment.model';
import { GroupCount } from 'src/models/Shared.model';
import { PublicService } from './public.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private publicService: PublicService) { }

  getByPost( postId:number ):Observable<Comment[]> {
    const url:string = `comments?postId=${postId}`;
    return this.publicService.genericGetMethod(url);
  }

  insert( comment:Comment ):Observable<Comment> {
    const url:string = `comments`;
    return this.publicService.genericPostMethod(url, comment);
  }

  getAll():Observable<Comment[]>{
    // Servico invocado para efeitos de demonstracao de
    // dados de dashboard, baseados nos comentarios
    // Idealmente este tipo de calculos seria feito no servidor/DB 
    const url:string = `comments`;
    return this.publicService.genericGetMethod(url);
  }
  
  groupByPost():Observable<GroupCount[]> {
    const url:string = `comments`;
    return this.getAll().pipe( map( res => { 
      const groups = res.reduce((groups:any, item:any) => ({
        ...groups,
        [item.postId]: [...(groups[item.postId] || []), item]
      }), {});
      const result = Object.entries(groups).map( ( values:any[] , idx ) => {
        return {id: values[0], _count: values[1].length  } 
      }).sort( (a,b) => b._count-a._count);
      return result;
    }))
  }


  groupByUser():Observable<GroupCount[]>{
    const url:string = `comments`;
    return this.publicService.genericGetMethod(url).pipe( map( res => {
      const groups = res.reduce((groups:any, item:any) => ({
        ...groups,
        [item.user]: [...(groups[item.user] || []), item]
      }), {});
      const result = Object.entries(groups).map( ( values:any[] , idx ) => {
        return {id: values[0], _count: values[1].length   } 
      }).sort( (a,b) => b._count-a._count);
      return result;
    }))
  }


  getTopCommenters():Observable<GroupCount[]>{
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
