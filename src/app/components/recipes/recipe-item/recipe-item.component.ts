import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() activeRecipe = new EventEmitter<void>();

  showDetailsOf() {
    this.activeRecipe.emit();
  }
}
