import { Component, EventEmitter, Output } from '@angular/core';
import { HTTPService } from '../http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  /* @Output() currentPage = new EventEmitter<string>(); */
  collapsed: boolean = true;
  show: boolean = false;

  constructor(private: httpService: HTTPService) {}

  ngOnInit(): void {}

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
