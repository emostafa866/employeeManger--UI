import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../service/employee.service';
import { Employee } from './employee';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList:Employee[]=[];

constructor(private empService:EmployeeService){}

ngOnInit() {
  this.getAllEmployees();
}

public getAllEmployees(){

  this.empService.getAllEmployees().subscribe((res:Employee[])=>{
    this.employeeList=res;
  })
}

public openModal(employee:Employee,mode:String):void{

  const container= document.getElementById('container')
  const button = document.createElement('button');
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-bs-toggle','modal');

  if(mode==='add'){
    button.setAttribute('data-bs-target','addModal')
  }
  if(mode==='update'){
    button.setAttribute('data-bs-target','updateModal')
  }
  if(mode==='delete'){
    button.setAttribute('data-bs-target','deleteModal')
  }
  container?.appendChild(button);
  button.click();

}

}
