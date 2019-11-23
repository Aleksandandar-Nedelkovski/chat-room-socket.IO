import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OauthAuthorizationService } from './oauth-authorization.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, satate: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authorization.IsAuthenticated) {
      this.router.navigate(["general"]);
      return false;
    }
      return true;
  }
  constructor(private router: Router, private authorization: OauthAuthorizationService) { }
}
