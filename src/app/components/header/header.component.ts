import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() goTo = new EventEmitter<string>

  goToRecipes() {
    this.goTo.emit('recipes')
  }

  goToShoppingList() {
    this.goTo.emit('shopping-list')
  }
}
