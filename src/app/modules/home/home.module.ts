import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductItemComponent,
    ProductQuantityComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
