import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthResponseData, AuthService} from "../../services/auth.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AlertComponent} from "../alert/alert.component";
import {PlaceholderDirective} from "../../directives/placeholder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit, OnDestroy {
  loginForm: FormGroup
  isLoginMode = true
  isLoading = false
  error: string = null

  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective

  private closeSub: Subscription

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit() {
    if (!this.loginForm) return
    this.isLoading = true

    const email = this.loginForm.value.email
    const password = this.loginForm.value.password

    let authObs: Observable<AuthResponseData>

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password)
    } else {
      authObs = this.authService.signup(email, password)
    }

    authObs.subscribe({
        next: resData => {
          console.log(resData)
          this.isLoading = false
          this.router.navigate(['/recipes'])
        },
        error: errorMessage => {
          console.log(errorMessage)
          this.error = errorMessage
          this.isLoading = false
          this.showErrorAlert(errorMessage)
        }
      }
    )
    this.loginForm.reset()
  }

  onHandleError() {
    this.error = null
  }

  private showErrorAlert(errorMessage: string) {
    const alertCompFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)

    const hostViewContainerRef = this.alertHost.viewContainerRef
    hostViewContainerRef.clear()

    const componentRef = hostViewContainerRef.createComponent(alertCompFactory)

    componentRef.instance.message = errorMessage
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe()
      hostViewContainerRef.clear()
    } )
  }

  ngOnDestroy() {
    if (this.closeSub){
      this.closeSub.unsubscribe()
    }
  }
}
