import { Component } from '@angular/core';

@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css']
})
export class BookFormTemplateComponent {
  formHasBeenSubmitted = false;
  bookDetails = {
    title: "",
    author: "",
    genre: ""
  };

  onFormSubmit(formObj: NgForm) {
    // console.log('Submitted!', formObj);

    // Update boolean variable to true
    this.formHasBeenSubmitted = true;

    // Set Local "bookDetails" object to the values on the form inputs
    this.bookDetails.title = formObj.value.title;
    this.bookDetails.author = formObj.value.author;
    this.bookDetails.genre = formObj.value.genre;

    // Reset the form
    formObj.reset();
  }
  }
