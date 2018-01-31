import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ApiService {
  private pathToGetUsers="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient ) { }

getUser():Observable<any> {
  return this.http.get(this.pathToGetUsers);
}

}
