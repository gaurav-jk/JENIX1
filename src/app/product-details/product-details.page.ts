import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  productId: string='';
  product: any;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      console.log('Product ID:', productId); // Debug log

      if (productId) {
        this.productId = productId;
        this.loadProductDetails(productId);
      } else {
        console.error('No productId found in route parameters.');
        // Handle the case where productId is null or undefined
      }
    });
  }



  loadProductDetails(productId: string) {
    this.getProductDetails(productId).subscribe(
      result => {
        this.product = result.products[0]; // Ensure this matches the API response structure
        console.log('Product details:', this.product);
      },
      error => {
        console.error('Error fetching product details:', error);
        // Optionally handle the error (e.g., show error message to the user)
      }
    );
  }

  getProductDetails(productId: string): Observable<any> {
    return this.http.get<any>(`https://demo-api-production-4643.up.railway.app/api/products/${productId}`).pipe(
      catchError(error => {
        console.error('Error in getProductDetails:', error);
        throw error; // You can customize error handling here if needed
      })
    );
  }
}
