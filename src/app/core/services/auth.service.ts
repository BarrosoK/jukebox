import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/api/register`, {
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
  }
  login(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/api/login`, {
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
  }
}
