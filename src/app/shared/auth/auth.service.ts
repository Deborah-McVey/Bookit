import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { pipe, tap } from "rxjs";
import { environment } from 'src/environments/environment';

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


export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpitationDate: string;
}

@Injectable({
  providedIn: "root"
})

export class AuthService {

  private tokenExpTimer: any;

  userToken: string = null;

  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(SIGN_UP_URL + environment.firebaseAPIKey, {
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
        SIGN_IN_URL + environment.firebaseAPIKey,
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

    localStorage.removeItem("userData");

    if (this.tokenExpTimer) clearTimeout(this.tokenExpTimer);

    this.router.navigate(['auth']);
  }

  automaticSignIn() {
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));

    if (!userData) return;
    const loaderUser = new User(
      email,
      id,
      _token,
      new Date(_tokenExpirationDate)
    );

    automaticSignOut(expDuration: number) {
      console.log("Expiration Duration:", expDuration);

      this.tokenExpTimer = setTimeout(() => {
        this.signOut();
      }, expDuration);
    }

    if (loadedUser.token) {
      this.currentUser.next(loaderUser);

    }
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

  this.automaticSignOut(expiresIn * 1000);
}
}


