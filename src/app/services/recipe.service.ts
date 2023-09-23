import {Recipe} from "../models/recipe.model";
import {Ingredient} from "../models/ingredient.model";
import {Subject} from "rxjs";

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe(
      'Spring Roll',
      'Delicious and light',
      'https://www.connoisseurusveg.com/wp-content/uploads/2021/07/vegan-summer-rolls-sq-1-of-1.jpg',
      [
        new Ingredient('carrot', 2),
        new Ingredient('mushrooms', 6)
      ]
    ),
    new Recipe(
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

  getRecipeByIndex(index: number): Recipe {
    return this.recipes[index]
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe
    this.recipesChanged.next(this.recipes.slice())
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice())
  }
}
