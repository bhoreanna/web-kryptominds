import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { RoleMasterComponent } from './role-master/role-master.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth', component: LoginComponent
  },

  {
    path: 'sign-up', component: SignupComponent
  },


  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuardService],
    children: [
      {
        path: 'role-master', component: RoleMasterComponent, canActivate: [AuthGuardService]
      },
      {
        path: 'user-master', component: UserMasterComponent, canActivate: [AuthGuardService]
      },

      {
        path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuardService]
      },
      {
        path: 'profile-page', component: ProfilePageComponent, canActivate: [AuthGuardService]
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
