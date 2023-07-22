import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../../app-shared-services/services/backend.service";

@Component({
  selector: 'app-settings-account',
  templateUrl: './settings-account.component.html',
  styleUrls: ['./settings-account.component.scss']
})
export class SettingsAccountComponent implements OnInit {
  user: any;

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.check();
  }

  private check() {
    this.backendService.Profile().subscribe((response: any) => {
      this.user = response;
      console.log(response);
    })
  }
}
