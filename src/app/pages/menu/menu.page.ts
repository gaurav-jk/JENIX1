import { Component, HostListener, OnInit, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MenuController, Platform, createAnimation } from '@ionic/angular';
import { Animation, MenuI, menuController } from '@ionic/core';

const revealAnimation = (menu: MenuI, anim: Animation[]): Animation => {
  if (!menu.contentEl) {
    throw new Error('Menu content element is not available.');
  }

  const openedX = (menu.width * (menu.isEndSide ? -1 : 1)) + 'px';
  const contentOpen = createAnimation()
    .addElement(menu.contentEl)
    .fromTo('transform', 'translateX(0px)', `translateX(${openedX})`);

  return createAnimation()
    .duration(400)
    .addAnimation(contentOpen)
    .addAnimation(anim);
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  @ViewChild('userAvatar', { read: ElementRef })
  userAvatarRef?: ElementRef;
  @ViewChildren('drawerItemList', { read: ElementRef })
  drawerItemListRef?: QueryList<ElementRef>;

  menuItems = [
    { title: 'Home', icon: 'home', path: '/' },
    { title: 'Categories', icon: 'copy-outline', path: '/categories' },
    { title: 'Products', icon: 'pricetag-outline', path: '/products' },
    { title: 'Cart', icon: 'cart-outline', path: '/cart' },
    { title: 'About Us', icon: 'people-outline', path: '/about' },
    { title: 'Bulk Purchase', icon: 'cash-outline', path: '/bulk' },
    { title: 'My Account', icon: 'key-outline', path: '/my' },
    { title: 'Knowledge Base', icon: 'information-circle-outline', path: '/knowledge' }
  ];

  drawerWidth: number = 280;
  rowWidth: number = this.drawerWidth - 64;
  title = ''; 

  constructor(private menuCtrl: MenuController, private plt: Platform) { }

  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
    this.initDrawerAnimation();
  }

  initDrawerAnimation() {
    const avatarAnim = createAnimation()
      .addElement(this.userAvatarRef?.nativeElement)
      .fromTo('transform', 'rotate(36deg) scale(0.8)', 'rotate(0deg) scale(1)');

    const drawerItems: Animation[] = [];
    const itemRefArray = this.drawerItemListRef?.toArray();
    
    if (itemRefArray) {
      for (const itemRef of itemRefArray) {
        const element = itemRef.nativeElement;

        const drawerItemAnim = createAnimation()
          .addElement(element.querySelector('.drawerInnerItem'))
          .fromTo('transform', `translateX(-${this.rowWidth}px)`, 'translateX(0px)');

        drawerItems.push(drawerItemAnim);
      }
    }

    menuController.registerAnimation('my-reveal', (menu: MenuI) => 
      revealAnimation(menu, [avatarAnim, ...drawerItems])
    );
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: Event) {
    const newWidth = (event.target as Window).innerWidth;
    this.toggleMenu(newWidth);
  }

  toggleMenu(width: number) {
    if (width > 768) {
      this.menuCtrl.enable(false, 'main-menu');
    } else {
      this.menuCtrl.enable(true, 'main-menu');
    }
  }

  setTitle(title: string) {
    this.title = title;
  }
}
