import { NgModule, Directive, ViewContainerRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';
import { BookListComponent } from './bookshelf/book-list/book-list.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookResultsComponent } from './library/book-results/book-results.component';
import { BookSearchComponent } from './library/book-search/book-search.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { BookComponent } from './shared/book/book.component';
import { Book } from './shared/book/book.component';
import { DirectivesComponent } from './shared/directives/directives.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component'
import { AppRoutingModule } from './app-routing.module';
import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { BookFormTdComponent } from './bookshelf/book-form-td/book-form-td.component';
import { BookFormTemplateComponent } from './bookshelf/book-form-template/book-form-template.component';
import { BookFormReactiveComponent } from './bookshelf/book-form-reactive/book-form-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './shared/auth/auth.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { HttpComponent } from './shared/http/http.component';
import { AuthGuardComponent } from './shared/auth/auth-guard/auth-guard.component';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    LibraryComponent,
    BookListComponent,
    BookDetailsComponent,
    BookResultsComponent,
    BookSearchComponent,
    NavigationComponent,
    BookComponent,
    DirectivesComponent,
    BookshelfHomeComponent,
    AppRoutingModule,
    BookshelfEditorComponent,
    NotificationComponent,
    BookFormTdComponent,
    BookFormTemplateComponent,
    BookFormReactiveComponent,
    AuthComponent,
    HttpComponent,
    AuthGuardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
