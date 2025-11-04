import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getHello(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hello`);
  }

  sendMessage(message: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/echo`, { message });
  }

  getStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/status`);
  }
}
