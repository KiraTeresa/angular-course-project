import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../../models/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = []
  private subscription: Subscription

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe((updatedIngredients: Ingredient[]) => {
      this.ingredients = updatedIngredients
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
