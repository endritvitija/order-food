import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() image?: string;
  @Input() promotion?: string;
  @Input() title?: string;
  @Input() size?: string;
  @Input() price?: string;
  @Input() color?: string;

  constructor() {}

  ngOnInit(): void {}
}
