// cart.page.ts
import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service'; // Adjust the path as needed

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    console.log('Cart items on init:', this.cartItems); // Debug log
  }
}



// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../../services/cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.page.html',
//   styleUrls: ['./cart.page.scss'],
// })


// export class CartPage implements OnInit {
//   cart = [];
//   subtotal = 0;
//   cartItems = []; 
//   constructor(private cartService: CartService) { }

//   ngOnInit() {
//     this.cartItems = this.cartService.getCartItems(); // Get cart items from CartService
//   }
//   // ngOnInit() {
//   //   // this.cart = this.cartService.getCart();
//   //   // this.calculateSubtotal();
//   // }
//   // addToCart(product) {
//   //   this.cartService.addToCart(product);
//   //   this.calculateSubtotal();
//   // }
//   // removeFromCart(product) {
//   //   this.cartService.removeFromCart(product);
//   //   this.calculateSubtotal();
//   // }

//   clearCart() {
//     this.cartService.clearCart();
//     this.cart = [];
//     this.subtotal = 0;
//   }
//   // calculateSubtotal() {
//   //   this.subtotal = this.cartService.getSubtotal();
//   // }
  
//   // checkout() {
//   //   // Add your checkout logic here
//   //   alert('Proceeding to checkout...');
//   // }
// }
