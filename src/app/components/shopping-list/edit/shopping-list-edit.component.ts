import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../../models/ingredient.model";
import {ShoppingListService} from "../../../services/shopping-list.service";

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent {
  @ViewChild('ingredientName', {static: true}) newIngredientName: ElementRef;
  @ViewChild('ingredientAmount', {static: true}) newIngredientAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  onSubmit() {
    const ingName = this.newIngredientName.nativeElement.value
    const ingAmount = this.newIngredientAmount.nativeElement.value
    const newIng = new Ingredient(ingName, ingAmount)
    this.shoppingListService.addIngredient(newIng)
  }
}
