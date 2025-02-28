import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiUrl = environment.BACKEND;
  constructor(private http: HttpClient) {}

  subscribe(email: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email: email });    
  }
}
