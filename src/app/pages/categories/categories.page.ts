import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: any[] = [];

  constructor(private apiService: ApiService, private navCtrl: NavController) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.apiService.getCategories().subscribe(
      (data: any[]) => {
        this.categories = data; // Assuming data is an array of categories
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onCategorySelect(category: any) {
    this.navCtrl.navigateForward(`/categories/${category.id}/products`);
  }
}
