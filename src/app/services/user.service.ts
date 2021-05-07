import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor( private http: HttpClient ) { }
  getUsers() {
    return this.http.get(`${this.apiUrl}`).
    pipe(map(data => {
      return data;
    }));
  }
  getUserDetails(id:number) {
    return this.http.get(`${this.apiUrl}/${id}`).
    pipe(map(data => {
      return data;
    }));
  }
}
