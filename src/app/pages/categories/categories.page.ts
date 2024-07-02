import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ApiService } from '../../api.service';
import { AnimationController, NavController, Platform, ToastController } from '@ionic/angular';

interface Template {
  id: string;
  background: string;
  title: string; 
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements AfterViewInit {
  @ViewChildren('templateList', { read: ElementRef })
  templateListRef?: QueryList<ElementRef>;

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
  

  constructor(
    public toastController: ToastController,
    private animationCtrl: AnimationController,
    private platform: Platform
  ) {}

  ngAfterViewInit() {
    setTimeout(() =>{
      this.initListAnimation();
    },500);
    // this.initListAnimation();
  }

  initListAnimation() {
    const itemRefArray = this.templateListRef?.toArray();
    for (let i = 0; i < itemRefArray!.length; i++) {
      const element = itemRefArray![i].nativeElement;

      this.animationCtrl
        .create()
        .addElement(element)
        .duration(1000)
        .delay(i * (1000 / 3))
        .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
        .fromTo('transform', 'translateY(50px)', 'translateY(0px)')
        .fromTo('opacity', '0', '1')
        .play();
    }
  }
}

  // categories: any[] = [];

  // constructor(private apiService: ApiService, private navCtrl: NavController) {}

  // ngOnInit() {
  //   this.loadCategories();
  // }

  // loadCategories() {
  //   this.apiService.getCategories().subscribe(
  //     (data: any[]) => {
  //       this.categories = data; // Assuming data is an array of categories
  //     },
  //     (error) => {
  //       console.error('Error fetching categories:', error);
  //     }
  //   );
  // }

  // onCategorySelect(category: any) {
  //   this.navCtrl.navigateForward(`/categories/${category.id}/products`);
  // }
