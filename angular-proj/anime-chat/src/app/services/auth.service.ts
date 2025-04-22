
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post('/token/', data);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
