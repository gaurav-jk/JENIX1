import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-page',
  templateUrl: './my.page.html',
  styleUrls: ['./my.page.scss'],
})
export class MyPage {
  loginForm: FormGroup; // Declare loginForm as FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle form submission logic here
      console.log(this.loginForm.value);
    } else {
      // Handle invalid form
    }
  }
}
