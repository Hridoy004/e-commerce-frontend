import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RegexValidators } from "../../../app-e-eommerce-constants/e-commerce-constants";

@Component({
  selector: 'app-admin-categories-form',
  templateUrl: './admin-categories-form.component.html',
  styleUrls: ['./admin-categories-form.component.scss']
})
export class AdminCategoriesFormComponent implements OnInit {


  editmode = false;

  userForm = new FormGroup({
    UserId: new FormControl('', [Validators.required]),
    FirstName: new FormControl('', [
      Validators.required,
      Validators.pattern(RegexValidators.ENGLISH_CHARACTER)
    ]),
    LastName: new FormControl('', [
      Validators.required,
      Validators.pattern(RegexValidators.ENGLISH_CHARACTER)
    ]),

  })


  hasError(controlName: string, type: string) {
    const formControl = this.userForm.get(controlName);
    return formControl && formControl.hasError(type) && formControl.touched;
  }

  enabledErrorIf(controlName: string, types: string[]) {
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      const formControl = this.userForm.get(controlName);
      if (formControl && formControl.hasError(type) && formControl.touched)
        return true;
    }
    return false;
  }


  onFormSubmit() {
    // handle form submission
  }



  constructor() { }

  ngOnInit(): void {

  }

}
