import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs";

const AUTH_API_KEY = "AIzaSyBaVRnwBZHw-lyoShvgldz6CCZ8H0qUi-U"; // Use your api key!
const SIGN_UP_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const SIGN_IN_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

  export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
  }

@Injectable({
  providedIn: "root"
})

export class AuthService {

  userToken: string = null;

  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(SIGN_UP_URL + AUTH_API_KEY, {
      email,
      password,
      returnSecureToken: true
    })
    .pipe(
      tap(res => {
        const {email, localId, idToken, expiresIn} = res;
        this.handleAuth(email, localId, idToken, +expiresIn);
      })
    )
  }

  signIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(
        SIGN_IN_URL + AUTH_API_KEY,
        {
        email,
        password,
        returnSecureToken: true,
        })
        .pipe(
          tap(res => {
            const {email, localId, idToken, expiresIn} = res;
            this.handleAuth(email, localId, idToken, +expiresIn);
          })
        );

  signOut() {
    this.currentUser.next(null);
    this.router.navigate(['auth']);
  }

  }

handleAuth(email: string, userId: string, token: string, expiresIn: number) {
  // Create Expiration Date for Token
  const expDate = new Date(new Date().getTime() + expiresIn * 1000);

  // Create a new user based on the info passed in the form and emit that user
  const formUser = new User(email, userId, token, expDate);
  this.currentUser.next(formUser);

  // Save the new user in localStorage
  localStorage.setItem("userData", JSON.stringify(formUser));
}

}
