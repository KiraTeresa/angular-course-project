import {Component} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  recipes: Recipe[] = [new Recipe('Spring Roll', 'Delicious and light', 'https://www.connoisseurusveg.com/wp-content/uploads/2021/07/vegan-summer-rolls-sq-1-of-1.jpg'), new Recipe('Wrap', 'Super yummie', 'https://pinchofyum.com/wp-content/uploads/Vegan-Crunchwrap-Feature.jpg')]
}
