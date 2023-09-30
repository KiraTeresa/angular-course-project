import {NgModule} from "@angular/core";
import {AuthGuard} from "../guards/auth.guard";
import {RecipesResolverService} from "../services/recipes-resolver.service";
import {RecipesComponent} from "../components/recipes/recipes.component";
import {RecipeStartComponent} from "../components/recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "../components/recipes/recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "../components/recipes/recipe-detail/recipe-detail.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes =  [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: RecipeStartComponent, resolve: [RecipesResolverService]},
      {path: 'add', component: RecipeEditComponent},
      {path: ':index', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
      {path: ':index/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
