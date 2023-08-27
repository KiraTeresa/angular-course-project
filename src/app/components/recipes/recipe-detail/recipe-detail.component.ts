import {Component, Input} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";
import {ShoppingListService} from "../../../services/shopping-list.service";

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent {
  @Input() recipe: Recipe

  constructor(private shoppingListService: ShoppingListService) {
  }
  addToShoppingList(){
    // for (let ingredient of this.recipe.ingredients){
    //   this.shoppingListService.addIngredient(ingredient)
    // }

    // better go with the following approach, to only emit the event once and not
    // for every ingredient, like it happens when doing the for-loop
    this.shoppingListService.addIngredients(this.recipe.ingredients)
  }
}
