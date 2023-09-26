import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./components/recipes/recipes.component";
import {RecipeDetailComponent} from "./components/recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./components/recipes/recipe-edit/recipe-edit.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";
import {ShoppingListEditComponent} from "./components/shopping-list/edit/shopping-list-edit.component";
import {RecipeStartComponent} from "./components/recipes/recipe-start/recipe-start.component";
import {RecipesResolverService} from "./services/recipes-resolver.service";
import {AuthComponent} from "./components/auth/auth.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent, resolve: [RecipesResolverService]},
      {path: 'add', component: RecipeEditComponent},
      {path: ':index', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
      {path: ':index/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
    ]
  },
  {
    path: 'shopping-list', component: ShoppingListComponent, children: [
      {path: 'edit', component: ShoppingListEditComponent}
    ]
  },
  {
    path: 'auth', component: AuthComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
