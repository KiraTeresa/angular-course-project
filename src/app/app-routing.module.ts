import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./components/recipes/recipes.component";
import {RecipeDetailComponent} from "./components/recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./components/recipes/recipe-edit/recipe-edit.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";
import {ShoppingListEditComponent} from "./components/shopping-list/edit/shopping-list-edit.component";
import {RecipeAddComponent} from "./components/recipes/recipe-add/recipe-add.component";
import {RecipeStartComponent} from "./components/recipes/recipe-start/recipe-start.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'add', component: RecipeAddComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  {
    path: 'shopping-list', component: ShoppingListComponent, children: [
      {path: 'edit', component: ShoppingListEditComponent}
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
