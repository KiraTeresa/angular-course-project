import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../../models/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Subscription} from "rxjs";
import {LoggingService} from "../../services/logging.service";

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = []
  private subscription: Subscription

  constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe((updatedIngredients: Ingredient[]) => {
      this.ingredients = updatedIngredients
    })
    this.loggingService.printLog('Hello from Shoppping-List-Component')
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
