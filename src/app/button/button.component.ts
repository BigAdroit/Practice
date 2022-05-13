import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Iemployee } from '../Iemployee';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text : string | undefined | number  ;
  @Input() bgcolor : string | undefined | number | Boolean ;
  @Input() color: string | undefined | number | Boolean;
  @Output() btnClick = new EventEmitter()

  employee : Iemployee[] = []
  public title : string ="Http Request Page"
  constructor(private employeeService : EmployeeServiceService, private route : Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployee()
        .subscribe(data => this.employee = data)
  }

  onClick(){
    this.btnClick.emit()
  }

  onDelete(data : Iemployee) {
    this.employeeService.deleteRecord(data)
      .subscribe(()=> this.employee = this.employee.filter((t)=> t.id !== data.id))
  }

  addEmployee() {
    const emp = {
      "id" : 6,
       "name" : " Adekogbe Sodeeq",
       "stack" : "C++"
     }

     this.employeeService.addRecord(emp)
      .subscribe((data)=> this.employee.push(emp))
  }

  navigate(data : Iemployee) {
    this.route.navigate(['/details', data.id]);
  }
}