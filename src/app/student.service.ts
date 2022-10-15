import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  infor1:string[]=['Suraj','Angular','15/11/2022']

  infor2:string[]=['Sakshi','NodeJS','4/10/2022']

  infor3:string[]=['Rishabh','TypeScript','20/8/2022']

  getInfor1():string[]{
    return this.infor1
  }

  getInfor2():string[]{
    return this.infor2
  }

  getInfor3():string[]{
    return this.infor3
  }

  constructor() { }
}
    