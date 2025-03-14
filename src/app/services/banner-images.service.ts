import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerImagesService {
  private apiUrl = environment.BACKEND;

  constructor(private http: HttpClient) {}


  getBannerImages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/banner_images/active`);
  }
}