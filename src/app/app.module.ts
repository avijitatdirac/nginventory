import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContentComponent } from './content/content.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GenerateChallanComponent } from './generate-challan/generate-challan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChallanComponent } from './challan/challan.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    SideNavComponent,
    ContentComponent,
    HomepageComponent,
    GenerateChallanComponent,
    DashboardComponent,
    ChallanComponent,
    NewcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
