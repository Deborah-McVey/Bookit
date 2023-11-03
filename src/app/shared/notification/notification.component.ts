import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  private bookChangeSub: Subscription;

constructor(private bookshelfService: BookshelfService) {}
    ngOnInit(): void {
      this.bookChangeSub = this.bsService.bookSelected.subscribe(data=>{
        console.log(data);
        alert (`title: ${data.title}\n author: ${data.author}`)
      });
    }
    ngOnDestroy() {
      this.bookChangeSub.unsubscribe();
    }
  }
