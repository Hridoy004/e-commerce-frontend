import { Component, OnInit } from '@angular/core';
import { Category } from "../../interfaces/category.interface";
import { BackendService } from "../../../app-shared-services/services/backend.service";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private backendService: BackendService) { }

  displayedColumns: string[] = ['position', 'name', 'icon'];

  ngOnInit(): void {
    this.GetAllCategories();
  }

  GetAllCategories() {
    this.backendService.Category().subscribe((response: any) => {
      this.categories = response;
      console.log(response);
    })
  }

}
