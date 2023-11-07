import { Component } from '@angular/core';

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

constructor(private authService: AuthService) {}

onAuthFormSubmit(formObj: NgForm) {
  console.log('Form Values:', formObj.value);
  /* formObj.reset(); */
  if (!formObj.valid) return;
  // Destructure the form input values
  const { email, password } = formObj.value

  // Conditional to see what mode we are in
      if (this.isLoginMode) {
        // Sign In Logic
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
}

}
