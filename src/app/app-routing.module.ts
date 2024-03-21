import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AlertComponent } from './components/aircrafts/alert/alert.component';
import { LoginComponent } from './components/login/login.component';
import { UserGuard } from './components/user.guard';

const routes: Routes = [
  {
    path: 'aircrafts',
    component: AircraftsComponent,
    canActivate: [UserGuard],
  },
  { path: 'alert', component: AlertComponent, canActivate: [UserGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
