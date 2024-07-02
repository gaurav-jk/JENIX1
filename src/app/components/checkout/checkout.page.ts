import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cart = [];
  subtotal = 0;
  taxes = 0;
  totalPayable = 0;
  taxRate = 0.18; // Example tax rate (18%)

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.loadCart();
  }
  loadCart() {
    this.cart = this.cartService.getCart();
    this.calculateTotals();
  }

  calculateTotals() {
    this.subtotal = this.cartService.getSubtotal();
    this.taxes = this.subtotal * this.taxRate;
    this.totalPayable = this.subtotal + this.taxes;
  }
}
