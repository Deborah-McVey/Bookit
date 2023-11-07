import { Component, EventEmitter, Output } from '@angular/core';
import { HTTPService } from '../http.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  /* @Output() currentPage = new EventEmitter<string>(); */
  collapsed: boolean = true;
  show: boolean = false;
  isAuthenticated = false;

  constructor(private: httpService: HTTPService, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
  }

  onSaveData() {
    this.httpService.saveBooksToFirebase();
  }

  onFetchData() {
    this.httpService.fetchBooksFromFirebase().subscribe();
  }

  /* onSelectPage(page: string) {
    this.currentPage.emit(page);
  } */
}
