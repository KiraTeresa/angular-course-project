import {Recipe} from "../models/recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../models/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      '1',
      'Spring Roll',
      'Delicious and light',
      'https://www.connoisseurusveg.com/wp-content/uploads/2021/07/vegan-summer-rolls-sq-1-of-1.jpg',
      [
        new Ingredient('carrot', 2),
        new Ingredient('mushrooms', 6)
      ]
    ),
    new Recipe(
      '2',
      'Wrap',
      'Super yummie',
      'https://pinchofyum.com/wp-content/uploads/Vegan-Crunchwrap-Feature.jpg',
      [
        new Ingredient('tomato', 3),
        new Ingredient('lettuce', 1)
      ]
    )
  ]

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: string): Recipe {
    return this.recipes.find(recipe => recipe.id === id)
  }
}
