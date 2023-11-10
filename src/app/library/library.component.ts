import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  private selectedBookSub: Subscription;
  alert: string;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.selectedBookSub = this.bookshelfService.bookSelected.subscribe(
      book => {
        this.alert = `Successfully added book: ${book.title} by ${book.author} to personal bookshelf!`;
      }
    );
    }
    ngOnDestroy(): void {
      this.selectedBookSub.unsubscribe();
  }
}
