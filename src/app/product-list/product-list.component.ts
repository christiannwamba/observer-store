import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor() {}

  @Input() fruits: Product[] = [];

  ngOnInit() {}
}
