import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { EventSearchComponent } from './event-search/event-search.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navbar/navbar.component';
import { EventAddComponent } from './event-add/event-add.component';
import { UserAddComponent } from './user-add/user-add.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailComponent,
    UserDetailComponent,
    MessagesComponent,
    DashboardComponent,
    EventSearchComponent,
    UserSearchComponent,
    EventsComponent,
    UsersComponent,
    NavigationComponent,
    EventAddComponent,
    UserAddComponent,
    CabeceraComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //The in-memory-data.service.ts file takes over the function of mock-heroes.ts
    //HttpClientInMemoryWebApiModule.forRoot(
      //InMemoryDataService, { dataEncapsulation: false }
    //)
  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent, CabeceraComponent],
  
})
export class AppModule { }
