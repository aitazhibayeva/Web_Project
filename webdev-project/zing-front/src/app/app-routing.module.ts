import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './layout/index/index.component';
import { AuthGuardService } from './helper/auth-guard.service';
import { ProfileComponent } from './user/profile/profile.component';

// add canActivate: [AuthGuardService] for main, profile all
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: IndexComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: '', redirectTo: 'register', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
