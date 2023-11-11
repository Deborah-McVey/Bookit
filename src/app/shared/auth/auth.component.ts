import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  isLoginMode = true;

onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
}

constructor(private authService: AuthService, private router: Router) {}

onAuthFormSubmit(formObj: NgForm) {
 /*  console.log('Form Values:', formObj.value); */
  if (!formObj.valid) return;

  const { email, password } = formObj.value;

  if (this.isLoginMode) {
    // Sign In Logic
    this.authService.signIn(email, password).subscribe(
      res => {
        console.log("Auth Sign In Response:", res);
        if (this.errMsg) this.errMsg = null;
      },
      err => {
        console.error("Auth Res Error:", err);
        this.errMsg = err.message;
      }
    );

  } else {

       // Sign Up Logic
       this.authService.signUp(email, password).subscribe(
        (res) => {
          console.log('Auth Response Success:', res);
        },
        (err) => {
          console.error('Auth Res Error:', err);
        }
      );

      }

      // Observable logic with error handling
      this.authObsrv.subscribe(
        (res) => {
          console.log('Auth Res Success:', res);
          if (this.errMsg) this errMsg = null;

          this.router.navigate({'bookshelf'});
        },
        (err) => {
          console.error('Auth Res Error:', err);
          this.errMsg = err.message;
        }
      );

  // Reset the form
      formObj.reset();
  }

errMsg: string = null;
// . . .
this.authService.signUp(email, password).subscribe(
  res => {
    console.log("Auth Response Success:", res);
    if (this.errMsg) this.errMsg = null;
  },
  err => {
    console.error("Auth Res Error:", err);
    this.errMsg = err.message;
  }
);
