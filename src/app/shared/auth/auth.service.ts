
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const AUTH_API_KEY = "AIzaSyBaVRnwBZHw-lyoShvgldz6CCZ8H0qUi-U"; // Use your api key!
const SIGN_UP_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const SIGN_IN_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

@Injectable({
  providedIn: "root"
})

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post(SIGN_UP_URL + AUTH_API_KEY, {
      email,
      password,
      returnSecureToken: true
    });
  }
}
