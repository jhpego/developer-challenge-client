import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavItem } from 'src/models/Shared.model';
import { Post } from 'src/models/Post.model';
import { PublicService } from './public.service';
import * as FortAwesome  from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private publicService: PublicService) { }

  // getPosts():Post[] {
  //   return [
  //     { message: "cenas"},
  //     { message: "coisas"},
  //     { message: "mais"},
  //   ];
  // }

  getMenu():NavItem[] {
    return [
      {
        label: "Home",
        icon: FortAwesome.faHome,
        url: "/home"
      },
      {
        label: "Posts",
        icon: FortAwesome.faRss,
        url: "/posts"
      }
    ]
  }

  getPost( id:number):Observable<any> {
    const url:string = `posts/${id}`;
    return this.publicService.genericGetMethod(url);
  }

}
