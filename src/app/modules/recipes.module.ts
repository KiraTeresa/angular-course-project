import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {RecipesComponent} from "../components/recipes/recipes.component";
import {RecipeListComponent} from "../components/recipes/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "../components/recipes/recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "../components/recipes/recipe-item/recipe-item.component";
import {RecipeEditComponent} from "../components/recipes/recipe-edit/recipe-edit.component";
import {RecipeStartComponent} from "../components/recipes/recipe-start/recipe-start.component";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeStartComponent,
  ],
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeStartComponent,
  ]
})
export class RecipesModule {
}
