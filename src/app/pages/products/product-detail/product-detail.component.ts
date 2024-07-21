import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service'; // Adjust as per your project structure

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
  imports:[CommonModule], 
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductDetailComponent  implements OnInit {

  constructor() {}

  ngOnInit(){}
}
