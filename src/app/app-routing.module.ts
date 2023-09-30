import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', loadChildren: () => import('./modules/recipes.module').then(c => c.RecipesModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
