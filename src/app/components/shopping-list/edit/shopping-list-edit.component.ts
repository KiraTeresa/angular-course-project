import {Component, ViewChild} from '@angular/core';
import {Ingredient} from "../../../models/ingredient.model";
import {ShoppingListService} from "../../../services/shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent {
  @ViewChild('shoppingListForm', {static: true}) form: NgForm;

  constructor(private shoppingListService: ShoppingListService) {
  }

  onSubmit() {
    const ingName: string = this.form.controls.name.value;
    const ingAmount: number = this.form.controls.amount.value;
    const newIng = new Ingredient(ingName, ingAmount)
    this.shoppingListService.addIngredient(newIng)
  }
}
