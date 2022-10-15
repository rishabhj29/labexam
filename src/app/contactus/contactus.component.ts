import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers:[StudentService]
})
export class ContactusComponent implements OnInit {

  Studentinfo1: string[]=[];
  Studentinfo2: string[]=[];
  Studentinfo3: string[]=[];

  getInfoFromService1(){
    this.Studentinfo1=this.myservice.getInfor1()
  }
  getInfoFromService2(){
    this.Studentinfo2=this.myservice.getInfor2()
  }
  getInfoFromService3(){
    this.Studentinfo3=this.myservice.getInfor3()
  }
  

  constructor(private myservice:StudentService) { }

  ngOnInit(): void {
  }

}
