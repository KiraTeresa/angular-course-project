import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Recipe} from "../models/recipe.model";
import {RecipeService} from "./recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  recipes: Recipe[]

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  saveRecipes() {
    const recipes = this.recipeService.getRecipes()
    this.http.put('https://ng-course-recipe-book-46da4-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe(responseData => console.log('Saved ', responseData))
  }
}
