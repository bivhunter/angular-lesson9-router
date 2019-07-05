import { Component, OnInit } from '@angular/core';
import { OnDestroy } from "@angular/core";
import { BooksService } from "../../services/books.service";
import { Book } from "../../models/Book";
import { FlashMessagesService } from "angular2-flash-messages";
import {SubscriptionLike } from "rxjs/internal/types";
import { ActivatedRoute, Router} from "@angular/router";
import {CurrencyService} from "../../services/currency.service";
import {Currency} from "../../models/Currency";
//import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
//import {observable} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {

  books: Book[];
  subscription: SubscriptionLike ;
  lastId: string;
  searchText: string;
  searchingResult: Book[] = [];
  currentCurrency: Currency

  constructor(
    public bookService: BooksService,
    private flashMessage: FlashMessagesService,
    public router: Router,
    public currenceService: CurrencyService

  ) { }

  ngOnInit() {

    this.currenceService.selectedCurrency.subscribe(data => {
      this.currentCurrency = Object.create(data.find(obj => {

         return obj.isActive;
      }));
    });


   this.getBooks();
     this.subscription = this.bookService.deletedBook.subscribe((id) => {
       if (id && id !== this.lastId) {
         this.getBooks();
         this.flashMessage.show("Delete Success!!!", {
           cssClass: 'alert-success',
           showCloseBtn: true,
           closeOnClick: true,
           timeout: 10000
         });
       }
     });
  }

  searchBook() {
    this.searchingResult = this.books.filter( book => {
      return book.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getBooks() {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  deleteBook(id: string) {
    //console.log(this.bookService.deletedBook._isScalar);
    this.bookService.deleteBook(id);
  }




}

