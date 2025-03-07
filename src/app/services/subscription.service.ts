import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiUrl = environment.BACKEND;  

  constructor(private http: HttpClient) {}

  suscribirse(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/newsletter`, { email });
  }
}
