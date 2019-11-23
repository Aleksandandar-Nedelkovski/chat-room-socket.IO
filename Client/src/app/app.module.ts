import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { NavigationComponent } from './components/navigation/navigation.component';

const config: SocketIoConfig = {url: "http://localhost:3000", options: {}}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
