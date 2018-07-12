import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { DashboardComponent } from '../dashboard/dashboard.component'; 

const route: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'homepage/add-user', component: AddUserComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
