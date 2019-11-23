import { Component } from '@angular/core';
import { OauthAuthorizationService } from './services/oauth-authorization.service';

@Component({
  selector: 'atp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: OauthAuthorizationService) {
    this.auth.CheckAuthentication();
  }
  title = 'Client';

  ngOnInit() {
    if (this.auth.IsAuthenticated) {
      this.auth.Renew();
    }
  }
}
