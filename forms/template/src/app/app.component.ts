import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({ userData: { username: suggestedName} });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.signupForm);
  }
}
