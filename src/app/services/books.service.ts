import { Injectable } from '@angular/core';
import { of } from "rxjs/internal/observable/of";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Book } from "../models/Book";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [
    {
      id: '71e9a7bc-fbe8-4384-842f-65a17aed5e0e',
      name: 'Выразительный JavaScript',
      author: 'Marijn Haverbeke',
      description: 'lorem lorem',
      links: [
        {
        type: 'egub',
        link: 'link'
      },
        {
          type: 'pdf',
          link: 'link'
        }
      ]
    }
  ];

  deleteBookSource = new BehaviorSubject<string>('');
  deletedBook = this.deleteBookSource.asObservable();

  constructor(


  ) { }

  getBooks() {
    //console.log(this.books, of(this.books));
    return of(this.books);
  }

  getBookById(id: string) {
    const book = this.books.find((book: Book) => {
      return book.id === id;
    });
    return of(book);
  }

  addBook(book: Book) {
    this.books.unshift(book);
    return of(book);
  }

  editBook(book: Book) {
    this.books = this.books.map(item => {
      if(item.id === book.id) {
        item = book;
      }
      return item;
    });
   return of(book);
  }

  deleteBook(id: string) {
    this.books = this.books.filter((item) => {
      return item.id !== id;
    });
    this.deleteBookSource.next(id);
    return of(this.books);
  }
}
