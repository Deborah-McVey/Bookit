import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { BookshelfComponent } from "./bookshelf/bookshelf.component";
import { AuthComponent } from "./shared/auth/auth.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/bookshelf", pathMatch: "full" },

  { path: "auth", loadChildren: () =>
      import("./shared/auth/auth.module").then(m => m.AuthModule)
  },

  { path: "bookshelf",
    loadChildren: () =>
    import("./bookshelf/bookshelf.module").then(m => m.BookshelfModule)
  },

  { path: "library",
  loadChildren: () =>
  import("./library/library.module").then(m => m.LibraryModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation, "enabled"
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule {}
