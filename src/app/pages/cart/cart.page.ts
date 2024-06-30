// cart.page.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'; // Adjust the path as needed
import { Product } from '../products/products.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: Product[] = [];
  // cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    console.log( this.cartService.getItems());
    
    this.cartItems = this.cartService.getItems();
    console.log(this.cartItems); 
    // Log to see if items are being fetched
  }
  // ngOnInit() {
  //   this.cartItems = this.cartService.getCartItems();
  //   console.log('Cart items on init:', this.cartItems); // Debug log
  // }
  // addToCart(product: CartItem) {
  //   console.log('Adding product to cart:', product);
  //   this.cartItems.push(product);
  //   console.log('Current cart items:', this.cartItems);
  // }
  
  // getCartItems(): CartItem[] {
  //   console.log('Getting cart items:', this.cartItems);
  //   return this.cartItems;
  // }
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
