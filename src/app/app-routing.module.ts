import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch: "full"},
  {path: "signup", component:SignupComponent},
  {path: "login", component:LoginComponent},
  {path: "home", component:HomeComponent},
  {path: "products", component:ProductsComponent},
  {path: "cart", component: CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
