import { Component, OnInit } from '@angular/core';
import { TokenService } from "../../../app-shared-services/services/token.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private tokenService: TokenService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  logoutUser() {
    this.tokenService.removeToken();
    this.router.navigate(['/auth/login'])
  }
}
