import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../pages/products/products.module'; // Adjust the path as per your project structure

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  addToCart(product: Product) {
    const currentCart = this.cartSubject.getValue();
    this.cartSubject.next([...currentCart, product]);
  }

  removeFromCart(product: Product) {
    const currentCart = this.cartSubject.getValue();
    const updatedCart = currentCart.filter(item => item.id !== product.id);
    this.cartSubject.next(updatedCart);
  }

  clearCart() {
    this.cartSubject.next([]);
  }

  get cart(): Product[] {
    return this.cartSubject.getValue();
  }
}
