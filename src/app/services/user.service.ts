import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = `${environment.api}/user`
  constructor(private _http:HttpClient) { }
  getUserData ():Observable<IUser> {
    return this._http.get<IUser>(`${this.api}/get-user-data`)
  }
}
