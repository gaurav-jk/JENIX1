import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categoryName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryName = this.route.snapshot.paramMap.get('name');
  }

}
