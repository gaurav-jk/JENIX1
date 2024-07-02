import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { AnimationController } from '@ionic/angular';

interface Template {
  id: string;
  background: string;
  title: string; 
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  standalone: true,
  imports:[CommonModule], 
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoriesComponent implements AfterViewInit {
  @ViewChildren('templateList', { read: ElementRef })
  templateListRef?: QueryList<ElementRef>;

  @Input() templates: Template[] = [];

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.initListAnimation();
    }, 500);
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
