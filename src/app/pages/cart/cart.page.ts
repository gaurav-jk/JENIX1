import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'; // Adjust the path as per your project structure
import { Product } from '../products/products.module'; // Adjust the path as per your project structure

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((cart: Product[]) => {
      this.cartItems = cart;
    });
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
