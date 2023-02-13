import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const linkDaApi = "http://localhost:3000/posts/"

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  //CRIAÇÃO DE POSTS
  create(data: any): Observable<any> {
    return this.httpClient.post(linkDaApi, data)
  }

}
