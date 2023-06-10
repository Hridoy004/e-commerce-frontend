import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { Category } from "../../interfaces/category.interface";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private backendService: BackendService,
    private router: Router) {

  }

  ngOnInit(): void {
    this._getCategories();
  }

  deleteCategory(categoryId: string) {

  }

  updateCategory(categoryId: string) {

  }

  private _getCategories() {
    this.backendService.GetCategories().subscribe((response: any) => {
      this.categories = response;
    });
  }
}
