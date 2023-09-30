import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', loadChildren: () => import('./modules/recipes.module').then(c => c.RecipesModule)},
  {path: 'shopping-list', loadChildren: () => import('./modules/shopping-list.module').then(c => c.ShoppingListModule)},
  {path: 'auth', loadChildren: () => import('./modules/auth.module').then(c => c.AuthModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
