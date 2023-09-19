import {Ingredient} from "../models/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('tomato', 2),
    new Ingredient('cucumber', 1)
  ]

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
