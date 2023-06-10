import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RegexValidators } from "../../../app-e-eommerce-constants/e-commerce-constants";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
  editmode = false;

  categoriesForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(RegexValidators.ENGLISH_CHARACTER)
    ]),
    icon: new FormControl('', [
      Validators.required,
      Validators.pattern(RegexValidators.ENGLISH_CHARACTER)
    ]),

  })

  constructor(private backendService: BackendService,
              private matSnackbar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  hasError(controlName: string, type: string) {
    const formControl = this.categoriesForm.get(controlName);
    return formControl && formControl.hasError(type) && formControl.touched;
  }

  enabledErrorIf(controlName: string, types: string[]) {
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      const formControl = this.categoriesForm.get(controlName);
      if (formControl && formControl.hasError(type) && formControl.touched)
        return true;
    }
    return false;
  }

  onFormSubmit() {
    if (this.categoriesForm.invalid) {
      return;
    }
    const data: any = this.categoriesForm.getRawValue();
    this.backendService.CreateCategories(data).subscribe((response: any) => {
      console.log(response.Success)
      if (response.Success) {
        this.matSnackbar.open('Category created successfully', undefined, {
          duration: 3000
        });
      }
    }, (errorResponse: any) => {
      let errorMessage = errorResponse?.error?.Message;
      if (errorMessage) {
        this.matSnackbar.open(errorMessage, undefined, {
          duration: 3000
        })
      }
    })
  }
}
