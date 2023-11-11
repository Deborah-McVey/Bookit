import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookResolverService } from "./book-resolver.service";
import { BookshelfEditorComponent } from "./bookshelf-editor/bookshelf-editor.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { AuthGuard } from "../shared/auth/auth-guard/auth.guard";

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    BookResolverService
  ]
})
export class BookshelfRoutingModule {}

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      { path: "", component: BookshelfHomeComponent },
      { path: "new", component: BookshelfEditorComponent },
      {
        path: ":id",
        component: BookDetailsComponent,
        resolve: [BookResolverService]
      },
      {
        path: ":id/edit",
        component: BookshelfEditorComponent,
        resolve: [BookResolverService]
      }
    ]
  }
];
