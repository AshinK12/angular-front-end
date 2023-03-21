import { Component } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faLock=faLock;
type:string = "password";
isText:boolean=false
 eyeIcon:string="fa-eye-slash";
 title="Your 360° Cricket platform";

 loginForm = new FormGroup({
  Username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),

 });
   constructor(private router : Router) {}
  login()
  {
    const username = this.loginForm.get('Username')?.value;
    const password = this.loginForm.get('password')?.value;

   if (username === 'user' && password === 'password' )
   {
    this.router.navigate(['/admin-dashboard']);
   }
   else{
    alert('invalid username and password');
   }
}
}