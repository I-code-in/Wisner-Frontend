import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  private apiUrl = 'http://localhost:8000/suscripcion';  

  constructor(private http: HttpClient) {}

  suscribirse(email: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email }).pipe(
      catchError(error => {
        return throwError(() => new Error(error.error?.detail || "Hubo un error al suscribirse."));
      })
    );
  }
}
