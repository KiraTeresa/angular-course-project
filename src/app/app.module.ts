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
import {FormsModule} from "@angular/forms";
import { DropdownDirective } from './directives/dropdown.directive';


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
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
