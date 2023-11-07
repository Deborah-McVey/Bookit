import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { BookshelfService } from "./../../bookshelf/bookshelf.service";
import { AuthService } from "../auth/auth.service";
import { Book } from "../book/book.component";

@Injectable({
  providedIn: "root"
})
export class HTTPService {
  // *VARIABLES**
  firebaseRootURL =
    "https://bookit-personal-default-rtdb.firebaseio.com/books.json";

  // *INJECTIONS*
  constructor(
    private http: HttpClient,
    private bookshelfService: BookshelfService
  ) {}

  // *METHOD* - Save books to Firebase DB
  saveBooksToFirebase() {
    const books = this.bookshelfService.getBooks();

    this.http.put(this.firebaseRootURL, books).subscribe(res => {
      console.log("Firebase DB Response:", res);
    });

  // *METHOD* - Fetch books from Firebase DB
  // ! NOTE: WE WILL NOT NEED THIS CODE SHORTLY!!!
/* fetchBooksFromFirebase() {
  return this.authService.currentUser.pipe(
    take(1),
    exhaustMap((user) => {
      console.log(user);
      return this.http
        .get(this.firebaseRootURL, {
          params: new HttpParams().set('auth', user.token),
        })
        .pipe(
          tap((books: Book[]) => {
            this.bookshelfService.setBooks(books);
          })
        );
    })
  );
} */
fetchBooksFromFirebase() {
    return this.http.get<Book[]>(this.firebaseRootURL, {}).pipe(tap(books => {
        this.bookshelfService.setBooks(books);
      })
    );
}
  }
}
