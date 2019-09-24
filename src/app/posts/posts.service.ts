import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get("http://localhost:3000/getPost");
    // return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/addPost",data);
  }

}
