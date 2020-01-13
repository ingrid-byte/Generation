import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  get(id: Number){
    return this.http.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }

  getAll(){
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`);
  }

}
