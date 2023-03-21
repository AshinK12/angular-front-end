import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  type:string = "password";
isText:boolean=false
 eyeIcon:string="fa-eye-slash";
 title="Your 360° Cricket platform";

 constructor() {}
 ngOninit() : void {
}
HideShowPass() {

 this.isText = this.isText;
 this.isText ? this.eyeIcon = "fa-eye": this.eyeIcon="fa fa-eye-slash";
 this.isText ? this.type = "text" :this.type = "password";
}

}
