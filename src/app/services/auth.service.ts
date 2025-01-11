import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from '../dtos/register.dto';
import { Observable } from 'rxjs';
import { LoginDto } from '../dtos/login.dto';
import { API_URLS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  register(dto:RegisterDto):Observable<{token:string}> {
      return this.http.post<{token:string}>(API_URLS.AUTH.REGISTER,dto)
  }
  login(dto:LoginDto):Observable<{token:string}> {
      return this.http.post<{token:string}>(API_URLS.AUTH.LOGIN,dto)
  }
}
