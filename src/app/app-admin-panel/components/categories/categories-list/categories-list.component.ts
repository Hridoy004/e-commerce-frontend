import { Component, OnInit } from '@angular/core';
import { Category } from "../../../interfaces/category.interface";
import { BackendService } from "../../../../app-shared-services/services/backend.service";
import { ConfirmBoxComponent } from "../../confirm-box/confirm-box.component";
import { ConfirmationService, MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { Subject } from "rxjs";


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[] = [];
  endsubs$: Subject<any> = new Subject();


  constructor(private backendService: BackendService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private router: Router) {
  }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    this.endsubs$.complete();
  }

  deleteCategory(categoryId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete this Category?',
      header: 'Delete Category',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

      }
    });
  }

  updateCategory(categoryid: string) {
    this.router.navigateByUrl(`categories/form/${categoryid}`);
  }


}
