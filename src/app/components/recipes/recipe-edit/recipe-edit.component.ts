import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup
  currentRecipeId: number
  editMode = false

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentRecipeId = parseInt(params.id)
      this.editMode = params.id != null
      this.initForm()
    })
  }

  private initForm() {
    let recipeName = ''
    let recipeDescription = ''
    let recipeImagePath = ''
    let recipeIngredients = new FormArray([])

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeByIndex(this.currentRecipeId)

      recipeName = recipe.name
      recipeDescription = recipe.description
      recipeImagePath = recipe.imagePath

      for (let ingredient of recipe.ingredients) {
        (recipeIngredients.push(new FormGroup({
          'name': new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        })))
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, [Validators.required, Validators.minLength(50)]),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  get controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onSubmit() {
    if (this.editMode){
      this.recipeService.updateRecipe(this.currentRecipeId, this.recipeForm.value)
    } else {
      this.recipeService.addRecipe(this.recipeForm.value)
    }
  }
}
