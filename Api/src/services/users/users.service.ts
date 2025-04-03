import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private api : ApiService
  ) {}

  getUsers(){
    return this.api.get("https://reqres.in/api/users")
  }

  getUser(id : number){
    return this.api.get(`https://reqres.in/api/users/${id}`)
  }

}
