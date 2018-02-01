import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

export interface userPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Array<PostComments>
}

export interface PostComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface userDetails {
  address: Object;
  company: Object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

@Injectable ()
export class ApiService {
  private pathToGetUsers = "https://jsonplaceholder.typicode.com/users";
  private pathToGetPosts = "https://jsonplaceholder.typicode.com/posts";
  private pathToComments = "https://jsonplaceholder.typicode.com/comments";



  constructor ( private http: HttpClient ) {
  }

  getUser (): Observable<any> {
    return this.http.get ( this.pathToGetUsers );
  }

  getPosts ( userId: number ): Observable<Array<userPost>> {
    return this.http.get<Array<userPost>> ( this.pathToGetPosts )
      .map ( ( posts ) => {
        const response = [];
        posts.forEach ( post => {
          if (post.userId == userId) {
            // post.comments = this.getSavedComments ( post.id );
            response.push ( post );
          }
        } );
        return response;
      } )
  }

  public getComments (): Observable<any> {
    return this.http.get ( this.pathToComments );
  }

}
