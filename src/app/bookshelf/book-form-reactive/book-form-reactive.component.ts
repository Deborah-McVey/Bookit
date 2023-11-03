import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css']
})

export class BookFormReactiveComponent {
  reactiveForm: FormGroup;
  formHasBeenSubmitted = false;

  onFormSubmit() {
    // console.log('Submitted!', this.reactiveForm);

    // Change boolean form submitted variable to true
    this.formHasBeenSubmitted = true;

    // Reset Form after 5 seconds
    setTimeout(() => {
      this.reactiveForm.reset();
      this.formHasBeenSubmitted = false;
    }, 5000);
  }
}

