import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup
  isLoginMode = true
  isLoading = false

  constructor(private authService: AuthService) {
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

    if (this.isLoginMode) {
      //   Login
    } else {
      this.authService.signup(email, password).subscribe(
        resData => {
          console.log(resData)
          this.isLoading = false
        },
        error => {
          console.log("ERROR: ", error)
          this.isLoading = false
        })
    }
    this.loginForm.reset()
  }
}
