import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { User } from "../../../app-shared-services/interfaces/user.interface";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-settings-account',
  templateUrl: './settings-account.component.html',
  styleUrls: ['./settings-account.component.scss']
})
export class SettingsAccountComponent implements OnInit {

  user: any;

  categoriesForm = new FormGroup({
    Email: new FormControl('', [
      Validators.required
    ]),
    Id: new FormControl('', [
      Validators.required
    ])
  })

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.check();
  }

  private check() {
    this.backendService.Profile().subscribe((response: any) => {
      this.categoriesForm.get('Email')?.setValue(response.User.Email);
      this.categoriesForm.get('Id')?.setValue(response.User.UserId);
      let us = this.user = response.User.UserId;
      console.log("userId", us);
    })

  }

  onFormSubmit() {

  }
}
