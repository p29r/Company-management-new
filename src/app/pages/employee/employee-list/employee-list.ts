import { Component, inject, OnInit } from '@angular/core';
import { IEmployeeModel } from '../../../core/models/interfaces/employeeModel.model';
import { EmployeeService } from '../../../core/services/employee-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {

  employeeList: IEmployeeModel[] = [];

  //service
  employeeService = inject(EmployeeService);

  ngOnInit(): void {
    this.getAllEmployeeList();
  }


  getAllEmployeeList() {
    this.employeeService.getAllEmployee().subscribe({
      next: (res: any) => {
        debugger;
        this.employeeList = res.data;

      },
      error: () => {
        debugger;
      }
    })
  }
}
