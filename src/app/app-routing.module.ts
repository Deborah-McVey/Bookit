/* import { LibraryPageComponent } from "./library-page/library-page.component"; */
import { BookshelfComponent } from "./bookshelf/bookshelf.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookshelfHomeComponent } from "./bookshelf/bookshelf-home/bookshelf-home.component";
import { BookDetailsComponent } from "./bookshelf/book-details/book-details.component";
import { LibraryComponent } from "./library/library.component";
import { AuthGuard } from "./shared/auth/auth-guard/auth.guard";
/* import { SingleBookDetailsComponent } from "./bookshelf-page/single-book.component";
import { SingleBookFormComponent } from "./bookshelf-page/single-book-form.component"; */

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent }
  { path: "", redirectTo: "/bookshelf", pathMatch: "full" },
  {
    path: "bookshelf",
    component: BookshelfComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: BookshelfHomeComponent },
      { path: ':id', component: BookDetailsComponent }
    ],
  },
  { path: "library", component: LibraryComponent, canActivate: [AuthGuard] },
  {
    path: ':id',
    component: BookDetailsComponent,
    resolve: [BookResolverService],
},
{
    path: ':id/edit',
    component: BookshelfEditorComponent,
    resolve: [BookResolverService],
},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
