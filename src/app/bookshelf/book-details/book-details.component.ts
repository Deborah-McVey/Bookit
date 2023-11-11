import { Component, Input } from '@angular/core';
import { Book } from 'src/app/shared/book/book.component';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book: Book;
  idx: number;

constructor(
  private bookshelfService: BookshelfService,
  private router: Router,
  private route: ActivatedRoute
) {}

ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
  this.idx = +params['id'];
  this.book = this.bookshelfService.getBook(this.idx);
  });

onEditBook() {
  this.router.navigate(['../', this.idx, 'edit'],
  { relativeTo: this.route });
};

function onEditBook() {
  throw new Error('Function not implemented.');
};

}
}
