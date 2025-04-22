
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getMessages() {
    return this.http.get('/message/');
  }

  sendMessage(data: any) {
    return this.http.post('/message/', data);
  }

  getChats() {
    return this.http.get('/chat/');
  }
}
