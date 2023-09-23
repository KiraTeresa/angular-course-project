import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";
import {RecipeService} from "../../../services/recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit{
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router) {
  }

  ngOnInit() {
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes
    })
    this.recipes = this.recipeService.getRecipes()
  }

  onNewRecipe(){
    this.router.navigate(['/recipes/add'])
  }
}
