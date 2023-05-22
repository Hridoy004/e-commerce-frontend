import { Component, OnInit } from '@angular/core';
import { Category } from "../../interfaces/category.interface";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmBoxComponent } from "../confirm-box/confirm-box.component";


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private backendService: BackendService,
              private dialog: MatDialog) {
  }

  displayedColumns: string[] = ['position', 'name', 'icon', 'button'];

  ngOnInit(): void {
    this.GetAllCategories();
  }

  /* deleteCategory(categoryId: string) {
     this.backendService.DeleteCategories(categoryId).subscribe((response: any) => {
       console.log(response);
       console.log('deleted');
     })
   }*/

  GetAllCategories() {
    this.backendService.GetCategories().subscribe((response: any) => {
      this.categories = response;
      console.log(response);
    })
  }

  deleteCategory(categoryId: string) {
    const dialogRef = this.dialog.open(ConfirmBoxComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmBoxComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
