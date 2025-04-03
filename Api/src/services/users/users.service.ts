import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http : ApiService
  ) {}

  getUsers(){
    return this.http.get("https://reqres.in/api/users")
  }

  getUser(id : number){
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }

}
