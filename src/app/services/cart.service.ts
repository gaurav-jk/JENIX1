import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Array<any>>([]);
  cart$ = this.cart.asObservable();

  addToCart(product: any) {
    
    const currentCart = this.cart.value;
    currentCart.push(product);
    console.log(currentCart);
    
    this.cart.next(currentCart);
    console.log(this.cart);
  }

  getItems() {
    console.log(this.cart);
    
    return this.cart.value;
  }

  clearCart() {
    this.cart.next([]);
  }
}

// import { Injectable } from '@angular/core';
// import { Product } from '../pages/products/products.module';

// export interface CartItem {
//   name: string;
//   company: string;
//   discount: number;
//   img: { url: string; alt: string }[];
//   details: string;
//   mrp: number;
//   price: number;
//   rating: number;

// }
// @Injectable({
//   providedIn: 'root',
// })

// export class CartService {
//   private cartItems: Product[] = [];
//   // private cart: any[] = [];

//   constructor() {}
  
//   getItems() {
//     return this.cartItems;
//   }

//   addToCart(item: Product) {
//     console.log(item);
    
//     this.cartItems.push(item);
//     console.log(this.cartItems);
    
//   }

//   clearCart() {
//     this.cartItems = [];
//     return this.cartItems;
//   }
// }