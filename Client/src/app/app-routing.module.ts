import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';
import { GeneralchatComponent } from "./components/general-chat/general-chat.component";
import { SecretchatComponent } from "./components/secret-chat/secret-chat.component";


const routes: Routes = [
  { path: '', redirectTo: 'general', pathMatch: 'full' },
  { path: 'general', component: GeneralchatComponent },
  { path: 'secret', component: SecretchatComponent, canActivate: [AuthorizationService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
