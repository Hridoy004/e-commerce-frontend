import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { Category } from "../../interfaces/category.interface";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: 'app-admin-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private backendService: BackendService,
    private confirmationService: ConfirmationService,
    private router: Router) {
  }

  ngOnInit(): void {
    this._getCategories();
  }

  deleteCategory(categoryId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete this Category?',
      header: 'Delete Category',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.backendService.DeleteCategories(categoryId).subscribe(() => {
          this._getCategories();
        });
      }
    });
  }

  updateCategory(categoryId: string) {
    this.router.navigateByUrl(`/a/c/categories-form/${categoryId}`);
  }

  private _getCategories() {
    this.backendService.GetCategories().subscribe((response: any) => {
      this.categories = response;
    });
  }
}
