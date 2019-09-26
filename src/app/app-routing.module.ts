import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './login/events/events.component';
import { SpecialEventsComponent } from './login/special-events/special-events.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'special', component: SpecialEventsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
