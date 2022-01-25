import { Injectable } from '@angular/core';
import { Post } from 'src/models/Post.model';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicService {


  baseUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) {
  // this.baseUrl = /*environment.apiUrl +*/ this.baseUrl;
}

  public genericPostMethod(serviceUrl: string, objectRequest: any, credentials?: boolean): Observable<any> {
    const config = {}; //this.getHeadersAngular(credentials);
    const url = this.baseUrl + serviceUrl;
    return this.httpClient.post(url, objectRequest, config);
  }

  public genericGetMethod(serviceUrl: string /*, objectRequest: any, credentials?: boolean*/): Observable<any> {
    const config = {}; //this.getHeadersAngular(credentials);
    const url = this.baseUrl + serviceUrl;
    return this.httpClient.get(url /*, objectRequest, config*/);
  }





}
