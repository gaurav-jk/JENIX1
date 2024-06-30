import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  CartService } from '../../services/cart.service'; // Adjust the path as necessary
import { AlertController } from '@ionic/angular';
import { max } from 'rxjs';
import { Categories, Product, singleproduct } from './products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: Categories={};
  displayedProducts: Product[]|any[] = []; 
 "Surveillance":singleproduct=[];
 "Access_Control_Lock": singleproduct=[];
  "INTERCOM_PABX": singleproduct=[];  
  "Smart_Home_Automation": singleproduct=[];
  "WIFI_CAMERA_STAND_ALONE_SYSTEM": singleproduct=[];
  "GPS_TRACKER": singleproduct=[];
  "ROUTER": singleproduct=[];
  "NETWORKING_AND_PERIPHERAL": singleproduct=[];
   "Security_Alarm_System": singleproduct=[];
   "Cable_Convertor_Connector": singleproduct=[];
   "Signal_Booster": singleproduct=[];
   "TOOLS_AND_CLIP_PIN_TAPE": singleproduct=[];
   "ROBOTICS": singleproduct=[];
    "Spy_Micro_Hidden_Camera": singleproduct=[];
    "Public_Parking_Management": singleproduct=[];
    "Mixed": singleproduct=[];
  // displayedProducts: any[] = [];
  currentPage: number = 1;
  pageSize: number = 100;
  totalProducts: number = 0;
  

  constructor(private http: HttpClient, private cartService: CartService,private alertController: AlertController) { }

  async addToCart(product: Product) {
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
        console.log(result);
        this.products = result.products?.[0]?.categories;
        this.totalProducts = result.total;
        // this.updateDisplayedProducts();
        console.log(this.products);
        this.Surveillance=this.products?.Surveillance;
        this.Access_Control_Lock=this.products?.['Access Control (Lock)'];
        this.INTERCOM_PABX=this.products?.['INTERCOM PABX'];
        this.Smart_Home_Automation=this.products?.['Smart Home Automation'];
        this.WIFI_CAMERA_STAND_ALONE_SYSTEM=this.products?.['WIFI CAMERA - STAND ALONE SYSTEM'];
        this.GPS_TRACKER=this.products?.['GPS TRACKER'];
        this.ROUTER=this.products?.['4G ROUTER'];
        this.NETWORKING_AND_PERIPHERAL=this.products?.['NETWORKING AND PERIPHERAL'];
        this.Security_Alarm_System=this.products?.['Security Alarm System'];
        this.Cable_Convertor_Connector=this.products?.['Cable Convertor Connector'];
        this.Signal_Booster=this.products?.['Signal Booster'];
        this.TOOLS_AND_CLIP_PIN_TAPE=this.products?.['TOOLS AND CLIP PIN TAPE'];
        this.ROBOTICS=this.products?.ROBOTICS;
        this.Spy_Micro_Hidden_Camera=this.products?.['Spy Micro Hidden Camera'];
        this.Public_Parking_Management=this.products?.['Public Parking Management'];
        this.Mixed=this.products?.Mixed;
      }, error => {
        console.log(error);
      });
  }

  // updateDisplayedProducts() {
  //   this.displayedProducts = this.products;
  // }

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
