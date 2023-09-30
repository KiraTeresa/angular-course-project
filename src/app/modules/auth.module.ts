import {NgModule} from "@angular/core";
import {AuthComponent} from "../components/auth/auth.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared.module";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: AuthComponent}])]
})
export class AuthModule {
}
