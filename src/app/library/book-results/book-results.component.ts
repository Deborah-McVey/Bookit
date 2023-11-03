import { Component } from '@angular/core';
import { LibraryService } from '../library.service';
import { Book } from 'src/app/shared/book/book.component';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})

export class BookResultsComponent implements OnInit {
  allBooks: Book[] = [];

  constructor(
    private bookshelfService: BookshelfService,
    private libraryService: LibraryService
  ) {}

  ngOnInit(): void {
    this.allBooks = this.libraryService.getBooks();
  }

  onSaveBook(book: Book) {
    return this.bookshelfService.saveBook(book);
  }
}
