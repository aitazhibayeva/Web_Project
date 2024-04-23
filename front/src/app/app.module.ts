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
import { MenuComponent } from './menu/menu.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrondauComponent } from './brondau/brondau.component';
import { MatButton } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { FormsModule } from '@angular/forms'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    IndexComponent,
    ProfileComponent,
    EditUserComponent,
    MenuComponent,
    CategoryProductsComponent,
    ProductListComponent,
    BrondauComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MaterialModule, 
    MaterialModule, 
    MatButton, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatDialogModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    MatDividerModule
  ],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    provideAnimationsAsync(),
    MatDatepickerModule, 
    MatNativeDateModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

