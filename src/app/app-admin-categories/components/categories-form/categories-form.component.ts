import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-admin-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
  editmode = false;

  categoriesForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    icon: new FormControl('', [
      Validators.required
    ]),
    color: new FormControl('')
  })

  constructor(private backendService: BackendService,
              private matSnackbar: MatSnackBar,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._checkEditMode();
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
    if (this.editmode) {
      this.route.params.subscribe(params => {
        data.id = params['id'];
        this.backendService.UpdateCategories(data).subscribe((response: any) => {
          if (response.Success) {
            this.matSnackbar.open('Category updated successfully', undefined, {
              duration: 3000
            });
            this.router.navigate(['/a/c/categories-list']).then();
          }
        }, (errorResponse: any) => {
          let errorMessage = errorResponse?.error?.Message;
          if (errorMessage) {
            this.matSnackbar.open(errorMessage, undefined, {
              duration: 3000
            })
          }
        })
      })
    } else {
      this.backendService.CreateCategories(data).subscribe((response: any) => {
        if (response.Success) {
          this.matSnackbar.open('Category created successfully', undefined, {
            duration: 3000
          });
          this.router.navigate(['/a/c/categories-list']).then();
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

  cancel() {
    this.router.navigate(['/a/c/categories-list']);
  }

  private _checkEditMode() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.editmode = true;
        this.backendService.GetCategoriesId(params['id']).subscribe((response: any) => {
          this.categoriesForm.get('name')?.setValue(response.name);
          this.categoriesForm.get('icon')?.setValue(response.icon);
          this.categoriesForm.get('color')?.setValue(response.color);
        })
      }
    })
  }
}
