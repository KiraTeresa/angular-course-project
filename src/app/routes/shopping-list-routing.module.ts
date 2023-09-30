import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "../components/shopping-list/shopping-list.component";
import {ShoppingListEditComponent} from "../components/shopping-list/edit/shopping-list-edit.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '', component: ShoppingListComponent, children: [
      {path: 'edit', component: ShoppingListEditComponent}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {}
