import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OVFComponentComponent } from './ovfcomponent/ovfcomponent.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {path:'' ,component:OVFComponentComponent, pathMatch:'full'},
  {path:'login' , component:LoginComponent, pathMatch:'full'},
  {path:'secret/new', component:ForgotPasswordComponent, pathMatch:'full'},
  {path: 'register', component: SignupComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
