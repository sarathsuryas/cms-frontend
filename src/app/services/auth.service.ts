import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from '../dtos/register.dto';
import { Observable } from 'rxjs';
import { LoginDto } from '../dtos/login.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private api = `${environment.api}/auth`
  constructor(private http:HttpClient) { }
  register(dto:RegisterDto):Observable<{token:string}> {
      return this.http.post<{token:string}>(`${this.api}/register`,dto)
  }
  login(dto:LoginDto):Observable<{token:string}> {
      return this.http.post<{token:string}>(`${this.api}/login`,dto)
  }
}
