import { Injectable } from '@angular/core';
import { of } from "rxjs/internal/observable/of";

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

  constructor() { }

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

  }
}
