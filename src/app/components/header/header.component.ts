import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from "../../services/data-storage.service";
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false
  private userSub: Subscription

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user
    })
  }

  onSave() {
    this.dataStorageService.saveRecipes()
  }

  onFetch() {
    this.dataStorageService.fetchRecipes().subscribe()
  }

  onLogout() {
    this.authService.logout()
  }

  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
