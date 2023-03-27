import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginform:FormGroup;
Username:string;
Password:string;

constructor() {


  }





login():void{

  console.log(this.Username);
  console.log(this.Password);

}
}


//   faLock=faLock;
// type:string = "password";
// isText:boolean=false
//  eyeIcon:string="fa-eye-slash";

// // onSubmit() {
// // throw new Error('Method not implemented.');
// // }
// //   loginForm: FormGroup;

//   // constructor(private fb: FormBuilder) {
//   //   this.loginForm = this.fb.group({
//   //     username: ['', Validators.required],
//   //     password: ['', Validators.required]
//   //   });

//   HideShowPass() {

//     this.isText = this.isText;
//     this.isText ? this.eyeIcon = "fa-eye": this.eyeIcon="fa fa-eye-slash";
//     this.isText ? this.type = "text" :this.type = "password";
//   }


