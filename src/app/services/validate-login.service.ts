import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ValidateLoginService implements CanActivate {


  constructor(private router: Router) { }

  canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean | Observable<boolean> | Promise<boolean> {
    if(!localStorage.getItem('loggedInUser')) {
      this.router.navigate(['/']);
      return false;
    }
    return true;

  }

}
