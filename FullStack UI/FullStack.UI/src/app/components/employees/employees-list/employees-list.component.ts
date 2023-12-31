import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
  router: any;

  constructor (private employeesService: EmployeesService) {}

  ngOnInit(): void {

    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  deleteEmployee(id: string){
    this.employeesService.deleteEmployee(id).subscribe({
      next:(Response)=>{
        this.router.navigate(['employees']);
      }
    })
  }
}
