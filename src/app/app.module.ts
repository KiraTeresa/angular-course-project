import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./components/auth/auth.component";
import {RecipesModule} from "./modules/recipes.module";
import {ShoppingListModule} from "./modules/shopping-list.module";
import {SharedModule} from "./modules/shared.module";
import {CoreModule} from "./modules/core.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
