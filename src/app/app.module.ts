import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from './http/http-intercepter-basic-auth.service';
import { FormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from './my-own-custom-material/my-own-custom-material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SignupComponent } from './auth/signup/signup.component';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    // SignupComponent,

    HeaderComponent,

    UserMasterComponent,
    RoleMasterComponent,
    AdminDashboardComponent,
    ProfilePageComponent,
    FooterComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    // FlexLayoutModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
