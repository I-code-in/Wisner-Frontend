import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = environment.BACKEND;

  constructor(private http: HttpClient) {}

  postContacto(datosFormulario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, datosFormulario)
  }
}
