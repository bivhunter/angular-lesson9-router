import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { Book } from "../../models/Book";
import { BooksService } from "../../services/books.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookId: string;
  book: Book;

  constructor(
    public bookService: BooksService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.bookId = this.activatedRoute.snapshot.params['id'];
    this.bookService.getBookById(this.bookId).subscribe((book: Book) => {
      this.book = book;
    });
  }


  editBook() {
   const updateBook = Object.assign({}, this.book);
  this.bookService.editBook(updateBook).subscribe((book: Book) => {
    if(book) {
      this.flashMessage.show("Edit Success!!!", {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
      this.router.navigate(['/panel']);
    }
  });
  }

}
