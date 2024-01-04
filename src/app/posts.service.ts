import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interfaces } from './interfaces';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }
  getPost(): Observable<Interfaces> {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/1`;
    return this.httpClient.get<Interfaces>(postUrl).pipe(delay(20));
  }
}
