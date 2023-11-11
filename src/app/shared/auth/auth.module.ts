import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared.module";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: "", component: AuthComponent }]),
  ]
})
export class AuthModule {}
