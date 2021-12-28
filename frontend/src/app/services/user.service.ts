import { users } from './../data/users';
import  User  from 'src/app/models/userModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]>{
    return new Observable<User[]>(o=>{
      o.next(users)
      o.complete()
    })
  }
  login(id:number): Observable<any>{
    return new Observable(o=>{
      
    })
  }
}
