import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './layout/index/index.component';
import { AuthGuardService } from './helper/auth-guard.service';
import { ProfileComponent } from './user/profile/profile.component';
import { MenuComponent } from "./menu/menu.component";
import { CategoryProductsComponent } from "./category-products/category-products.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: IndexComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'categories/:id/products', component: CategoryProductsComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
