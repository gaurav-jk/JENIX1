import { Component, OnInit } from '@angular/core';
import { IonicModule, IonicSlides } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from '../categories/categories/categories.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
interface Template {
  id: string;
  background: string;
  title: string; 
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [BannerComponent,IonicModule,CategoriesComponent, ProductDetailComponent],

})
export class HomePage implements OnInit {
  // swiperModules = [IonicSlides];
  slides: any[] = [];

  
  templates: Template[] = [
    {
      id: '0',
      background: 'assets/icon/11.png', 
      title: 'Surveillance',
    },
    {
      id: '1',
      background: 'assets/icon/12.png',
      title: 'Access Control ( Lock )',
    },
    {
      id: '2',
      background: 'assets/icon/13.png',
      title: 'Intercom PABX',
    },
    {
      id: '3',
      background: 'assets/icon/14.jpg',
      title: 'Smart Home Automation',
    },
    {
      id: '4',
      background: 'assets/icon/15.png',
      title: 'WiFi Camera - Stand Alone System',
    },
    {
      id: '5',
      background: 'assets/icon/16.png',
      title: 'GPS Tracker',
    },
    {
      id: '6',
      background: 'assets/icon/17.png',
      title: '4G Router',
    },
    {
      id: '7',
      background: 'assets/icon/18.png',
      title: 'Networking and Peripheral',
    },
    {
      id: '8',
      background: 'assets/icon/19.png',
      title: 'Security Alarm System',
    },
    {
      id: '9',
      background: 'assets/icon/20.jpg',
      title: 'Cable Convertor Connector',
    },
    {
      id: '10',
      background: 'assets/icon/21.png',
      title: 'Signal Booster',
    },
    {
      id: '11',
      background: 'assets/icon/22.png',
      title: 'Tools and Clip Pin Tape',
    },
    {
      id: '12',
      background: 'assets/icon/23.png',
      title: 'Robotics',
    },
    {
      id: '13',
      background: 'assets/icon/24.png',
      title: 'Spy Micro Hidden Camera',
    },
    {
      id: '14',
      background: 'assets/icon/25.jpg',
      title: 'Public Parking Management',
    },
  ];
  


  constructor() { }

  ngOnInit(): void {
    this.slides= [
      {banner: 'assets/icon/1.png'},
      {banner: 'assets/icon/2.png'},
      {banner: 'assets/icon/3.png'},
      {banner: 'assets/icon/4.png'},
      {banner: 'assets/icon/5.png'},
      {banner: 'assets/icon/6.jpg'},
      {banner: 'assets/icon/7.jpg'},
      {banner: 'assets/icon/8.png'},
    ];
  }
}