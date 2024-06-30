import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MyPageRoutingModule } from './my-routing.module';
import { MyPage } from './my.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // Add the ReactiveFormsModule for reactive forms
    MyPageRoutingModule
  ],
  declarations: [MyPage]
})
export class MyPageModule {}
