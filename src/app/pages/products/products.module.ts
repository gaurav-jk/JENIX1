import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';
import { ProductsPage } from './products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule
  ],
  declarations: [ProductsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsPageModule {}
// product.model.ts

export interface Product {
  id: number;
  name: string;
  company?: string |undefined;
  img: { url: string, alt: string }[];
  details: string;
  mrp: number;
  price: number;
  discount: number;
  rating: number;

}
export type Categories={
  "Surveillance"?:singleproduct;
  "Public Parking Management"?:singleproduct;
  "Mixed"?:singleproduct;
  "Spy Micro Hidden Camera"?:singleproduct;
  "ROBOTICS"?:singleproduct;
  "TOOLS AND CLIP PIN TAPE"?:singleproduct;
  "Signal Booster"?:singleproduct;
  "Cable Convertor Connector"?:singleproduct;
  "Security Alarm System"?:singleproduct;
  "NETWORKING AND PERIPHERAL"?:singleproduct;
  "GPS TRACKER"?:singleproduct;
  "4G ROUTER"?:singleproduct;
  "WIFI CAMERA - STAND ALONE SYSTEM"?:singleproduct;
  "Smart Home Automation"?:singleproduct;
  "INTERCOM PABX"?:singleproduct;
  "Access Control (Lock)"?:singleproduct;

};
export type singleproduct = Product[]|undefined|any[];

