import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userSubject = new Subject<{id:string,username:string,email:string}>()
  public user$ = this.userSubject.asObservable()
  constructor() { }
  setUser(user:any) {
    this.userSubject.next(user);
  }
  
}
