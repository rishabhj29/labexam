import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }
  Amount=2000;

  ngOnInit(): void {
  }  
  course=[
    {'id':1,'name':'TypeScript','amount':3000,'discription':'TypeScript is a superset of the JavaScript language that has a single open-source compiler and is developed mainly by a single vendor: Microsoft','image':'../../assets/typescript.png'},
    {'id':2,'name':'NodeJS','amount':4500,'discription':'Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.  ','image':'../../assets/nodejs.png'},
    {'id':3,'name':'Angular','amount':1500,'discription':' Angular is used is to develop single-page applications. ','image':'../../assets/angular.png'},
    {'id':4,'name':'ReactJS','amount':2300,'discription':' React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. ','image':'../../assets/reactjs.png'},
  ]

}
