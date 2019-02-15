import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product/product.component';
import { HttpClient } from '@angular/common/http';

export interface Store {
  items: Array<Product>;
  cart: Array<Product>;
}

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private items: Product[];
  private cart: Product[];
  private _store: BehaviorSubject<Store>;
  constructor(private http: HttpClient) {
    this.cart = [];
    this.items = [];
    this._store = new BehaviorSubject<Store>({ items: [], cart: [] });
  }

  addItem(product: Product) {
    this.cart = this.cart.concat(product);
    this._store.next({ cart: this.cart, items: this.items });
  }

  removeItem(product: Product) {
    const updatedItems = this.cart.filter((item) => item.id !== product.id);
    this._store.next({ cart: updatedItems, items: this.items });
  }

  public get store() {
    return this._store.asObservable();
  }

  getItems() {
    this.http
      .get('http://localhost:4000/fruits')
      .subscribe((items: Product[]) => {
        this.items = [...items];
        this._store.next({ items: this.items, cart: this.cart });
      });
  }
}
