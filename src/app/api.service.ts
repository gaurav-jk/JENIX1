import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://demo-api-production-4643.up.railway.app/api/products';

  constructor(private http: HttpClient) {}
  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  getProductsByCategory(categoryId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories/${categoryId}/products`);
  }
}