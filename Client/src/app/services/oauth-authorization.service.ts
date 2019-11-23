import { Injectable } from '@angular/core';
import { Authorization } from './authorization';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Log } from '../Types/Logging';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class OauthAuthorizationService {
  private readonly authorization: Authorization;
  constructor(private router: Router, private socket: Socket) {
    this.authorization = new Authorization(socket);
  }

  auth0 = new auth0.WebAuth({
    clientID: 'fBT80OaIi9Mhl66LkNSaTBa1ciZfJNif',
    domain: 'dev-7anpkv8l.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    // redirectUri: "https://dev-7anpkv8l.auth0.com/callback",
    scope: 'openid email'
  });

  @Log()
  public Login(): void {
    this.auth0.authorize();
  }

  @Log()
  public Logout(): void {
    this.authorization.Clear();
    this.auth0.logout({
      returnTo: window.location.origin
    });
  }

  @Log()
  public CheckAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (!err) {
        this.authorization.SetFromAuthorizationResult(authResult);
        window.location.hash = '';
        this.router.navigate(['/secret']);
      } else {
        this.router.navigate(['/general']);
        console.log(err);
      }
    });
  }

  @Log()
  public Renew(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.authorization.SetFromAuthorizationResult(authResult);
      } else if (err) {
        this.Logout();
      }
    });
  }
  public get IsAuthenticated(): boolean { return this.authorization.IsAuthenticated; }
}