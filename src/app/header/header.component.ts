import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.component';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private shopService: ShopService) {
    this.shopService.store.subscribe(({ cart }) => {
      this.cart = cart;
    });
  }

  cart: Product[] = [];

  ngOnInit() {}
}
