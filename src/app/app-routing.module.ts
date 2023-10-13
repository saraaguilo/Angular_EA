import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

//Declaración de rutas para añadir navegación entre componentes
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'detail/:id', component: EventDetailComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
