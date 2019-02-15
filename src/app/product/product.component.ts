import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private shopService: ShopService) {}

  inCart = false;
  @Input() product: Product;

  addToCart(item: Product) {
    this.shopService.addItem(item);
    this.inCart = true;
  }

  removeFromCart(item: Product) {
    this.shopService.removeItem(item);
    this.inCart = false;
  }
  ngOnInit() {}
}
