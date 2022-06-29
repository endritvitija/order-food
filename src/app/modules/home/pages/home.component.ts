import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/products.model';
import products from 'src/app/core/mocks/products.json';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  productsData: Observable<Product[]> = of(products);

  ngOnInit(): void {}

  // getProduct() {
  //   this._productsService.get().subscribe((response) => {
  //     console.log(response);
  //   });
  // }

  trackById(index: number, product: Product) {
    return product.id;
  }
}
