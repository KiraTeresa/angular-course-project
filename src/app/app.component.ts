import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  activePage: string = 'recipes'

  setCurrentPage(newPage: string) {
    this.activePage = newPage
  }
}
