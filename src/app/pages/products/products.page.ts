import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem, CartService } from '../../services/cart.service'; // Adjust the path as necessary
import { AlertController } from '@ionic/angular';
import { max } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: any[] = [];
  displayedProducts: CartItem[] = []; 

  // displayedProducts: any[] = [];
  currentPage: number = 1;
  pageSize: number = 100;
  totalProducts: number = 0;
  

  constructor(private http: HttpClient, private cartService: CartService,private alertController: AlertController) { }

  async addToCart(product: CartItem) {
    this.cartService.addToCart(product);
    await this.showAlert(product.name);
  }

  async showAlert(productName: string) {
    const alert = await this.alertController.create({
      header: 'Product Added',
      message: `${productName} has been added to your cart.`,
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<{ products: any[], total: number }>(`https://demo-api-production-4643.up.railway.app/api/products?page=${this.currentPage}&limit=${this.pageSize}`)
      .subscribe(result => {
        this.products = result.products;
        this.totalProducts = result.total;
        this.updateDisplayedProducts();
        console.log(this.products);
      }, error => {
        console.log(error);
      });
  }

  updateDisplayedProducts() {
    this.displayedProducts = this.products;
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.totalProducts) {
      this.currentPage++;
      this.loadProducts();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }

  // addToCart(product: CartItem) {
  //   this.cartService.addToCart(product);
  // }
}
