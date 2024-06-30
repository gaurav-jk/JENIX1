import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './product.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';

// Import your CartService if needed
// import { CartService } from './services/cart.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ApiService
    // CartService // Uncomment this if you need to add the service manually
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
