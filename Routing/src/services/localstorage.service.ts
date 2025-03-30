import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  set(key : string, value : any) {
    localStorage.setItem(key, value)
  }

  remove(key : string) {
    localStorage.removeItem(key)
  }

  get(key : string) {
    return localStorage.getItem(key)
  }

  clear() {
    localStorage.clear()
  }


}
