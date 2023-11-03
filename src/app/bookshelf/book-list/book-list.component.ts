import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Book } from 'src/app/shared/book/book.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent {
  @Output() currentSelectedBook = new Subject<Book>();

  /*   handleBookSelected(book: Book) {
    this.currentSelectedBook.emit(book);
  } */
}

private myBooks: Book[] = [];

export class BookListComponent implements OnInit {
  @Input() book: Book;
  myBooks: Book[] = [];

  constructor(
    private bookshelfService: BookshelfService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    // Use the Service to set local "myBooks" array to Service/Global "myBooks" array
    this.myBooks = this.bookshelfService.getBooks();
    // Listen for changes on the global "myBooks" array and update the local version
    this.bookshelfService.bookListChanged.subscribe((books: Book[]) => {
      this.myBooks = books;
      this.bookListSub = this.bookshelfService.bookListChanged.subscribe(
        (books: Book[]) => {
          this.myBooks = books;
        }
    });
  }

ngOnDestroy(): void {
    this.bookListSub.unsubscribe();
  }

  onRemoveBook(idx) {
    this.bookshelfService.removeBook(idx);
  }

  onNewBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
