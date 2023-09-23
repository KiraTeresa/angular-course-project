import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";
import {ShoppingListService} from "../../../services/shopping-list.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../../../services/recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  index: number

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['index']
        this.recipe = this.recipeService.getRecipeByIndex(params.index)
      })
  }

  addToShoppingList() {
    // for (let ingredient of this.recipe.ingredients){
    //   this.shoppingListService.addIngredient(ingredient)
    // }

    // better go with the following approach, to only emit the event once and not
    // for every ingredient, like it happens when doing the for-loop
    this.shoppingListService.addIngredients(this.recipe.ingredients)
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.index)
    this.router.navigate(['/recipes'])
  }
}
