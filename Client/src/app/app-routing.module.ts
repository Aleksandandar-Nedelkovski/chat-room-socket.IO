import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';
import { GeneralChatComponent } from "./components/general-chat/general-chat.component";
import { SecretChatComponent } from "./components/secret-chat/secret-chat.component";


const routes: Routes = [
  { path: '', redirectTo: 'general', pathMatch: 'full' },
  { path: 'general', component: GeneralChatComponent },
  { path: 'secret', component: SecretChatComponent, canActivate: [AuthorizationService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
