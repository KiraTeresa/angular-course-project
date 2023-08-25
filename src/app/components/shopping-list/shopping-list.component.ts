import {Component} from '@angular/core';
import {Ingredient} from "../../models/ingredient.model";

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('tomato', 2),
    new Ingredient('cucumber', 1)
  ]

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
  }
}
