import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { User } from "../../../app-shared-services/interfaces/user.interface";
import { ConfirmationService } from "primeng/api";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private backendService: BackendService,
    private confirmationService: ConfirmationService,
    private matSnackbar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit(): void {
    this._getCategories();
  }

  deleteCategory(userId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this user?',
      header: 'Delete User',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.backendService.DeleteUser(userId).subscribe((response) => {
          this._getCategories();
        });
      }
    });
  }

  private _getCategories() {
    this.backendService.GetUser().subscribe((response: any) => {
      this.users = response;
      console.log("user", response);
    });
  }
}
