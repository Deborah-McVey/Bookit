import { Component, ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { AlertComponent } from '../shared/alert/alert.component';
import { BookshelfService } from './bookshelf.service';
import { Subscription } from 'rxjs';
import { PlaceholderDirective } from '../shared/directives/placeholder.directive';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})

export class BookshelfComponent implements OnInit, OnDestroy {
  @ViewChild(PlaceholderDirective) alertHost: any;
  private bookSelectedSub: Subscription;
  selectedBookSub: any;
  modalCloseSub: any;

constructor(private bookshelfService: BookshelfService, private cmpFacResolver: ComponentFactoryResolver ) {}

  ngOnInit(): void {
   this.bookshelfService.bookSelected.subscribe( book => {
      const alertMsg = `Successfully removed ${book.title} from your personal library.`;
      this.removeBookAlert(alertMsg);
    }
    );
  }

  ngOnDestroy(): void {
      this.selectedBookSub.unsubscribe();
  }

  removeBookAlert(msg: string) {

    const alertCmpFactory = this.cmpFacResolver.resolveComponentFactory(AlertComponent);

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.alertMsg = msg;

    const clearAlert = () => {
      this.modalCloseSub.unsubscribe();
      hostViewContainerRef.clear();
    };

    this.modalCloseSub = componentRef.instance.closeModal.subscribe(() => {
      clearAlert();
    });

    setTimeout(() => {
      if (this.modalCloseSub) clearAlert();
    }, 3000);
  }
}
