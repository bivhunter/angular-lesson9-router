import { Injectable } from '@angular/core';
import { Currency } from "../models/Currency";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currency: Currency[] = [
    {
      name: 'USD',
      isActive: true,
      coefficient: 1
    },
    {
      name: 'EUR',
      isActive: false,
      coefficient: 0.9
    },
    {
      name: 'UAH',
      isActive: false,
      coefficient: 26
    }
  ];

  private currencySource = new BehaviorSubject<Currency[]>(this.currency);
  selectedCurrency = this.currencySource.asObservable();
  constructor() { }

  selectCurrency(name: String) {
    this.currency = this.currency.map( (currency: Currency) => {
      if(currency.name === name) {
        currency.isActive = true;
      } else {
        currency.isActive = false;
      }
      return currency;
    });
    this.currencySource.next(this.currency);
  }
}
