import { Injectable } from '@angular/core';
import { of } from "rxjs/internal/observable/of";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Book } from "../models/Book";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Observable} from "rxjs/internal/Observable";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksCollection: AngularFirestoreCollection<Book>;
  bookDoc: AngularFirestoreDocument<Book>;
  books: Observable<Book[]>;
  book: Observable<Book>;

  deleteBookSource = new BehaviorSubject<string>('');
  deletedBook = this.deleteBookSource.asObservable();

  constructor(
    private afs: AngularFirestore
  ) {
    this.booksCollection = this.afs.collection<Book>('books');
  }

  getBooks() {
    this.books = this.booksCollection.snapshotChanges().pipe(
      map(collection => {
        console.log("colecction",collection);
      return collection.map(document => {
        const data = document.payload.doc.data() as Book;
        data.id = document.payload.doc.id;
        return data;
        });
      })
    );
    return this.books;
  }

  getBookById(id: string) {

    return this.book;
  }

  addBook(book: Book) {
    return of(book);
  }

  editBook(book: Book) {

   return of(book);
  }

  deleteBook(id: string) {

  }
}
