import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent implements OnInit {

  constructor() { }

  quantity: number = 0;

  ngOnInit(): void {
  }

  addProduct() {
    this.quantity ++;
  }

  removeProduct() {
    if (this.quantity > 0) {
      this.quantity --;
    }
  }

}
