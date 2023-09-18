import { Component } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {
  public currentRecipeId: string
constructor(private route: ActivatedRoute) {
  this.route.params.subscribe((params: Params) => this.currentRecipeId = params.id)
}
}
