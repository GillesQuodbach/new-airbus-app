import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticateService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isUserLoggedIn$().pipe(
      map((isLoggedIn) => {
        if (isLoggedIn) {
          console.log('From guard USER CONNECTED');
          return true;
        } else {
          this.router.navigateByUrl('/login');
          console.log('From guard USER NOT CONNECTED');
          return false;
        }
      })
    );
  }
}
