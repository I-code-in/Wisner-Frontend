import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.BACKEND;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

  getProductsById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${id}`);
  }

  getIngredientsById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/ingredients/${id}`);
  }
}
