import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthResponseData, AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup
  isLoginMode = true
  isLoading = false
  error: string = null

  constructor(private authService: AuthService, private router: Router) {
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
        }
      }
    )
    this.loginForm.reset()
  }
}
