import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
        {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('../categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'bulk',
    loadChildren: () => import('../bulk/bulk.module').then( m => m.BulkPageModule)
  },
  {
    path: 'my',
    loadChildren: () => import('../my/my.module').then( m => m.MyPageModule)
  },
  {
    path: 'knowledge',
    loadChildren: () => import('../knowledge/knowledge.module').then( m => m.KnowledgePageModule)
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
