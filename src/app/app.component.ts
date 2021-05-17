import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  userDetails: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    const data = this.userDetails.value;
    window.alert(`Your name is ${data.firstName + " " + data.lastName} and your age is ${data.age}`);
  }

  isValidInput(fieldName): boolean {
    return this.userDetails.controls[fieldName].invalid &&
      (this.userDetails.controls[fieldName].dirty || this.userDetails.controls[fieldName].touched);
}

  private initForm() {
    this.userDetails = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required)
    });
  }
}
