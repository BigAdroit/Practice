import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  topics = ["Angular", "React", "Vue"]
  isDisplay= false
  formShow= true;
  constructor() { }

  ngOnInit(): void {
  }
userModel:any = new Users ("fola", "yetunde", "adroit819@gmail.com", "default", "Hello world")
onSubmit(){
  
  console.log(this.userModel)
  this.isDisplay = true
  this.formShow =false

  if(!localStorage.getItem("userComment")) {
    let arr = []
    arr.push(this.userModel)
    localStorage.setItem("userComment", JSON.stringify(arr))
  }else {
    let arr= JSON.parse(localStorage.getItem("userComment")!)
    arr.push(this.userModel)
    localStorage.setItem("userComment",JSON.stringify(arr))
  }

  // setInterval(()=>{
  //   window.open("/header", 'self')
  // }, 3000)

  
}
}