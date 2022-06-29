import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { CoreModule } from 'src/app/core/core.module';
import { StickyFooterModule } from 'src/app/shared/components/sticky-footer/sticky-footer.module';


@NgModule({
  declarations: [
    HomeComponent,
    ProductItemComponent,
    ProductQuantityComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    StickyFooterModule
  ]
})
export class HomeModule { }
