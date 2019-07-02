import { Component, OnInit } from '@angular/core';
import { Book } from "../../models/Book";
import { BooksService} from "../../services/books.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ActivatedRoute, Router } from "@angular/router";
import { IdService} from "../../services/id.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = {
    name: '',
    author: '',
    description: '',
    links: [
      {
        type: 'equb',
        link: ''
      },
      {
        type: 'pdf',
        link: ''
      }
    ]
  };

  constructor(
    public bookService: BooksService,
    public flashMessage: FlashMessagesService,
    public router: Router,
    public idService: IdService
  ) { }

  ngOnInit() {
  }

  addBook() {
    this.book.id = this.idService.generate();
    this.bookService.addBook(this.book).subscribe((book: Book) => {
      if(book) {
        this.flashMessage.show("Book Add Success!!!", {
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
