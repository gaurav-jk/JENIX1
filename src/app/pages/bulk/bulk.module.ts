import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulkPageRoutingModule } from './bulk-routing.module';

import { BulkPage } from './bulk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulkPageRoutingModule
  ],
  declarations: [BulkPage]
})
export class BulkPageModule {}
