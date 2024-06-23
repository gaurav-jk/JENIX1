import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  // {
  //   path: 'services',
  //   loadChildren: () => import('./services/cart.service').then( m => m.ServicesPageModule)
  // },
  // {
  //   path: 'cart',
  //   loadChildren: () => import('./services/cart/cart.service').then( m => m.CartPageModule)
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./services/auth/auth.service').then( m => m.AuthPageModule)
  // },
  // {
  //   path: 'cart',
  //   loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  // },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'categories',
  //   loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  // },
  // {
  //   path: 'products',
  //   loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  // },
  // {
  //   path: 'bulk',
  //   loadChildren: () => import('./pages/bulk/bulk.module').then( m => m.BulkPageModule)
  // },
  // {
  //   path: 'my',
  //   loadChildren: () => import('./pages/my/my.module').then( m => m.MyPageModule)
  // },
  // {
  //   path: 'knowledge',
  //   loadChildren: () => import('./pages/knowledge/knowledge.module').then( m => m.KnowledgePageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
