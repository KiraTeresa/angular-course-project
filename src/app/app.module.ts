import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './components/shopping-list/edit/shopping-list-edit.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownDirective} from './directives/dropdown.directive';
import {ShoppingListService} from "./services/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeService} from "./services/recipe.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./components/auth/auth.component";
import {LoadingSpinnerComponent} from "./components/loading-spinner/loading-spinner.component";
import {AuthInterceptorService} from "./services/auth-interceptor.service";
import {AlertComponent} from "./components/alert/alert.component";
import {PlaceholderDirective} from "./directives/placeholder.directive";
import {RecipesModule} from "./modules/recipes.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule
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
