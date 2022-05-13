import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  public greetings: string =""
  public dangerText = "danger-text"
  public hasError =true;
  public name ="";
  public color="indio"
  public Employee:any =[];
  public date = new Date()
  public value = 200
  @Input() appData : string | undefined
  
  constructor(private _employe : HeaderService) { }

  ngOnInit(): void {
    this.Employee = this._employe.getEmployee()
  }
  onClick (data: HTMLInputElement) {
    this.greetings=`Welcome my brother ${data.value}` 
  }

}
