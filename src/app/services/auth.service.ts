import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginRequest } from '../models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = 'http://localhost:4200/api/v1/auth';
  private tokenKey: string = 'authToken';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    let url: string =`${this.apiUrl}/login`;
    let loginData: LoginRequest = {
      email, password
    };

    return this.http.post<any>(url, loginData).pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.token);
      })
    )
  }
}
