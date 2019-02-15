import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private shopService: ShopService) {
    this.shopService.store.subscribe(({items}) => {
      this.items = items;
    })
  }

  items: Product[] = [];

  ngOnInit() {
    this.shopService.getItems();
  }
}
