import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import * as dotenv from 'dotenv';


//dotenv.config();

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private apiUrl = process.env['BACKEND'];
  private apiUrl = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

  getProductsById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${id}`);
  }
}
