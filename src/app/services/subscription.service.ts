import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiUrl = 'http://localhost:8000/suscripcion';  
  constructor(private http: HttpClient) {}

  subscribe(email: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email: email });    
  }
}
