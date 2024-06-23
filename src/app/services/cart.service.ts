import { Injectable } from '@angular/core';

export interface CartItem {
  name: string;
  company: string;
  discount: number;
  img: { url: string; alt: string }[];
  details: string;
  mrp: number;
  price: number;
  rating: number;
}
@Injectable({
  providedIn: 'root',
})

export class CartService {
  private cartItems: CartItem[] = [];
  // private cart: any[] = [];

  constructor() {}
  
  addToCart(product: CartItem) {
    console.log('Adding product to cart:', product);
    this.cartItems.push(product);
    console.log('Current cart items:', this.cartItems);
  }
  
  getCartItems(): CartItem[] {
    console.log('Getting cart items:', this.cartItems);
    return this.cartItems;
  }
}

//   getCart() {
//     return this.cart;
//   }

//   addProductToCart(product: any) {
//     this.cart.push(product);
//     console.log('Cart:', this.cart);
//   }

//   removeProductFromCart(product: any) {
//     const index = this.cart.indexOf(product);
//     if (index > -1) {
//       this.cart.splice(index, 1);
//     }
//     console.log('Cart:', this.cart);
//   }

//   clearCart() {
//     this.cart = [];
//     console.log('Cart cleared');
//   }
// }
