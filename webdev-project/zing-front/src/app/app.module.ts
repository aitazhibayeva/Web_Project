import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {authInterceptorProviders, AuthInterceptorService} from './helper/auth-interceptor.service';
import {authErrorInterceptorProviders} from './helper/error-interceptor.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IndexComponent } from './layout/index/index.component';
import { ProfileComponent } from './user/profile/profile.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    IndexComponent,
    ProfileComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

