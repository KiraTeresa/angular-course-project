import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {catchError, throwError} from "rxjs";

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError))
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, {
      email,
      password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError))
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!'
    console.log('---------')
    console.log(errorRes)

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errorMessage))
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'The email address is already in use by another account.'
        break
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project.'
        break
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.'
        break
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'The credentials are not correct.'
        break
    }
    return throwError(() => new Error(errorMessage))
  }
}
