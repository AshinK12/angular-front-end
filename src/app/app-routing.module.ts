import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MeanComponent } from './mean/mean.component'; 
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [{path:'login', component:LoginComponent},
{path:'signup', component:SignupComponent },
{path:'mean',component: MeanComponent},
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'not-found', component:NotFoundComponent},{path:'',redirectTo:'/login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }