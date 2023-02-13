import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

const linkDaApi = "http://localhost:3000/posts/"

@Injectable({
  providedIn: 'root'
})
export class PostService {
 post: Post[] =[];

  constructor(
    private httpClient: HttpClient,
 
    ) { }

  //CRIAÇÃO DE POSTS
  create(data: any): Observable<any> {
    return this.httpClient.post(linkDaApi, data)
  }

  //EXIBIÇÃO DE POSTS
  getPosts(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/posts')
  }

}
