import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

@Output() bookSelected = new EventEmitter<void>();

export class Book {
	constructor(public title: string, public author: string, public genre: string, public coverImagePath: string) {}
}

export class BookComponent implements OnInit {
  @Input() book: Book;

/*   constructor(private bookshelfService: BookshelfService) {} */

  ngOnInit(): void {}

  /* onBookSelected() {
    this.bookshelfService.bookSelected.next(this.book);
  } */
}
