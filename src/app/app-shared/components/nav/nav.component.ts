import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { User } from "../../../app-shared-services/interfaces/user.interface";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  admin: boolean = false;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.Profile().subscribe((response:any) => {
      if (response.User?.Roles == "admin") {
        this.admin = true;
      }
    })
  }
}
