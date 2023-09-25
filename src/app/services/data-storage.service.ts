import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs";
import {Recipe} from "../models/recipe.model";
import {RecipeService} from "./recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  saveRecipes() {
    const recipes = this.recipeService.getRecipes()
    this.http.put('https://ng-course-recipe-book-46da4-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe(responseData => console.log('Saved ', responseData))
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ng-course-recipe-book-46da4-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
      .pipe(map(recipes => {
          return recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
          })
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes)
        })
      )
  }
}
