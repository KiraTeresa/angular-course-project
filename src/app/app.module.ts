import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RecipeListComponent} from './components/recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './components/recipes/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './components/recipes/recipe-detail/recipe-detail.component';
import {HeaderComponent} from './components/header/header.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './components/shopping-list/edit/shopping-list-edit.component';
import {RecipesComponent} from "./components/recipes/recipes.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownDirective} from './directives/dropdown.directive';
import {ShoppingListService} from "./services/shopping-list.service";
import {RecipeEditComponent} from "./components/recipes/recipe-edit/recipe-edit.component";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeStartComponent} from './components/recipes/recipe-start/recipe-start.component';
import {RecipeService} from "./services/recipe.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./components/auth/auth.component";
import {LoadingSpinnerComponent} from "./components/loading-spinner/loading-spinner.component";
import {AuthInterceptorService} from "./services/auth-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeStartComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
