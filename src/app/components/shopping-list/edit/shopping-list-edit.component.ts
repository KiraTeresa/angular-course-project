import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../../models/ingredient.model";
import {ShoppingListService} from "../../../services/shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingListForm', {static: true}) form: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true
        this.editedItemIndex = index
        this.editedItem = this.shoppingListService.getIngredient(index)
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onClear() {
    this.form.reset()
    this.editMode = false
  }

  onSubmit() {
    const ingName: string = this.form.controls.name.value;
    const ingAmount: number = this.form.controls.amount.value;
    const newIng = new Ingredient(ingName, ingAmount)

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIng)
    } else {
      this.shoppingListService.addIngredient(newIng)
    }

    this.form.reset()
    this.editMode = false
  }
}
