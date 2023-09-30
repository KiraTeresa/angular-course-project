import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "../components/shopping-list/shopping-list.component";
import {ShoppingListEditComponent} from "../components/shopping-list/edit/shopping-list-edit.component";
import {FormsModule} from "@angular/forms";
import {ShoppingListRoutingModule} from "../routes/shopping-list-routing.module";
import {SharedModule} from "./shared.module";
import {LoggingService} from "../services/logging.service";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [ FormsModule, ShoppingListRoutingModule, SharedModule],
  // providers: [LoggingService]
})
export class ShoppingListModule {
}
