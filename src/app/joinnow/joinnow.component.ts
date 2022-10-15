import { Input,Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})


export class JoinnowComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }

  defaultState:string="Maharashtra";
  address:string = '';
  genders = ['Male','Female','Transgender'];
  regDetails:string = '';


  regModel = {

    regName :'',
    regPhone :'',
    regAddress :'',
    regState :'',
    regEmail :'',
    regGender:''

  };


  onSubmit(frm:NgForm){

    this.regModel.regName = frm.value.regGrpData.inp_name;
    this.regModel.regPhone = frm.value.regGrpData.inp_phone;
    this.regModel.regAddress = frm.value.regGrpData.inp_address;
    this.regModel.regGender = frm.value.regGrpData.inp_genders;
    this.regModel.regState = frm.value.regGrpData.inp_states;
    this.regModel.regEmail = frm.value.regGrpData.inp_email;

    console.log(frm);

    this.regDetails = "Name: "+this.regModel.regName+"\n"+
                      "Phone No: "+this.regModel.regPhone+"\n"+
                      "Address: "+this.regModel.regAddress+"\n"+
                      "Email: "+this.regModel.regEmail+"\n"+
                      "State: "+this.regModel.regState+"\n"+
                      "Gender: "+this.regModel.regGender+"\n"
                      
                      
                      ;

  }


}
