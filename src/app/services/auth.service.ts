import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.BACKEND;

  constructor(private http: HttpClient) { }

  login(credentials: { username: string; password: string }): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', credentials.username);
    body.set('password', credentials.password);

    return this.http.post(this.apiUrl+'/login', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }

  register(credentials: { username: string; password: string }): Observable<any> {
    
    return this.http.post(this.apiUrl+'/user/register',{"email": credentials.username, "password": credentials.password});
  }
}
