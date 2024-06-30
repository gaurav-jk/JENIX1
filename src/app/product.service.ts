export class ProductService {
  // Class implementation
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   private apiUrl = 'https://demo-api-production-4643.up.railway.app/api/categories'; // Replace with your actual API endpoint

//   constructor(private http: HttpClient) {}

//   getCategories(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/categories`);
//   }

//   getProductsByCategory(categoryId: string): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/categories/${categoryId}/products`);
//   }

//   getProduct(productId: string): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/products/${productId}`);
//   }
// }
