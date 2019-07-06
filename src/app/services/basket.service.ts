import { Injectable } from '@angular/core';
import { Book } from "../models/Book";
import { of } from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  purchaseList: Book[] = [];

  constructor() { }

  getBasketItem() {
    return of(this.purchaseList);
  }

  addItem(book: Book) {
    this.purchaseList.push(book);
    return of(book);
  }

  deleteItem(id) {

  }



}
