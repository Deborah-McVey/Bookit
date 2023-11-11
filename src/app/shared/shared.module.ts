import { CommonModule } from "@angular/common";
import { AlertComponent } from "./alert/alert.component";
import { BookComponent } from "./book/book.component";
import { DropdownDirective } from "./directives/dropdown.directive";
import { PlaceholderDirective } from "./directives/placeholder.directive";
import { NotificationComponent } from "./notification/notification.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    AlertComponent,
    NotificationComponent,
    PlaceholderDirective,
    DropdownDirective,
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
    NotificationComponent,
    CommonModule, BookComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
