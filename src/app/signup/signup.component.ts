import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, EmailValidator } from '@angular/forms';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponents implements OnInit{
  signupForm:FormGroup;

  constructor(
    private authService:AuthService){}

  ngOnInit(): void {
      this.signupForm = this.createFormGroup();
  }
createFormGroup():FormGroup{
  return new FormGroup({
    uname: new FormControl("",[Validators.required,Validators.minLength(2)]),
    password: new FormControl("",[Validators.required,Validators.minLength(8)]),
    email: new FormControl("",[Validators.required,Validators.email]),

  });
}

signup(): void{
  this.authService.signup(this.signupForm.value)
  .subscribe((msg) => console.log(msg));
}


}


