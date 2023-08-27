import {Recipe} from "../models/recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Spring Roll',
      'Delicious and light',
      'https://www.connoisseurusveg.com/wp-content/uploads/2021/07/vegan-summer-rolls-sq-1-of-1.jpg'
    ),
    new Recipe(
      'Wrap',
      'Super yummie',
      'https://pinchofyum.com/wp-content/uploads/Vegan-Crunchwrap-Feature.jpg'
    )
  ]

  getRecipes() {
    return this.recipes.slice();
  }
}
