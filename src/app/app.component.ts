import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']



})
export class AppComponent implements OnInit
{

 public title="Your 360° Cricket platform";

 constructor(private service:AppServiceService)
 {

 }

 ngOnInit(): void {

 }
 getDataFromAPI()
 {
  this.service.getData().subscribe((Response)=> {
    console.log('response from api',Response)
  },(error) => {
    console.log('error',error)
  })



 }
}




