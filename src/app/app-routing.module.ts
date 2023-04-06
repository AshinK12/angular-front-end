import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MeanComponent } from './mean/mean.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponents } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CoachesComponent } from './coaches/coaches.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [{path:'login', component:LoginComponent},
{path:'', component:SignupComponents},
{path:'about',component:AboutComponent},
{path:'mean',component: MeanComponent},
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'not-found', component:NotFoundComponent},
{path:"admin-dashboard", component:AdminDashboardComponent},
{path:'bookingcomponent', component:BookingComponent},
{path :'courses',component:CoursesComponent},
{path:"contact",component:ContactComponent},{path:'coaches',component:CoachesComponent},{path:'',redirectTo:'/login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
