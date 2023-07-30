import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { User } from "../../../app-shared-services/interfaces/user.interface";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginAuthorizeComponent implements CanActivate {
  constructor(private router: Router, private userService: BackendService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.Profile().pipe(
      map((res: any) => {
        const roles: string[] = res.User.Roles; // Assuming the roles are an array of strings
        if (roles.includes('admin')) {
          // User is an admin, allow access to the dashboard
          return true;
        } else if (roles.includes('user')) {
          // User is a regular user, redirect to the client-side
          this.router.navigate(['/']); // Change '/client' to the appropriate route for the client-side
          return false;
        } else {

          return false;
        }
      })
    );
  }
}
