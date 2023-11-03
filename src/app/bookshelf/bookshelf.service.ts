import { Injectable } from "@angular/core";
import { Book } from "../shared/book/book.component";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LibraryService {

private myBooks: Book[] = [];

getBook(idx: number) {
  return this.myBooks.slice()[idx]
}

bookSelected = new Subject<Book>();
bookListChanged = new Subject<Book[]>();

/* getBooks() {
  return this.myBooks.slice();
} */

saveBook(book: Book) {
  this.myBooks.push(book);
  this.bookListChanged.next(this.myBooks.slice())
}

removeBook(idx: number) {
  if (idx !== -1) {
      this.myBooks.splice(idx, 1);
      this.bookListChanged.next(this.myBooks.slice());
  }
}

setBooks(books: Book[] | []) {
  console.log('%c  books: ', 'color: red;', books);

  this.myBooks = books || [];
  this.bookListChanged.next(this.myBooks.slice());
}


fetchBooksFromFirebase() {
  return this.http.get(this.firebaseRootURL, {}).pipe(
      tap((books: Book[]) => {
      this.bookshelfService.setBooks(books);
      })
  );
}

}
