import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

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


  constructor() {}
  ngOninit() : void {
}
HideShowPass() {

  this.isText = this.isText;
  this.isText ? this.eyeIcon = "fa-eye": this.eyeIcon="fa fa-eye-slash";
  this.isText ? this.type = "text" :this.type = "password";
}
}